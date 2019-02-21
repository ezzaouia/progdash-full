# Progdash ~ Build Docker

Voici les différentes commandes pour utiliser ce build docker en local

/!\ il est possible de spécifier un tag pour les images docker à builder, démarrer, ... \
Pour cela il vous suffit de faire un **export DOCKER_TAG=montag** avant d'exécuter les commandes suivantes. \
Il est également possible de passer le tag en paramètre du shell de build ex: **./build.sh montag**

Se placer dans le répertoire de build puis lancer les commandes suivantes:

- Build des containers: **./build.sh**
- Run des containers: **./run.sh**
- Arrêt et dé-allocation des containers: **./stop.sh**
- Push des images buildés: **./push.sh**
