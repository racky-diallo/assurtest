Feature: Verification des contrats dans le catalogue AssurTest

  Scenario Outline: Verification de l affichage du contrat <contrat>
    Given je suis connectee au portail AssurTest
    When je consulte le catalogue des contrats
    Then le contrat "<contrat>" est affiche avec le tarif "<tarif>"

    Examples:
      | contrat                             | tarif |
      | Sauce Labs Backpack                 | 29.99 |
      | Sauce Labs Bike Light               | 9.99  |
      | Sauce Labs Bolt T-Shirt             | 15.99 |
      | Sauce Labs Fleece Jacket            | 49.99 |
      | Sauce Labs Onesie                   | 7.99  |
      | Test.allTheThings() T-Shirt (Red)   | 15.99 |