class CartPage {
  constructor(page) {
    this.page = page;
    this.iconePanier = page.locator('.shopping_cart_link');
    this.boutonCheckout = page.locator('[data-test="checkout"]');
  }

  async ouvrirPanier() {
    await this.iconePanier.click();
    await this.page.waitForURL('**/cart.html');
  }

  async verifierProduitDansPanier(nomProduit) {
    const produit = this.page.locator('.cart_item_label').filter({ hasText: nomProduit });
    await produit.waitFor();
  }

  async cliqueSurCheckout() {
    await this.boutonCheckout.click();
    await this.page.waitForURL('**/checkout-step-one.html');
  }
}

module.exports = CartPage;