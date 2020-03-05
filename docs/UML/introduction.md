---
sidebar: auto
---

# UML (Unified Modeling Language)

<mermaid>
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
</mermaid>

### Merise (entité association)

|   Données    |         Traitements          |
| :----------: | :--------------------------: |
|     MCD      |         MCT(action)          |
|     MLD      | MOT(qui réalise les actions) |
| Creation bdd |             dev              |

## UML vue général

13 diagrames a utiliser au choix<br>
c'est une demarche itérative (non structuré)<br>
Objectif : avoir n diagramme cohérents

### Démarrer la définition de besoins

1. Identifier les acteurs du future produit
   - C'est un diagramme de contexte
   - Il y a les acteurs pricipaux(utilisateurs | \<\<Système\>\>(CRON))
   - Acteurs secondaires - personne - autre système type (API)

Remarque :

- les acteurs pricipaux ce mettent a gauche
- On met les acteurs au singulier

2.  Si le sujet est vaste et complexe
    -> Diagramme de packages

3.  Diagramme de CV

    - Si le sujet est simple -> alors on fait un diagramme de CV
    - Si le sujet est complexe -> alors on fait un diagramme de CV par package
      Question qui doit pouvoir faire quoi

## Description d'un cas d'utilisation

1. Information généréales (identification) du cas d'utilisation :

- Nom
- Numéro
- Auteur
- Dernière MAJ
- Les acteurs concernés

3 possibilités pour le démarrage d'un cas d'utilisation :

- System
- Acteur
- Autre cas d'utilisation

c'est dans les descriptions qu'on ajoute la notion chronologique
