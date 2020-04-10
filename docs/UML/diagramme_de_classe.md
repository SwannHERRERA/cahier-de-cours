---
sidebar: auto
---

# Diagramme de classe

- Il représente les classes, leur composants et la façon dont elles sont liées entre elle.

- Il y a d'autre diagramme qui servent a compléter le diagramme de classes
  <div style="max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch;">
    <mermaid>
      classDiagram
      Diagramme de classes <|-- Diagramme des objects
      Diagramme de classes <|-- Diagramme etat
      Diagramme de classes <|-- Diagramme de cas utilisation
      Diagramme de classes <|-- Diagramme activité
      Diagramme de classes <|-- Diagramme de séquence
      Diagramme de classes <|-- Diagramme de collaboration
    </mermaid>
  </div>

## Class

> Une classe est la définition d'un ensemble d'objects ayant les mêmes caractéristiques

- Les classes nécessaires dans un cas d'utilisation
- Les classes associées à un sernario précis

## Les attributs

<div style="max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch;">
    <mermaid>
      classDiagram
      class BankAccount
      BankAccount : +String owner
      BankAccount : +Bigdecimal balance
      BankAccount : +deposit(amount)
      BankAccount : +withdrawl(amount)
    </mermaid>
</div>
Les attributs sotn els types d'information stocker dans une classe
ils ont :

- Un nom
- Un type
- Une visiblilité (+, -, #, ~)
- Un marqueur de dérivation (/)
- Une affectation de valeur par defaut (= valeur)
- Des contraintes ( {Contraintes} )

Un attribut a aussi des opérations ou methodes
Ce sont des éléments de comportement (fonction ou autre)
Elle doivent être identifiés au moment de la conception

- La visibilité est :

  - Privé (Dispo que a l'interieur de la classe)
  - Public (public)
  - Protégé (Dispo pour les enfants)
  - Package (Dispo pour tous les objects du package)

- Le marqueur de dérivation / : value = valeur calculé a partir d'autre attribut
- Valeur par défaut ::

- Contrainte Permet d'exprimé les règles nécessaires pour garantir l’intégrité de l’attribut.

## Multiplicités

<div style="max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch;">
    <mermaid>
    classDiagram
      Customer "1" --> "*" Ticket
      Student "1" --> "1..*" Course
      Galaxy --> "many" Star : Contains
    </mermaid>
</div>

> Etablie les relations

| Relation | Correspondance |
| :------: | :------------: |
|    1     |       1        |
|   0..1   |     0 ou 1     |
|   m..n   |    de m à n    |
|    \*    |    Plusieur    |
|  0..\*   |   de 0 à \*    |
|  1..\*   |   de 1 à \*    |

> C'est l'équivalent des cardinalités en MCD
> Le sens de lecture est cependant inversé

## Précisioins d'une association

On peut précisée le sens de l'assciation

<div style="max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch;">
    <mermaid>
      classDiagram
      Galaxy "1" --> "1..*" Star : Contains >
    </mermaid>
</div>

> On peut précisé un Rôle
