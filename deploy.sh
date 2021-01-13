#!/usr/bin/env bash
docker rm eggg-react --force
docker rmi eggg-react --force
docker build -t eggg-react .
docker run --rm -d --name eggg-react -p 80:80 eggg-react
