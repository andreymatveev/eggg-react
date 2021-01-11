#!/usr/bin/env bash
git pull origin
docker rm eggg-client --force
docker rmi eggg-client --force
docker build -t eggg-client .
docker run --rm -d --name eggg-client -p 80:80 eggg-client
