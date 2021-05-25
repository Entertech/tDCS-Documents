#/bin/sh

cd tDCS-Documents
sh ../update.sh &
cd ..
node ./docs/server.js
