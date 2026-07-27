class LoginPage {
  constructor(page) {
    this.page = page;
    this.champIdentifiant = page.locator('#user-name');
    this.champMotDePasse = page.locator('#password');
    this.boutonConnexion = page.locator('#login-button');
    this.messageErreur = page.locator('[data-test="error"]');
  }

  async naviguer() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async saisirIdentifiants(identifiant, motDePasse) {
    await this.champIdentifiant.fill(identifiant);
    await this.champMotDePasse.fill(motDePasse);
  }

  async cliqueSurConnexion() {
    await this.boutonConnexion.click();
  }

  async verifierConnexionReussie() {
    await this.page.waitForURL('**/inventory.html');
  }

  async verifierMessageErreur(message) {
    await this.messageErreur.waitFor();
    const texte = await this.messageErreur.innerText();
    if (!texte.includes(message)) {
      throw new Error('Message incorrect : ' + texte);
    }
  }
}

module.exports = LoginPage;