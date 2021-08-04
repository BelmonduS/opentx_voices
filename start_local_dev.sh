#!/usr/bin/env bash
cd web_panel
export GOOGLE_APPLICATION_CREDENTIALS="$(pwd)/google-opentx-service-acc.json"
./node_modules/.bin/nodemon ./bin/www --trace-warnings
