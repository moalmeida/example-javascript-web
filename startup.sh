#!/bin/bash

docker-compose down --remove-orphans
for i in $(docker ps -a |grep examplejavascriptweb|awk '{print $1;}');do docker rm $i -f;done
for i in $(docker images |grep examplejavascriptweb|awk '{print $3;}');do docker rmi $i -f;done
docker-compose pull
docker-compose up -d --build
docker-compose logs --follow
