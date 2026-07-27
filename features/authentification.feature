Feature: Authentification au portail gestionnaire AssurTest

  Scenario: Connexion reussie avec un profil gestionnaire standard
    Given je suis sur la page de connexion du portail AssurTest
    When je saisis les identifiants du profil gestionnaire standard
    And je clique sur le bouton de connexion
    Then je suis redirigee vers le catalogue des contrats assurance

  Scenario: Connexion refusee avec un profil gestionnaire desactive
    Given je suis sur la page de connexion du portail AssurTest
    When je saisis les identifiants d'un profil gestionnaire désactivé
    And je clique sur le bouton de connexion
    Then un message erreur indique que acces est bloque

  Scenario: Connexion refusee avec un mot de passe incorrect
    Given je suis sur la page de connexion du portail AssurTest
    When je saisis un identifiant valide et un mot de passe incorrect
    And je clique sur le bouton de connexion
    Then un message erreur indique que les identifiants sont incorrects