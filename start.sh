#/bin/sh

cd tDCS-Documents
sh ../update.sh &
cd tDCS
npm run serve -- --host 0.0.0.0
