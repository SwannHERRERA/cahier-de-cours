---
sidebar: auto
---
# Crée un nouvelle utilisateur

1. Passer en root

   > Optionnel mais plus simple (sudo est aussi dangereux que passer en root donc autant passer en root)

2. Crée un nouvelle utilisateur

`adduser sftp-user`

## Verifié si le user a été crée

comgen -u

On peut aussi regarder dans /etc/passwd

## Donner au nouvel utilisateur les privilèges du root

`gpasswd -a user-sftp-only sudo`

## Crée le dossier d'upload

Il faut se déconnecter du root donner les droit (et la propriété) sur le dossier au user sftp

## Crée un nouveau groupe

`sudo groupadd group-sftp-only`

## Ajouter l'utilisateur au groupe

- devenez root
- usermod -g group-sftp-only -d (home path) -s /sbin/nologin user-sftp-only

* g specifies the group name
* d specifies the users home directory
* s specifies shell access (/sbin/nologin means SSH is disabled for this user)

## Verifié les changements

`grep user-sftp-only /etc/passwd`

return

```shell
user-sftp-only:x:1001:1004:,,,:/srv/users/serverpilot/apps/test-app/public/newsletters:/sbin/nologin
```

## Modifier la config ssh/sftp

`nano /etc/ssh/sshd_config`

### Décommenté la ligne

```shell
#Subsystem sftp /usr/lib/openssh/sftp-server -l INFO
```

### modifier les régles sftp

Ajouter ces lignes a la fin du fichier

```shell
Subsystem sftp internal-sftp
    Match group group-sftp-only
    ChrootDirectory %h
    ForceCommand internal-sftp
```

## Restart le service SSH

`service ssh restart`

## Modifier les permissions

`chown`

exemple : `chown -R user-sftp-only:group-sftp-only /srv/users/serverpilot/apps/test-app/public/newsletters`

## Verifier les permissions

`ls -la`
