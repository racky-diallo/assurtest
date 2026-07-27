const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

let browser, page, loginPage, inventoryPage, cartPage, checkoutPage;

Given('je suis connectee au portail AssurTest pour souscrire', async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.naviguer();
  await loginPage.saisirIdentifiants('standard_user', 'secret_sauce');
  await loginPage.cliqueSurConnexion();
  await page.waitForURL('**/inventory.html');
  inventoryPage = new InventoryPage(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);
});

When("j'ajoute le contrat MRH1 au panier d'emission", async () => {
  await inventoryPage.ajouterAuPanier('Sauce Labs Backpack');
});

When("je consulte le panier d'emission", async () => {
  await cartPage.ouvrirPanier();
  await cartPage.verifierProduitDansPanier('Sauce Labs Backpack');
});

When('je saisis les informations du souscripteur', async () => {
  await cartPage.cliqueSurCheckout();
  await checkoutPage.saisirInformations('Test', 'User', '44000');
});

When('je valide la recapitulation de la souscription', async () => {
  await checkoutPage.validerRecapitulatif();
});

Then('la souscription est confirmee avec succes', async () => {
  await checkoutPage.verifierConfirmation();
  await browser.close();
});