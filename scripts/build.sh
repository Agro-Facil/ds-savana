#!/bin/bash

if [ "$1" == "package" ]; then
  sed -i 's/"main": "expo-router\/entry"/"main": "dist\/index.js"/' package.json
  yarn package
elif [ "$1" == "android" ]; then
  sed -i 's/"main": "dist\/index.js"/"main": "expo-router\/entry"/' package.json
  yarn android
fi