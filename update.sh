#/bin/sh

UPSTREAM=${1:-'@{u}'}
REMOTE_RECORD=$(git rev-parse "$UPSTREAM")

while true
do
    REMOTE=$(git rev-parse "$UPSTREAM")
 
    if [ $REMOTE_RECORD = $REMOTE ]; then
        echo "Up-to-date"
    else
        echo "Need to pull"
        git pull
        REMOTE_RECORD=$(git rev-parse "$UPSTREAM")
        cd tDCS
        yarn build
        cd ..
    fi
    sleep 60s
done