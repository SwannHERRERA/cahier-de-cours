---
sidebar: auto
---

# Systèmes de fichiers

Un système de fichier (File system: FS) définit la façon dont seront stockées les informations
sur les mémoires de masse.
Il définit aussi l'organisation des fichiers.

## Lien entre system de fichier et OS

Chaque système de fichier est plus ou moins lié à un système d'exploitation particulier :

- Windows :
  - FS d'installation : FAT, NTFS
  - FS reconnus en natif : FAT, NTFS, ExFAT
- Linux :

  - FS d'installation : ext, ReiserFS, etc…
  - FS reconnus en natif : tous (ou presque)

  Le FS utilisé influera notamment sur :

- la taille maximale des fichiers
- le nombre maximal de fichiers
- la taille des partitions

### Le bloc

C'est l'unité de base, indivisible, du système de fichier. Par conséquent, un fichier sera composé
d'un nombre fini de blocs, et d'au moins 1 bloc.

Le choix de la taille d'un bloc est donc primordiale sur les performances d'un système de fichiers :

- Si on choisit un bloc de petite taille, lors de l'allocation de l'espace pour un grand
  fichier, celui-ci risque d'être morcelé à plusieurs endroits du disque. L'accès au fichier
  sera donc long à cause des déplacements sur le disque.
- Si on choisit un bloc de grande taille, on gaspillera de l'espace disque pour les petits
  fichiers. En effet, soit un disque de 500Go avec des blocs de 8ko. On aura donc
  536 870 912 000/8 192=65 536 000 blocs. On pourra donc remplir entièrement le
  disque avec 65 536 000 fichiers de 1 octet, en n'utilisant effectivement que 62,5 Mo
  du disque.
  Or, statistiquement, la majorité des fichiers sont des fichiers de petite taille.
  Sous Linux, la taille de blocs par défaut est de 4096 octets (4ko)

### Le super bloc

Les systèmes de fichiers sous Linux possède tous au moins un superbloc. Celui-ci contient des
informations sur le système de fichier lui-même :

- Son type
- Sa taille
- Son statut
- La localisation d'autres zones de méta-données (superblocs secondaires, tables
  d'inodes)

Le superbloc est une zone critique du disque : sa corruption peut entraîner une impossibilité de
lire les données stockées sur le disque. C'est pour cela qu'il en existe des copies synchrones sur
le disque : si le superbloc primaire ne peut être lu, alors c'est le secondaire qui sera utilisé

### Les inodes

Un inode (ou i-nœud) est une structure de données associée à un fichier physique sur le disque,
et un seul, contenant des informations sur ce fichier et son contenu. Les inodes sont stockés
dans la table d'inode située après le superbloc.
Un inode contient aussi les adresses des blocs disque composant le fichier physique

On peut connaître le numéro de l'inode associé à un fichier avec l'option –i de la commande ls
![lites inodes](/images/list_inode.png)

### POSIX

La norme POSIX définit les attributs qu'un inode doit au minimum posséder pour un fichier :

- taille du fichier
- identifiant du périphérique où se trouve le fichier
- propriétaire du fichier
- groupe du fichier
- numéro d'inode du fichier
- droits du fichier
- date de dernière modification de l'inode (change time)
- date de dernière modification du contenu du fichier (modification time)
- date de dernier accès au fichier (access time)
- nombre de liens physiques sur le fichier
  On remarque que l'inode ne contient pas le nom du fichier.
  On peut obtenir les informations données ci-dessus avec la commande stat.

### ext4 :

- supporte les types de fichiers standards Unix suivants : fichiers réguliers, répertoires,
  fichiers périphériques spéciaux et liens symboliques.
- gère les noms de fichiers longs.
- réserve certains blocs pour le super utilisateur (root).
- permet à l'administrateur de choisir la taille des blocs logiques lors de la création du
  système de fichier.
- implémente des liens symboliques rapides. Un lien symbolique rapide n'utilise aucun
  bloc de donnée sur le système de fichiers.
- permet la journalisation.
- supporte les volumes de très grande capacité (jusqu'à 1 Eo (260 octets)) et les fichiers
  jusqu'à 16 To.
- Supporte les extents : l'allocation des blocs est contigüe et permet donc de réduire la
  fragmentation tout en augmentant les performances sur les gros fichiers. De plus, il
  faut moins de métadonnées pour stocker les informations des blocs grâce à leur
  contiguïté.
- est rétro-compatible avec ext2 et ext3 qui peuvent être montés en ext4.

### Disque

Les fichiers désignant les périphériques se trouvent dans le répertoire /dev.
On nome les disque de cette manière
`/dev/sdXY`

sd indique que c'est un périphérique de stockage de masse (mass-storage driver).

X désigne le contrôleur physique du disque : a pour le premier disque du connecteur primaire
SATA, b pour le second disque du connecteur primaire SATA, c pour le premier disque du
connecteur secondaire SATA, d pour le second disque du connecteur secondaire SATA, etc…

Y indique le numéro de la partition dans le disque. De 1 à 4, ce seront les partitions primaires et
l'éventuelle partition étendue (qui pourra être divisée). A partir de 5, ce seront les partitions
logiques contenues dans la partition étendue.

`fdisk –l` Pour voir la liste des partitions du système

On a alors sur chaque ligne du résultat, dans l'ordre :

- la dénomination du périphérique
- une indication sur la possibilité de démarrer sur le périphérique (\* si oui)
- le secteur de secteur de début de la partition
- le secteur de fin de la partition
- le nombre de blocs de la partition
- l'identifiant du type de la partition (83=Linux, 7=NTFS, 82=swap…)

C'est la commande `mkfs` (make file system) qui permet de créer un système de fichier sur un
disque
