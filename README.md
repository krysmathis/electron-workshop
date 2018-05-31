# Electron 

## Pros:
1. HTML + CSS + Javascript
1. Node.js + Chromium
1. No deployment dependencies

## Cons:
1. HTML + CSS + Javascript

## Anything you can do with node, you can do with electron

## Process modules
- app
- ipc - passing messages around
- menu, menu-item
- dialog
- power-monitor
- tray

## Render modules
- ipc
- remote
- web-frame

## modules available to both
- clipboard
- crash-reporter
- native-image (good for icons)
- screen
- shell

## Local Storage
- Read/write .json files
    -- pro tip: fs-jetpack: auto handle the json stuff no need to stringify
- nedb
- pouchdb - can sync with couchdb

## Relational DB Storage
- seriate (SQL Server)
- pg
- mysql
- oracledb