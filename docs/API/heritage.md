---
sidebar: auto
---

# Héritage

Quand on a plusieur propriété / methode commune entre deux class on pourrait décidé de les faires dépendre d'une entité supérieur de laquelle nos deux class "hériteraient".

Une class peux hérité que d'une autre class (dans la plupart des langages exeption(C++, JS...))

## Exemple

<mermaid>
    classDiagram
    Character <|-- Pet
    Character <|-- Player
    Character : string name
    Character : int hp
    Character : float damage
    Pet : string race
    Player : pet pet
</mermaid>

`Character.php`

```php
<?php
class Character {
    private string $name;
    private int $hp;
    private float $damage;

    public function __construct(string $name, int $hp, float $damage) {
        $this->name = $name;
        $this->hp = $hp;
        $this->damage = $damage;
    }
    ...
}
```

`Pet.php`

```php
<?php
require_once 'Character.php';
class Pet extends Character {
    private string $race;

    public function __construct(string $name, int $hp, float $damage, string $race) {
        Parent::__construct(string $name, int $hp, float $dmg, string $race);
        /* Mettre parent:: en premier est une bonne pratique (obligatoire en JAVA) */
        $this->race = $race
    }
    public function setRace(string $n):void {
        $this->race = $n;
    }

    public function getRace():string {
        return $this->race;
    }
    public function __toString():string {
        $str = Parent::__toString();
        $str .= 'Race = ' . $this->race;
        return $str;
    }
}
```
