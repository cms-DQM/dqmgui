# Install xrootd dependencies
# cmake
sudo yum -y install wget
sudo wget https://cmake.org/files/v3.12/cmake-3.12.3.tar.gz && sudo tar zxvf cmake-3.* && ./cmake-3.*/bootstrap --prefix=/usr/local && sudo make -j$(nproc) && sudo make install
# lib development
sudo yum -y install zlib-devel
# openssl development
sudo yum -y install openssl-devel
# python development
sudo yum -y install python3-devel
# uuid development
sudo yum -y install libuuid-devel
# devtoolset-7
sudo yum -y install centos-release-scl
sudo yum-config-manager --enable rhel-server-rhscl-7-rpms
sudo yum -y install devtoolset-7
# wheel
sudo python3 -m pip install wheel
# Install xrootd
sudo python3 -m pip install xrootd --user