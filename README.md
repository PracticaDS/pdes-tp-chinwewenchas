[![Build Status](https://travis-ci.org/PracticaDS/pdes-tp-chinwewenchas.svg?branch=master)](https://travis-ci.org/PracticaDS/pdes-tp-chinwewenchas)

# PracticaDS / pdes-tp-chinwewenchas 
[LInk](https://docs.google.com/document/d/12tbex_VDmd7ZNWkn5PJQriQ92FbIQGgT91-pa71RNZM/edit) al enunciado

# Pasos para setup del proyecto
1. Editar prometheus-data/prometheus.yml y poner tu ip en el campo targets
2. Correr ```docker-compose up```
4. En un browser entrar a http://localhost:9080
5. Agregar a prometheus como datasource en graphana (tenes que poner la url con tu ip)
6. Importar `grafana-dashboard.json` en la seccion de dashboard en grahana

## Para levantar el server de desarrollo frontend y backend
```bash
cd frontend
yarn insall
yarn start
cd ..
cd backend
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
