const { test, expect } = require('@playwright/test');
const path = require('path');

const FILE_URL = 'file://' + path.resolve(__dirname, '../index.html');
const PASSWORD = 'quadgrowth2026';

// Helper: load the page and unlock the auth gate
async function loadAndUnlock(page) {
  await page.goto(FILE_URL);
  await page.fill('#authInput', PASSWORD);
  await page.click('.auth-btn');
  await expect(page.locator('#appContent')).toBeVisible();
}

// ─── AUTH GATE ────────────────────────────────────────────────────────────────

test.describe('Auth gate', () => {
  test('auth box fits within viewport — no horizontal scroll', async ({ page }) => {
    await page.goto(FILE_URL);
    const overflow = await page.evaluate(() =>
      document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(overflow, 'Page should not have horizontal overflow').toBe(false);
  });

  test('auth input and button have adequate touch target height (≥44px)', async ({ page }) => {
    await page.goto(FILE_URL);
    const inputHeight = await page.locator('#authInput').evaluate(el => el.getBoundingClientRect().height);
    const btnHeight = await page.locator('.auth-btn').evaluate(el => el.getBoundingClientRect().height);
    expect(inputHeight, 'Auth input should be ≥44px tall').toBeGreaterThanOrEqual(44);
    expect(btnHeight, 'Auth button should be ≥44px tall').toBeGreaterThanOrEqual(44);
  });
});

// ─── NO HORIZONTAL OVERFLOW on any tab ────────────────────────────────────────

const TABS = ['qa', 'checklist', 'scripts', 'coach', 'persona', 'branding', 'bible'];

test.describe('No horizontal overflow', () => {
  test('page does not overflow horizontally on the Q&A tab', async ({ page }) => {
    await loadAndUnlock(page);
    const overflow = await page.evaluate(() =>
      document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(overflow, 'Q&A tab should not have horizontal overflow').toBe(false);
  });

  for (const tab of ['checklist', 'scripts', 'coach', 'persona', 'bible']) {
    test(`no horizontal overflow on "${tab}" tab`, async ({ page }) => {
      await loadAndUnlock(page);
      await page.evaluate(t => window.switchTab(t), tab);
      await page.waitForTimeout(400); // let animation finish
      const overflow = await page.evaluate(() =>
        document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(overflow, `"${tab}" tab should not cause horizontal overflow`).toBe(false);
    });
  }
});

// ─── TAB BAR ──────────────────────────────────────────────────────────────────

test.describe('Tab bar', () => {
  test('all tabs are visible/accessible (tab bar scrolls rather than clips)', async ({ page }) => {
    await loadAndUnlock(page);
    const tabBar = page.locator('.tabs');

    // All 7 tabs should exist in the DOM
    await expect(tabBar.locator('.tab')).toHaveCount(7);

    // Each tab should be accessible (not hidden by overflow clipping)
    // We check the tab bar has overflow-x scroll enabled OR all tabs fit
    const tabBarOverflowX = await tabBar.evaluate(el => getComputedStyle(el).overflowX);
    const tabBarScrollWidth = await tabBar.evaluate(el => el.scrollWidth);
    const tabBarClientWidth = await tabBar.evaluate(el => el.clientWidth);

    const allFit = tabBarScrollWidth <= tabBarClientWidth;
    const isScrollable = ['auto', 'scroll'].includes(tabBarOverflowX);

    expect(allFit || isScrollable, 'Tabs must either all fit or be in a scrollable container').toBe(true);
  });

  test('each tab button is at least 44px tall (touch target)', async ({ page }) => {
    await loadAndUnlock(page);
    const tabs = page.locator('.tab');
    const count = await tabs.count();
    for (let i = 0; i < count; i++) {
      const height = await tabs.nth(i).evaluate(el => el.getBoundingClientRect().height);
      expect(height, `Tab ${i} should be ≥44px tall`).toBeGreaterThanOrEqual(44);
    }
  });
});

// ─── FLASHCARD SECTION ────────────────────────────────────────────────────────

test.describe('Flashcard section', () => {
  test('flashcard fits within viewport width', async ({ page }) => {
    await loadAndUnlock(page);
    const cardRight = await page.locator('.flashcard').evaluate(el => el.getBoundingClientRect().right);
    const viewportWidth = page.viewportSize().width;
    expect(cardRight, 'Flashcard right edge should be within viewport').toBeLessThanOrEqual(viewportWidth + 1);
  });

  test('card nav buttons fit side-by-side without overflowing', async ({ page }) => {
    await loadAndUnlock(page);
    const navRight = await page.locator('.card-nav').evaluate(el => el.getBoundingClientRect().right);
    const viewportWidth = page.viewportSize().width;
    expect(navRight, 'Card nav should not exceed viewport width').toBeLessThanOrEqual(viewportWidth + 1);
  });

  test('card flip works on tap/click', async ({ page }) => {
    await loadAndUnlock(page);
    await expect(page.locator('.flashcard')).not.toHaveClass(/flipped/);
    await page.locator('.flashcard').click();
    await expect(page.locator('.flashcard')).toHaveClass(/flipped/);
  });
});

// ─── CHECKLIST SECTION ────────────────────────────────────────────────────────

test.describe('Checklist section', () => {
  test('checklist summary stats do not overflow', async ({ page }) => {
    await loadAndUnlock(page);
    await page.evaluate(() => window.switchTab('checklist'));
    await page.waitForTimeout(400);
    const summaryRight = await page.locator('.checklist-summary').evaluate(el => el.getBoundingClientRect().right);
    const viewportWidth = page.viewportSize().width;
    expect(summaryRight, 'Checklist summary should not overflow viewport').toBeLessThanOrEqual(viewportWidth + 1);
  });
});

// ─── COACH SECTION ────────────────────────────────────────────────────────────

test.describe('AI Coach section', () => {
  test('coach config fields stack vertically on small screens', async ({ page }) => {
    await loadAndUnlock(page);
    await page.evaluate(() => window.switchTab('coach'));
    await page.waitForTimeout(400);

    const { width } = page.viewportSize();
    if (width <= 768) {
      // On mobile/tablet, coach fields should stack (each field near full width)
      const fields = page.locator('.coach-field');
      const count = await fields.count();
      for (let i = 0; i < count; i++) {
        const fieldWidth = await fields.nth(i).evaluate(el => el.getBoundingClientRect().width);
        expect(fieldWidth, `Coach field ${i} should be close to full width on small screen`).toBeGreaterThan(width * 0.7);
      }
    } else {
      // On desktop, just check no overflow
      const overflow = await page.evaluate(() =>
        document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(overflow).toBe(false);
    }
  });

  test('action buttons row does not overflow viewport', async ({ page }) => {
    await loadAndUnlock(page);
    await page.evaluate(() => window.switchTab('coach'));
    await page.waitForTimeout(400);
    const rowRight = await page.locator('#coach .coach-action-row').evaluate(el => el.getBoundingClientRect().right);
    const viewportWidth = page.viewportSize().width;
    expect(rowRight, 'Coach action row should not exceed viewport').toBeLessThanOrEqual(viewportWidth + 1);
  });
});

// ─── PERSONA SECTION ──────────────────────────────────────────────────────────

test.describe('Persona section', () => {
  test('persona cards do not overflow viewport', async ({ page }) => {
    await loadAndUnlock(page);
    await page.evaluate(() => window.switchTab('persona'));
    await page.waitForTimeout(400);

    const cards = page.locator('.persona-card');
    const count = await cards.count();
    const viewportWidth = page.viewportSize().width;
    for (let i = 0; i < count; i++) {
      const right = await cards.nth(i).evaluate(el => el.getBoundingClientRect().right);
      expect(right, `Persona card ${i} should not exceed viewport`).toBeLessThanOrEqual(viewportWidth + 1);
    }
  });

  test('persona cards are full width on mobile', async ({ page }) => {
    await loadAndUnlock(page);
    await page.evaluate(() => window.switchTab('persona'));
    await page.waitForTimeout(400);

    const { width } = page.viewportSize();
    if (width <= 480) {
      const cardWidth = await page.locator('.persona-card').first().evaluate(el => el.getBoundingClientRect().width);
      // Should be at least 85% of viewport on mobile
      expect(cardWidth, 'Persona card should be near full-width on mobile').toBeGreaterThan(width * 0.85);
    }
  });
});

// ─── BIBLE (Vault) SECTION ────────────────────────────────────────────────────

test.describe('Vault section', () => {
  test('bible filter buttons wrap gracefully — no overflow', async ({ page }) => {
    await loadAndUnlock(page);
    await page.evaluate(() => window.switchTab('bible'));
    await page.waitForTimeout(400);

    const filterRight = await page.locator('#bibleFilters').evaluate(el => el.getBoundingClientRect().right);
    const viewportWidth = page.viewportSize().width;
    expect(filterRight, 'Bible filters should not exceed viewport').toBeLessThanOrEqual(viewportWidth + 1);
  });

  test('access matrix table is horizontally scrollable (not clipped)', async ({ page }) => {
    await loadAndUnlock(page);
    await page.evaluate(() => window.switchTab('bible'));
    await page.waitForTimeout(400);

    const wrapOverflow = await page.locator('.bible-table-wrap').evaluate(el =>
      getComputedStyle(el).overflowX
    );
    expect(['auto', 'scroll'], 'Table wrapper should have overflow-x: auto or scroll').toContain(wrapOverflow);
  });
});
