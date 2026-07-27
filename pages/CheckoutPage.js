class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.champPrenom = page.locator('[data-test="firstName"]');
    this.champNom = page.locator('[data-test="lastName"]');
    this.champCodePostal = page.locator('[data-test="postalCode"]');
    this.boutonContinuer = page.locator('[data-test="continue"]');
    this.boutonFinish = page.locator('[data-test="finish"]');
    this.messageConfirmation = page.locator('.complete-header');
  }

  async saisirInformations(prenom, nom, codePostal) {
    await this.champPrenom.fill(prenom);
    await this.champNom.fill(nom);
    await this.champCodePostal.fill(codePostal);
    await this.boutonContinuer.click();
    await this.page.waitForURL('**/checkout-step-two.html');
  }

  async validerRecapitulatif() {
    await this.boutonFinish.click();
    await this.page.waitForURL('**/checkout-complete.html');
  }

  async verifierConfirmation() {
    await this.messageConfirmation.waitFor();
    const texte = await this.messageConfirmation.innerText();
    if (!texte.includes('Thank you for your order')) {
      throw new Error('Confirmation non trouvee : ' + texte);
    }
  }
}

module.exports = CheckoutPage;