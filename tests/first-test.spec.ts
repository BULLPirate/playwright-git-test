import { test, expect } from '@playwright/test';

test('Проверка заголовка сайта Playwright', async ({ page }) => {
  // 1. Переходим на сайт
  await page.goto('https://playwright.dev/');

  // 2. Проверяем, что заголовок страницы содержит слово "Playwright"
  await expect(page).toHaveTitle(/Playwright/);

  // 3. Находим кнопку "Get started" и кликаем по ней
  await page.getByRole('link', { name: 'Get started' }).click();

  // 4. Проверяем, что заголовок h1 на новой странице содержит "Installation"
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
