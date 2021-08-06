Name: DQM_GUI
Version: 1.0.0
Release: 1.0.22
Summary: DQM GUI software
License: gpl
Group: Core DQM
Packager: Ernesta Petraityte
Source0: "1.0.22.tar.gz"
%define _tmppath %{getenv:PWD}/dqmgui_rpm
BuildRoot:  %{_tmppath}
BuildArch: x86_64
AutoReqProv: no

%description
DQM GUI and required python dependecies

%prep
echo  %{_tmppath}

%build

%install
rm -rf $RPM_BUILD_ROOT
mkdir -p $RPM_BUILD_ROOT
tar -C %{getenv:PWD}  -c dqmgui  | tar -xC $RPM_BUILD_ROOT

%post
#### extracting tar, moving older release to old_release folder

cd /dqmgui
tar -xzvf 1.0.22.tar.gz
mv ./dqmgui-1.0.22/* .
rm -rf ./dqmgui-1.0.22

# if [[ -d "/dqmgui/old_releases" ]]
# then 
#     echo "cannot create directory ‘old_releases’: File exists"
# else
#     exec mkdir old_releases
# fi

# mv ./1.0.15.tar.gz ./old_releases/

## witting correct CMSSW release version to cmssw_info file
HOST=$(hostname)

DQMGUI_MODE_PATH=""
if [ "$HOST"="srv-c2f11-29-03" ];
then
    DQMGUI_MODE_PATH='current_playback'
else
    DQMGUI_MODE_PATH='current_production'
fi

cd /dqmdata/dqm_cmssw/$DQMGUI_MODE_PATH

file_name="cmswrapper.sh"
CMSSW_VERSION=$(grep -oh "\w*CMSSW_\w*" ./$file_name)

cd /dqmgui/scripts

sed -i "2s/.*/$CMSSW_VERSION/" cmssw_info
sudo chmod -R 777 /data/dqmgui/ 
sudo chmod -R 777 /dqmgui/ 
export $PYTHONPATH=/dqmgui/python/.python_packages

%files
%defattr(755, root, root, 777)
/dqmgui/

