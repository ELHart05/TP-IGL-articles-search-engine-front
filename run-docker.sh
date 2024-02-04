#!/bin/bash

# Build the Docker image
docker build -t papershub-image .

# Run the Docker container for papersHub, exposing the necessary ports
docker run -p 8081:3001 -p 8080:3000 papershub-image
