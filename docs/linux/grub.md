---
sidebar: auto
---

# Changer le mot de passe du root

> Avec la touche **e** lors du démarrage on accède a GRUB

on a ensuite le fichier de configuration de GRUB

sur la ligne linux
il faut changer le init pour lancer "/bin/bash" et changer ro (read only) vers rw (read write)

root indique quel est le disque qu'il faudra monter en racine de l'arborescence (/). Ici, c'est
l'UUID du disque qui est utilisé pour le dénommer.

quiet indique que le démarrage se fera en mode silencieux

sur ubuntu si il y a qu'un seul système GRUB ne démarre pas par defaut il faut donc spammer 'shift'

## options de démarrage

- root = periphérique
- init = executable
- single : permet de démarrer en mode mono-utilisateur (le root) en chargeant le minimum
  de services

# Empécher la modification du mot de passe du root

grub-mkpasswd-pbkdf2 >> /etc/grub.d

modifier
supprimé les lignes inutile

/etc/grub.d

on va sur la ligne menuentry '\$os' on rajoute l'option --unrestricted

avoir quelque chose comme

```shell
set superusers="esgi"
password_pbkdf2 esgi grub.ifbsbf....
```

Le mot de passe commence a grub
