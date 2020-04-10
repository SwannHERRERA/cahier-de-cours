---
sidebar: auto
---

# Camera

> Plusieur solution possible (notament une en C++(SOIL))

Solution sans SOIL -> caméra centrée

`lookAt`

```C
x0 = R*cos(B) * sin(a);
x0 = R*sin(B);
x0 = R*cos(B) * cos(a);

gluLookAt(
    x0,y0,z0 // Position
    x,y,z //visée
    u,v,w // orientation verticale
)
```

Exercice dans bras articulé.

Explication math :
alpha = longitude
beta = latitude

Gestion de la camera peut se faire grace au clavier

- via les touches directionnelles (special key)
- **+** **-** pour le zoom / dezoom

Nécesite math.h

## Problème potentiel

- Gestion de la camera lors que la visé le mèle a la position de la caméra

C++ SOIL need windows
