const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

let browser, page, inventoryPage;

Given('je suis connectee au portail AssurTest', async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  const loginPage = new LoginPage(page);
  await loginPage.naviguer();
  await loginPage.saisirIdentifiants('standard_user', 'secret_sauce');
  await loginPage.cliqueSurConnexion();
  await page.waitForURL('**/inventory.html');
  inventoryPage = new InventoryPage(page);
});

When('je consulte le catalogue des contrats', async () => {
  await inventoryPage.verifierCatalogueVisible();
});

Then('le contrat {string} est affiche avec le tarif {string}', async (contrat, tarif) => {
  await inventoryPage.verifierContrat(contrat, tarif);
  await browser.close();
});