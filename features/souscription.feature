Feature: Parcours complet de souscription d'un contrat AssurTest

  Scenario: Souscription reussie d'un contrat MRH1
    Given je suis connectee au portail AssurTest pour souscrire
    When j'ajoute le contrat MRH1 au panier d'emission
    And je consulte le panier d'emission
    And je saisis les informations du souscripteur
    And je valide la recapitulation de la souscription
    Then la souscription est confirmee avec succes