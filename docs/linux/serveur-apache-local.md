---
sidebar: auto
---
# Serveur Apache Local

> L'objectif et d'avoir une configuration final qui permet de géré plusieur siteweb en local avec des noms de domaine personalisé

## Fichier host

Le fichier host permet d'associer des adresses IP d'un réseau a des nom de domaines c'est une sorte de **DNS** local

Il est en lecture seule et nécessite les droit root pour être modifier

```ZSH
127.0.0.1       localhost
127.0.0.1       cardin-shop.local
127.0.0.1       bagherawines.auction.local
127.0.0.1       administrateur.drivncook.store.local

192.168.1.16    serveur-fichier.local

::1             localhost
127.0.1.1       pop-os.localdomain      pop-os
```

## Configurtion Apache

[tuto Ubuntu](https://doc.ubuntu-fr.org/lamp)
