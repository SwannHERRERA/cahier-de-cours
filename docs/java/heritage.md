---
sidebar: auto
---

# L'héritage

- Etablir une relation de généralisation/spécialisation
- Permet d'inclure les caractéristiques de "son parent"
  <mermaid>
  classDiagram
  Animal <|-- Cat
  Animal <|-- Dog
  </mermaid>
  ici
- Cat et dog hérite de Animal
  Cat et Dog auront la même interface héritée
  Cat et Dog pourront étendre différemment d'Animal

en Java :

```JAVA
public class Animal {

}
class Dog extends Animal {
    public Dog() {
        super();
    }

    public void feed() {
        System.out.println("Feeding the dog");
        super.feed();
    }
}
public class Animal {
    private int hunger;

    public Animal() {
        this.hunger = 50;
    }

    public void feed() {
        this.hunger -= 1;
        System.out.println("Feeding a animal. Hunger is now "+ this.hunger);
    }
}
```

- Super permet d'accèder a la fonction de la class parent (1 seul niveau)

- Une instance de la classe fille peut être considérée du type de la classe mère

```JAVA
public class Main {
    Private static void doSomthing(Animal animal) {
        animal.feed();
    }
    public static void main(String[] argv) {
        Dog dog = new Dog();
        doSomething(dog);
    }
}
```

## Les class abstraites

- Classe dont l'implémentation n'est pas complète

- Une classe abstraite n'est pas instanciable

- Elle est nécésairement hérité

- Une classe fille ne peut avoir qu'une seule classe mère (pas d'héritage multiple)

- Une classe fille ne peut pas appliquer une visiblilité plus faible à une methode de la classe mère
  - Une méthode public de la classe mère ne peut devenir private ou protected (rarement utilisé)

Une class abstraite est préfixée par le mot clé `abstract`

Des methodes peuvent elle aussi être abstraite

- une methode abstraite ne peut pas être privée

```JAVA
    public abstract class Vehicle {
        Vehicle() {

        }
        public abstract void start();
        public abstract void stop();
    }
```

Aujourd'hui on fait de l'héritage avec des composites.
`Héritage par composition`

## Encapsulation
