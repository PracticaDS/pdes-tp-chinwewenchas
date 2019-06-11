# Pasos para setup del proyecto
1. Editar prometheus-data/prometheus.yml y poner tu ip en el campo targets
2. Correr ```docker-compose up```
4. En un browser entrar a http://localhost:9080
5. Agregar a prometheus como datasource en graphana (tenes que poner la url con tu ip)
6. Importar `grafana-dashboard.json` en la seccion de dashboard en grahana
