const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

let browser, page, loginPage;

Given('je suis sur la page de connexion du portail AssurTest', async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.naviguer();
});

When('je saisis les identifiants du profil gestionnaire standard', async () => {
  await loginPage.saisirIdentifiants('standard_user', 'secret_sauce');
});

When("je saisis les identifiants d'un profil gestionnaire désactivé", async () => {
  await loginPage.saisirIdentifiants('locked_out_user', 'secret_sauce');
});

When('je saisis un identifiant valide et un mot de passe incorrect', async () => {
  await loginPage.saisirIdentifiants('standard_user', 'mauvais_mdp');
});

When('je clique sur le bouton de connexion', async () => {
  await loginPage.cliqueSurConnexion();
});

Then('je suis redirigee vers le catalogue des contrats assurance', async () => {
  await loginPage.verifierConnexionReussie();
  await browser.close();
});

Then('un message erreur indique que acces est bloque', async () => {
  await loginPage.verifierMessageErreur('Epic sadface: Sorry, this user has been locked out.');
  await browser.close();
});

Then('un message erreur indique que les identifiants sont incorrects', async () => {
  await loginPage.verifierMessageErreur('Epic sadface: Username and password do not match any user in this service');
  await browser.close();
});