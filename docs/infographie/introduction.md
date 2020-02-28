# Introduction a OpenGL

Opengl est un moteur de rendu.

## Installation

1. C'est chiant sous windows go linux fast

faire des sudo apt install
pour compiler `g++ main.cpp  -lglut -lGLU -lGL`

- L'utilisation de g++ parce que c'est du c++
- Les options servent a utiliser glut

## Création d'un quadriatère 

Pour crée un quadriatère il faut 4 points, On aura aussi un problème, les traits qui définissent l'objet se font dans un certain ordre
```C
glBegin(GL_QUADS);
    glVertex3f(-0.7,-0.5,0.0);
    glVertex3f(0.7,-0.5,0.0);
    glVertex3f(0.4,0.5,0.0);
    glVertex3f(-0.4,0.5,0.0);
glEnd();
``` 

On va essayer d'appliquer une rotation et une Transation a notre objet.

Les pusMatrix et popMatrix servent a delimité ceux sur quoi on travaille

```C
glPushMatrix();
    glTranslatef(0.5,0.5,0.5);
    glRotatef(12, 0.2, 0.4, 0.1);
    glBegin(GL_QUADS);
        glVertex3f(-0.7,-0.5,0.0);
        glVertex3f(0.7,-0.5,0.0);
        glVertex3f(0.4,0.5,0.0);
        glVertex3f(-0.4,0.5,0.0);
    glEnd();
glPopMatrix();
```

# Les lumières

> La partie du code qu'on appel initialisation est tous ce qu'on a avant gluLookAt

Dans une scène 3D il y a une camera.

On peut modifier cette camera avec la fonction gluLookAt

Une lumière est soit diréctionnel soit ponctuel

elle peut être directionnel sur un point comme sur une droite (elle ne prend pas plus de temps de calcule)