# assurtest🛡️

Suite d'automatisation de tests end-to-end avec **Playwright** et **Cucumber.js** (BDD/Gherkin), appliquée à un portail de gestion de contrats d'assurance.

Projet réalisé dans le cadre du Titre Professionnel **Testeur Logiciels** (ENI) — module Automatisation des tests.

## ✅ Résultats

- **10 scénarios — 100% de passage** (56 steps)
- Rapport d'exécution HTML inclus : `rapport-execution.html`

## 🔧 Stack technique

| Outil | Version |
|---|---|
| Node.js | 24.x |
| Cucumber.js | 13.0.0 |
| Playwright | (navigateur Chromium) |
| OS | Windows 11 |

## 📁 Architecture — Page Object Model

```
projet-assurtest/
├── features/          # 3 fichiers .feature (Gherkin, en français)
│   ├── authentification.feature
│   ├── catalogue.feature
│   └── souscription.feature
├── pages/             # Page Object Model — 4 classes
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── steps/             # Implémentation des étapes Gherkin
├── hooks/             # Setup/teardown (lancement et fermeture navigateur)
├── cucumber.js        # Configuration Cucumber
└── playwright.config.js
```

## 🎯 Couverture fonctionnelle

1. **Authentification** — connexion réussie, profil désactivé, mot de passe incorrect
2. **Catalogue des contrats** — consultation et tri des contrats d'assurance (avec Scenario Outline)
3. **Souscription de bout en bout** — parcours complet du panier jusqu'à la confirmation (via Page Object Model)

## 🚀 Installation et exécution

```bash
npm install
npx playwright install chromium
npx cucumber-js
```

Le rapport HTML est généré à la racine : `rapport-execution.html`

## 👩‍💻 Auteure

**Racky Diallo** — Testeuse Logicielle certifiée ISTQB Foundation v4.0
[LinkedIn](https://www.linkedin.com/in/racky-diallo-b6a453173/) · Nantes, France
