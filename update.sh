#/bin/sh

UPSTREAM=${1:-'@{u}'}
REMOTE_RECORD=$(git ls-remote | grep refs/heads/master | cut -f 1)

while true
do
    REMOTE=$(git ls-remote | grep refs/heads/master | cut -f 1)
 
    if [ $REMOTE_RECORD = $REMOTE ]; then
        echo "Up-to-date"
    else
        echo "Need to pull"
        git pull
        REMOTE_RECORD=$(git ls-remote | grep refs/heads/master | cut -f 1)
        cd tDCS
        yarn build
        cd ..
    fi
    sleep 60s
done