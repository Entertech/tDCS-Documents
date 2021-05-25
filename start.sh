#/bin/sh

cd tDCS-Documents
sh ../update.sh &
cd tDCS
yarn start --host 0.0.0.0
