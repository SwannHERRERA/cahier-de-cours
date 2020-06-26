# Trait

## Composition

L'héritage ne sert pas a factorisé du code.

L'interface génére un problème car elle ne contient pas de code

On peut utilisé l'héritage mais c'est une mauvaise solution

On va donc utilisé la composition

en créant une classe composé et une classe composant

```JAVA
Interface Eau {
    int getTemerature();
}


abstract class ComposantEau implements Eau {
    public int getTemperature();
}

class Baignoire implements Eau {
    private ComposantEau composantEau = new ComposantEau();
}

class Riviere implements Eau{
    private ComposantEau composantEau = new ComposantEau();

}
```

Un Trait est un object composant qui contient que des fonctions qui ne peuvent pas être implémanté

Il est assez courant qu'on utilise les traits avec les languages qui utilise l'héritage multiple
