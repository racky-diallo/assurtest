class InventoryPage {
  constructor(page) {
    this.page = page;
    this.listeProduits = page.locator('.inventory_list');
  }

  async verifierCatalogueVisible() {
    await this.listeProduits.waitFor();
  }

  async verifierContrat(nomContrat, tarif) {
    const produits = this.page.locator('.inventory_item');
    const count = await produits.count();

    let trouve = false;
    for (let i = 0; i < count; i++) {
      const produit = produits.nth(i);
      const nom = await produit.locator('.inventory_item_name').innerText();

      if (nom.trim() === nomContrat.trim()) {
        const prix = await produit.locator('.inventory_item_price').innerText();
        const prixNettoye = prix.replace('$', '').trim();

        if (prixNettoye !== tarif) {
          throw new Error(`Tarif incorrect pour ${nomContrat} : attendu ${tarif}, obtenu ${prixNettoye}`);
        }
        trouve = true;
        break;
      }
    }

    if (!trouve) {
      throw new Error(`Contrat non trouve dans le catalogue : ${nomContrat}`);
    }
  }

  async ajouterAuPanier(nomProduit) {
    const produits = this.page.locator('.inventory_item');
    const count = await produits.count();

    for (let i = 0; i < count; i++) {
      const produit = produits.nth(i);
      const nom = await produit.locator('.inventory_item_name').innerText();

      if (nom.trim() === nomProduit.trim()) {
        await produit.locator('button').click();
        break;
      }
    }
  }
}

module.exports = InventoryPage;