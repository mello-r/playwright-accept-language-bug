import { expect, test } from '@playwright/test';

test('should switch to german date format', async ({ page }) => {
  page.goto('/')
  const dateInput = page.getByLabel('Date')
  await dateInput.pressSequentially('20.01.2023')
  expect(dateInput).toHaveValue("2023-01-20")
})
