# Les quotas disques

Ils permettent de fixer des limites par utilisateur ou par graoupe sur le nombre d'inodes ou sur la taille du disque utilisée( limite sur nb blocs).

On implémente les quotas par FS(file system).

2 type :

- Limite douce
- Limite dure -> La quantité de blocs ou d'inodes définis par cette milite ne pourra jamais être dépassée. quand elle est atteinte, plus aucune création de fichiers ou augementation de taille de fichier possible
- Limite douce -> peut être temporairement dépassée on défini un **délai de grâce** au dela du temps la limite devient dure(les fichiers ne sont pas supprimé)

## Paquets intéréssant

- quota
- quotatool

c'est le root qui défini les quota

On peut édité les quotas d'un utilisateur avec `edquota`

## Activation désactivation

On active les quota avec quotaon/quotaoff

suivi du nom du FS ou -a pour tous les systèmes

ex: `quotaon ext`
