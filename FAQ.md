
### Solved issues
#### DQM root and pb files not available at DQM NEW GUI.   
Check if can copy by hands from bu to srv like:
```
rsync run355100_DQMLive_concat.pb dqmpro@srv-c2f11-29-01:/data/dqmgui/files/root/.
exec request failed on channel 0
rsync: connection unexpectedly closed (0 bytes received so far) [sender]
rsync error: unexplained error (code 255) at io.c(226) [sender=3.1.2]
```
Can't ssh under dqmpro to srv from bu at all:
```
ssh -vvv dqmpro@srv-c2f11-29-01
```
Logging at the destination srv and found forkbomb:
```
sudo -u dqmpro -H bash
bash: fork: retry: No child processes
```
Fix it doing:
```
ps -aux | grep "dqmpro"
sudo killall -KILL -u dqmpro
```
still not able to copy in hltd logs https://gitlab.cern.ch/cms-daq/FFF/hltd/-/blob/master/python/anelasticDQM.py#L376-390: 
```
INFO:2022-07-07 07:45:32 - copyFileToGUI - Copying to GUI from: /fff/output/DQMOutput/run506891/run506891_DQMLive_concat.pb to: /data/dqmgui/files/pb/run506891_DQMLive_concat_a9c0c174d9c16ce31af519f6c9a798ac.pb
INFO:2022-07-07 07:45:33 - copyFileToGUI - ['rsync', '/fff/output/DQMOutput/run506891/run506891_DQMLive_concat.pb', 'dqmdev@srv-c2f11-29-03:/data/dqmgui/files/pb/run506891_DQMLive_concat_a9c0c174d9c16ce31af519f6c9a798ac.pb']
INFO:2022-07-07 07:45:33 - copyFileToGUI - b''
INFO:2022-07-07 07:45:33 - copyFileToGUI - b'Permission denied, please try again.\r\nPermission denied, please try again.\r\nPermission denied (publickey,gssapi-keyex,gssapi-with-mic,password).\r\nrsync: connection unexpectedly closed (0 bytes received so far) [sender]\nrsync error: unexplained error (code 255) at io.c(226) [sender=3.1.2]\n'
```
at srv side:
```
Jul  5 18:44:25 srv-c2f11-29-03 sshd[18273]: PAM unable to dlopen(/usr/lib64/security/password-auth): /usr/lib64/security/password-auth: cannot open shared object file: No such file or directory
Jul  5 18:44:25 srv-c2f11-29-03 sshd[18273]: PAM adding faulty module: /usr/lib64/security/password-auth
Jul  5 18:44:25 srv-c2f11-29-03 sshd[18273]: Failed password for dqmdev from 10.176.55.22 port 56386 ssh2
Jul  5 18:44:25 srv-c2f11-29-03 sshd[18273]: Failed password for dqmdev from 10.176.55.22 port 56386 ssh2
Jul  5 18:44:25 srv-c2f11-29-03 sshd[18273]: Connection closed by 10.176.55.22 port 56386 [preauth]
```
fixed creating id_rsa without passphrase. 
Problem triggered due to migration to new id_ed25519 key because github do not accept old keys anymore. 
For some reasons rsync (executed by anelasticDQM forked by hltd) can't see ssh-agent with available id_ed25519.

