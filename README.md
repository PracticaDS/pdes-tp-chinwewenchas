[![Build Status](https://travis-ci.org/PracticaDS/pdes-tp-chinwewenchas.svg?branch=master)](https://travis-ci.org/PracticaDS/pdes-tp-chinwewenchas)

# PracticaDS / pdes-tp-chinwewenchas 

## Para levantar el server de desarrollo
```bash
yarn insall
yarn start
```

## Para buildear una version productiva del proyecto
```bash
yarn build
```

## Branching strategy
Para crear un branch se debe tener un issue asignado en el [tablero del proyecto](https://github.com/PracticaDS/pdes-tp-chinwewenchas/projects/1). El nombre del branch debe ser <numero del issue>-<descripcion>, por ejemlo el branch para mergear este cambio en el readme es 22-branching-strategy-work-flow.

## Work flow
Toda linea de codigo que se quiera integrar al branch master debe estar asociado a un issue en el [tablero del proyecto](https://github.com/PracticaDS/pdes-tp-chinwewenchas/projects/1), el branch que se quiera integrar debe tener un nombre de acruerdo a lo descripto en la seccion anterior y se debe realizar un pull request, el cual debe ser revisado y aprobado al menos por una persona.

## Trazabilidad
Para mantener la trazabilidad entre issues y pull requests, cuando se crea un pull request nuevo se tiene que agregar en la descripcion del mismo un comentario con el numero de issue que resuelve ese pull request, github se encarga de agregar los vinculos entre el issue y el pull request si el comentario es #<numero de issue>, por ejemplo #24.
