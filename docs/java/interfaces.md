# Interface

- Liste des méthodes publicques implémentées par une classe
- Définir un contrat qu'une classe s'engage à implémenté
- Une interface -> est capable de
- Une interface n'est pas instanciable
- Une interface ne contient pas de code
- Une class peut implémenter plusieurs interfaces

Une interface en java

```JAVA
interface Playing {
    void play();
}

class Cat implements Playing {
    public function play() {

    }
}
```

- Une classe implémentant une interface peut être manipulée par son interface en tant que type

- Une interface permet de manipuler un objet par son comportement plutôt que sa nature

```JAVA
public class Main {

    public static void main(String[] args) {
        Cat kitty = new Cat();

        Playing cat = kitty;
    }
}
```

```JAVA
class Cat extends Animal implements Playing, Washable {
    public function play() {
        System.out.println("The cat is playing");
    }
}
```

## Interface vs Héritage

- Héritage -> est un
- Interface -> est capable de

> un triagle est une figure géométrique

## L'héritage ne sert pas a factoriser le code

### Deux objets partageant un code identique n'ont pas forcément la même nature (un avion et un oiseau volent)

Cette situation est difficile a géré sans **héritage multiple** ou **mélange de type**

## La composition

On délégue le code commun à un objet spécifique et l'inclut dans chaque classe en passant par une interface si besoin

```JAVA
class FlyingObject {
    public void fly() {
        /**
        * Do some hard and strang stuff
        */
        System.out.println("Flying");
    }
}

class avion {
    private FlyingObject flyingObject;

    avion() {
        this->flyingObject = new FlyingObject();
    }

    public void fly() {
        this->flyingObject->fly();
    }
}

class oiseau {
    private FlyingObject flyingObject;

    oiseau() {
        this->flyingObject = new FlyingObject();
    }

    public void fly() {
        this->flyingObject->fly();
    }
}
```
