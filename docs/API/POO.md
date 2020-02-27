---
sidebar: auto
---

# La programmation Orienté Objets

> Exemple en PHP

## Les Class

La class est le plan de l'objet (instance)
L'instance est l'occurence de l'objet

Exemple en PHP avec la class Sandwich.php

**Element qui caractèrise la class :**

- Propriété
- Attribut
- Variable membre

`Sandwich.php`

```php
<?php
class Sandwich {
    /*--- Définition des attributs/propriétés/variable membre ---*/
    public string $bread;
    private array $ingredients;
    private ?string $sauce;
}
```

> Remarque php :
>
> - Le ? permet d'autorisé l'entré null
> - Les methodes qui commence par \_\_ sont des methodes magiques

### Le construct

Le **constructeur** est une variable qui a pour rôle d'initialisé les **variables membres**

`Sandwich.php`

```php
<?php
class Sandwich {
    /*--- Définition des attributs/propriétés/variable membre ---*/
    public string $bread;
    private array $ingredients;
    private ?string $sauce;

    public function __construct(string $bread, array $ingredients) {
        $this->bread = $bread;
        $this->ingredients = $ingredients;
    }
}
```

### Variable privée et public

`main.php`

```php
<?php
require_once 'Sandwich.php';

$s1 = new Sandwich('complet', [
    'salade',
    'tomate',
    'oignon',
    'corrnichon'
]);
$s2 = new Sandwich('Avoine & miel', [
    'Raclette',
    'salade'
]);
echo $s1->bread; // Affiche complet
$s1->sauce = 'moutarde & miel'; // plante accès a une variable privée
```

### Getters

> On peut aussi appeler un getter un assesseur

`Sandwich.php`

```php
class Sandwich {
    /*...*/
    public function getIngredients():array {
        return $this->ingredients;
    }
    public function getSauce():?string {
        return $this->sauce;
    }
}
```

### Setters

`Sandwich.php`

```php
class Sandwich {
    /*...*/
    public function setIngredients(array $ingredients):void {
        $this->ingredients = $ingredients;
    }

    public function setSauce(?string $sauce):void {
        $this->sauce = $sauce;
    }
}
```

### Une methode

Une **methode** est une **fonction** rataché a une **class**

### \_\_toString

Methode magique qui permet de **convertire** une instance en string

> &#9888; elle convertie mais elle n'affiche pas

`Sandwich.php`

```php
<?php
class Sandwich {
    /*...*/
    public function __toString():string {
        $str = "pain " . $this->bread;
        $str .= " ,ingredients : " . join(', ', $this->ingredients);
        if ($this->sauce) {
            $str .= " , sauce : " . $this->sauce;
        }
        return $str;
    }
}
```
