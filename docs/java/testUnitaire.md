# Les tests unitaire en java

# Librairy

Pour faire des tests unitaires il faut souvent une libraire.
Pour java **Junit** est souvent utilisé

## Les methodes de test

### BDD (behavior driven development)

Le BDD a pour but d'identifier les comportements

Le but est d'écrire des sénarios de test compréhensibles par des moldus.

Il y a 2 interêt majeur a cette pratique :

- Documenter les fonctionnalités a développer d'une part
- L'automatisation des tests

Ce principe d'écriture des tests d'acceptation est une pratique courrante dans le fonctionnement des **user stories**

Le BDD fonctionne en 4 étapes :

- Given
- When
- Then
- And

```
    Given: Étant donné qu'un utilisateur laisse un commentaire

    When: Quand le commentaire dépasse 1000 caractères

    Then: Alors le commentaire ne doit pas être sauvegardé

    and: Et l'utilisateur doit voir un message d'erreur
```

### TDD (Test driven development)

Le TDD est l'étape suivante du BDD

#### Fonctionnement TDD :

- Ecrir le test
- Verifier que le test echoue
- Ecrire la fonctionnalité
- tester que le test marche

> Aller du moin spécifique au plus spécifique

Les test doivent être rédiger dans cette ordre cela garantie que l'application devient du plus en plus général

### 3 régles du TDD selon Robert Martin :

- Vous devez écrire un test qui échoue avant d'écrire votre code lui-même.
- Vous ne devez pas écrire un test plus compliqué que nécessaire.
- Vous ne devez pas écrire plus de code que nécessaire, juste assez pour faire passer le test qui échoue.
