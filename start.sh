#/bin/sh

cd tDCS-Documents
git pull
git checkout master
sh ../update.sh &
cd tDCS
yarn install
yarn start --host 0.0.0.0
