---
sidebar: auto
---

# android

Programmation android

Le developpement d'une application Android native peut ce faire
Java - Kotlin

On peut aussi développer des applications non native avec différent outils:

- Flutter
- React Native
- ...

Dans ce cour on va utiliser Java

## ART

> ART est le moteur qui fait tourné les applications android

Elle stock tous les écrans déjà visité en mémoire.

ART a une sorte de garbage collector qui supprime les vieux écrans

## Activity

On peut en éxecuter qu'une seul a la fois

Quand on en utilise plusieur elle sont stocker sous forme de pile

L'activity qui est afficher est celle du top de la pile

## Cycle de vie

![Image cycle de vie](/images/android-lifecycle.png)

## Intégration

L'intégration en developpement android est assez différente de l'intégration web mais pas tant que ça

### Les layouts

Il existe plusieur type de layouts :

- LinearLayout
- FrameLayout
- RelativeLayout
- ...

Les layouts servent a contenir les autres widgets et a les organisées dans la vue

## Remarque Java

```JAVA
package dev.example.devesgi1;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}

```

Le **@** est une annotation

`@Override` veut dire qu'on réécrit la fonction qui est déjà défini dans la class parent

## Les id et les evenements

Pour que dans le code on puisse récupéré un élément du fichier XML il faut :

- Lui mettre un ID
- Ajouter un attribut du type de la balise dans la classe Java de l'Activity assiciée :

```JAVA
Private Button myBtn;
```

- On initialise l'attribut dans la methode on create après le setContentView()

```JAVA
myBtn = findViewById(R.id.mon_id)
```

R est l'ensemble de tous les composant rendu il est généré automatiquement par andoidStudio

On peut ajouter des ecouteurs sur certain evenement type click ...

```JAVA
btn1.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        // executé lors du clique sur le widget
        Toast.makeText(MainActivity.this, "Hello world", Toast.LENGTH_SHORT).show();
    }
});
```

## Fonctionnement android

Derière chaque balise XML il existe une classe Java qui s'appel pareil (Button, LinearLayout ...)

## Les Dialogue

```JAVA
choix2.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        new AlertDialog.Builder(MainActivity.this)
            .setTitle("Question ?")
            .setMessage("One piece > Naruto ?")
            .setPositiveButton("oui", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {

                }
            })
            .setNegativeButton("Non", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {

                }
            })
            .setCancelable(false)
            .show();
    }
});
```

## Intent

Intent permet de faire plusieur chose :

- Appeler une application externe (exemple connexion with FB)
- Ouvrir une acrivity dans une application

```JAVA
Intent it = new Intent(ORIGINE.this, DESTINATION.class);
startActivity(it);
```

`Exemple`

```JAVA
Intent i = new Intent(A.this, B.class);
startActivity(i);
```
