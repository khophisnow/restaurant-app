#!/bin/bash

# Check if a name was provided
if [ -z "$1" ]; then
  echo "Usage: $0 <name>"
  exit 1
fi

NAME=$1
ENTITY_PATH="${NAME}/entities/${NAME}.entity"

# Generate NestJS module, service, controller, and entity
nest generate module $NAME
nest generate service $NAME
nest generate controller $NAME
nest generate class $ENTITY_PATH --flat

echo "NestJS scaffolding for '$NAME' created successfully!"

