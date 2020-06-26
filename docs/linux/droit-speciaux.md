# Droit spéciaux

Les droit spécaux aussi appeler droit d'accès étendus permettebt de lancer un exécutable en endossant les droit du propriétaire du fichier (SETUID - SUID) ou du groupe auquel appartient le fichier (SETGID - SGID).

> L'exemple de passwd

a commande passwd modifie les fichiers d'utilisateurs normalement modifiables seulement par
le root. Elle possède donc le droit SUID donnant les droits root sur cette commande à ceux qui
l'utilisent.
Ce droit se matérialise par un s à la place du x dans les droits user (**SUID**) et dans les droits
group (**SGID**) :
`-rwsr-xr-x 1 root root 45396 mai 25 2012 passwd`
Ce droit s se donne en l'ajoutant à u (SUID) ou à g (SGID)
En numérique, les valeurs à ajouter sont 4000 pour le **SUID** et 2000 pour le SGID

Le **SUID** ne peux pas être appliqué a un répertoire mais le **SGID** si
Dans le cas du **SGID** on parle de droit d'appartenance **tous les fichiers ou sous-répertoires qui seraient créés dans un tel répertoire, appartiendraient automatiquement au groupe auquel appartient le dossier**

## Le sticky bit

**Il permet de mettre en place une protection contre l'effacement de fichier dans un répertoire.**

Il est notamment utile dans les répertoires publics où tout le monde a le droit de lire et d'écrire.
Comme c'est le droit en écriture du répertoire où il se trouve qui permet d'effacer un fichier, tout
le monde peut supprimer tous les fichiers

**La valeur numérique du sticky bit est 1000 et son symbole est le t.**

`chmod +t /public`

## Changement de propriétaire

On peut changer le propriétaire d'un fichier avec `chown`

```sh
chown nouvel_utilisateur nom_fichier
chgrp nouveau_groupe nom_fichier
chown nouvel_utilisateur : nouveau_groupe nom_fichier
```