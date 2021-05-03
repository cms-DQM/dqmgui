# Change to dqmpro: `sudo -u dqmpro -H bash` 
# Set Inviroment : cd /dqmdata/dqm_cmssw/current_production/src/; cmsenv ; cd -
# Run this

playgroundpath="/home/me/work/SERVICE_WORK_CMS/2_DQM/dqmgui/playground"
playgroundmail="petr.mandrik@cern.ch"

python3 dqmgui-cleanup.py -c "" -d $playgroundpath -t 0.10 -l 0.10 --life_time 1 --alarm_email $playgroundmail &

while true; do
  random_id=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
  fname="run341343_DQMLive_concat_"$random_id".pb"
  echo "Create "$fname
  head -c 200M </dev/urandom > $playgroundpath/$fname
  sleep 3
done
