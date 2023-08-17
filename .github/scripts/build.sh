#!/usr/bin/env bash

mkdir -p dist
mkdir -p dist/docs

cp -r app/dist/* dist/
cp -r docs/dist/* dist/docs/
