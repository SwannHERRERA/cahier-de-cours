---
sidebar: auto
---
# Le Shell

Le shell est l'interface qui permet de communiqué avec le noyau linux

Il existe plusieur version du shell (ZSH, SH, BASH ...)

Aujourd'hui bash est un standard

## La syntaxe

On commance par dire quel interpretteur shell doit être utiliser grace a cette ligne
```SH
#! /usr/bin/bash
```

dépendament de votre chemin vers l'interpretteur shell

### Commentaire

Les commentaire en shell ce font avec des #
```SH
# ceci est un commentaire
```

### Variable

Par convention les variable shell sont fait avec des Majuscule
Elle peuvent prendre des Lettres, des nombres, des underscores
On utilise un dolard pour utiliser la valeur des variables
attention a ne pas mettre d'espace entre le =
```sh
#! /usr/bin/bash
TEXT="Hello World!"
NAME="Swann"

echo $TEXT
 
echo "My name is $NAME"
echo "My name is ${NAME}"
```

### Entrée utilisateur

Pour faire une entré utilisateur on utilise `read`
```sh
#! /usr/bin/bash

read -p "Enter your name: " NAME
echo "Hello $NAME, nice to meet you!"
```

### Condition

#### If statement

exemple
```sh
#! /usr/bin/bash

read -p "Enter your name: " NAME
echo "Hello $NAME, nice to meet you!"

if [ "$NAME" == "Swann" ]
then
    echo "Your name is Swann"
elif [ "$NAME" == "Jack" ]
then
    echo "Your name is Jack"
else
    echo "Your name is $NAME"
fi
```
Attention il doit forcément y avoir un espace avant et après la condition type `[ "condition" ]`
Ne pas oublié le then même après le elif

#### Conbinaison de test

- -o : OU logique
- -a : ET logique
- ! : NON logique

##### Comparaison

Pour tester certaine valeur on doit utiliser des options

---
- -eq (EQual) : vrai si valeur1 == valeur2
- -ne (Not Equal) : vrai si valeur1 != valeur2
- -lt (Lower Than) vrai si valeur1 < valeur2
- -le (Lower or Equal) : vrai si valeur1 <= valeur2
- -gt (Greater Than) : vrai si valeur1 > valeur2
- -ge (Greater or Equal) : vrai si valeur1 >= valeur2
---
```sh
#! /usr/bin/bash

NUM1=3
NUM2=5
if [ "$NUM1" -gt "$NUM2" ]
then
    echo "$NUM1 is greater than $NUM2"
fi
```

###### String conditions

test –z "$variable" : vrai si la chaine contenue dans variableest vide

test –n "$variable" : vrai si la chaine n’est pas vide

test "$variable" =valeur: vrai si variable est égale à valeur.

test "$variable" != valeur: vrai variableest différent de valeur.

##### File conditons

- -f : vrai si fic est un fichier normal.
- -d : vrai si fic est un répertoire.
- -e : vrai si fic existe.
- -r : vrai si fic A le droit en lecture pour l'utilisateur qui lance le script.
- -w : vrai si fic a le droit en écriture pour l'utilisateur qui lance le script.
- -x : vrai si fic a le droit en exécution pour l'utilisateur qui lance le script.
- -L : vrai si fic est un lien symbolique.
- -s : vrai si fic existe et n'est pas vide.

```sh
#! /usr/bin/bash

FILE="test.txt"

if [ -f "$FILE" ]
then
    echo "$FILE is a file"
else
    `touch test.txt`
fi
```

##### Switch

```sh
#! /usr/bin/bash

read -p "Est-tu majeur Y/N " ANSWER
case "$ANSWER" in 
    [yY] | [yY][eE][sS])
        echo "Tu peux prendre de l'alcool"
        ;;
    [nN] | [nN][oO])
        echo "Tu peux pas prendre de l'alcool"
        ;;
    *)
        echo "Please enter y/yes or n/no"
        ;;
esac
```

### Loop

#### For loop

Le for en shell est semblable au foreach dans cette utilisation là

Il resemble un peu au python
```sh
#! /usr/bin/bash

NAMES="Swann Hugo Noé Alice"
for NAME in $NAMES
do
    echo "HEllo $NAME"
done


# Renomme tous les fichiers text en new-(nomDuFichier).txt
FILES=`ls *.txt`
NEW="new"
for FILE in $FILES
do
    echo "Renaming $FILE to new-$FILE"
    mv $FILE $NEW-$FILE
done
```

#### While loop

```sh
#! /usr/bin/bash

# Mettre du text sur plusieur ligne dans ./new-1.txt
LINE=1
while read -r CURRENT_LINE
do
    echo "$LINE : $CURRENT_LINE"
    ((LINE++))
done < "./new-1.txt"
```

### Function

```sh
#! /usr/bin/bash

function sayHello() {
    echo "Hello WORLD!"
}
sayHello
```
Avec des parameters
```sh
#! /usr/bin/bash

function presentation() {
    echo " Hello, my firstname is $1 and my lastname is $2"
}

presentation "Swann" "loup"
```

Création de fichier + dossier
```sh
#! /usr/bin/bash

function createFolderAndFileWithTextIn() {
    mkdir $1
    touch "$1/$2"
    echo "Hello World" >> "$1/$2"
    echo "Created $1/$2"
}

createFolderAndFileWithTextIn "Hello" "World"
```