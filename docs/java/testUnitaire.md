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

## Test Helper

Exemple test de la classe Indicator:

Objectif : Wrapper une primitive

Notre primitive doit avoir une **valeur maximal** et une **valeur minimal**

> User Story 1

- Given an indicator between 0 and 100
- When I set the value to 50
- Then the value should be 50

> User Story 2

- Given an indicator between 0 and 100
- When I set the value to 5000
- Then the value should be 100

> User Story 3

- Given an indicator between 0 and 100
- When I set the value to -5000
- Then the value should be 0

> User Story 4

- Given an indicator between 0 and 100
- And with a default value to 35

- When I get the value
- Then the value should be 35

On va donc crée le test de la user Story 1 (ne pas hésité a leur donenr un meilleur nom)

```JAVA
import org.junit.Test;


public class IndicatorTest {

    @Test
    public void userStory1() {
        given_an_indicator_between(0, 100)
        .when_I_set_the_value_to(50)
        .then_the_value_should_be(50);
    }
}

```

Le test passe bien au rouge

On voit bien qu'il y a 2 raisons pour lesquels le test passe au rouge :

- La fonction given_an_indicator_between n'existe pas
- La classe Indicator n'existe pas

Dans ce cas il faut corrigé les test d'abort pour verifier qu'il est rouge parce que le code ne correspond pas et non pas une erreur dans les tests

```JAVA
import org.junit.Assert;
import org.junit.Test;

class TestHelper {
  TestHelper(int minimum, int maximum) {
    this.indicator = new Indicator(minimum, maximum, 0);
    this.max = maximum;
    this.min = minimum;
  }

  TestHelper when_I_set_the_value_to(int value) {
    this.indicator.setValue(value);
    return this;
  }

  void then_the_value_should_be(int expected) {
    Assert.assertEquals(expected, indicator.getValue());
  }

  private int min;
  private int max;
  private Indicator indicator;
}


public class IndicatorTest {

  private TestHelper given_an_indicator_between(int minimum, int maximum) {
    TestHelper helper = new TestHelper(minimum, maximum);
    return helper;
  }

  @Test
  public void userStory1() {
    given_an_indicator_between(0, 100)
    .when_I_set_the_value_to(50)
    .then_the_value_should_be(50);
  }

}
```

Maintenant il ne manque plus que le code de la class Indicator

```JAVA
public class Indicator {
  public Indicator(int minimum, int maximum, int valueDefault) {
    this.minimum = minimum;
    this.maximum = maximum;
    this.value = valueDefault;
  }
}
```

Le test est maintenant passsé au vert

on peut faire la même chose pour le reste des tests :

`IndicatorHelper.java`

```JAVA
import org.junit.Assert;
import org.junit.Test;


class IndicatorHelper {
  IndicatorHelper(int minimum, int maximum) {
    this.indicator = new Indicator(minimum, maximum, 0);
    this.max = maximum;
    this.min = minimum;
  }

  IndicatorHelper and_with_default_value(int valueDefault) {
    this.indicator = new Indicator(this.min, this.max, valueDefault);
    return this;
  }

  IndicatorHelper when_I_set_the_value_to(int value) {
    this.indicator.setValue(value);
    return this;
  }

  IndicatorHelper when_I_get_the_value() {
    return this;
  }

  void then_the_value_should_be(int expected) {
    Assert.assertEquals(expected, indicator.getValue());
  }

  private int min;
  private int max;
  private Indicator indicator;
}
```

`IndicatorTest.java`

```JAVA

public class IndicatorTest {

  private TestHelper given_an_indicator_between(int minimum, int maximum) {
    TestHelper helper = new TestHelper(minimum, maximum);
    return helper;
  }

  @Test
  public void userStory1() {
    given_an_indicator_between(0, 100)
    .when_I_set_the_value_to(50)
    .then_the_value_should_be(50);
  }



  @Test
  public void userStory2() {
    given_an_indicator_between(0, 100)
    .when_I_set_the_value_to(5000)
    .then_the_value_should_be(50);
  }

  @Test
  public void userStory3() {
    given_an_indicator_between(0, 100)
        .when_I_set_the_value_to(-5000)
        .then_the_value_should_be(50);
  }

  @Test
  public void userStory4() {
    given_an_indicator_between(0, 100)
        .and_with_default_value(35)
        .when_I_get_the_value()
        .then_the_value_should_be(35);
  }
}
```

`Indicator.java`

```JAVA
public class Indicator {
  public Indicator(int minimum, int maximum, int valueDefault) {
    this.minimum = minimum;
    this.maximum = maximum;
    this.value = valueDefault;
  }

  public int getValue() {
    return this.value;
  }

  public void setValue(int valueNew) {
    this.value = boundedBetweenMinAndMax(valueNew);
  }

  private int boundedBetweenMinAndMax(int value) {
    return Math.max(this.minimum, Math.min(value, this.maximum));
  }

  private int minimum;
  private int maximum;
  private int value;
}
```

## Test graphique

L'idée ici est de simplifier la copréhesion du test en y ajoutant un caractère graphique

Cette technique ne peut pas être appliqué dans tous les cas mais elle a certaine utilisiation qui peuvent être très intéréssant

- Mars Rover
- Jeu de la vie

Exemple:

```JAVA

@Test
public void test5() {
  given_an_indicator_between("[------]")
  .when_I_set_the_value_to(  "[--X---]")
  .then_the_value_should_be( "[--X---]");

  given_an_indicator_between("[------]")
  .when_I_set_the_value_to(  "[------]X")
  .then_the_value_should_be( "[-----X]");

  given_an_indicator_between("[------]")
  .when_I_set_the_value_to(  "X[------]")
  .then_the_value_should_be( "[X-----]");
}
```
