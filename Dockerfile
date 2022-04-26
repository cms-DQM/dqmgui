FROM cmscloud/cc7-cvmfs:latest

# Install xrootd dependencies
# cmake
RUN sudo yum -y install wget
RUN sudo wget https://cmake.org/files/v3.12/cmake-3.12.3.tar.gz && sudo tar zxvf cmake-3.* && ./cmake-3.*/bootstrap --prefix=/usr/local && sudo make -j$(nproc) && sudo make install
# lib development
RUN sudo yum -y install zlib-devel
# openssl development
RUN sudo yum -y install openssl-devel
# python development
RUN sudo yum -y install python3-devel
# uuid development
RUN sudo yum -y install libuuid-devel
# devtoolset-7
RUN sudo yum -y install centos-release-scl
RUN sudo yum-config-manager --enable rhel-server-rhscl-7-rpms
RUN sudo yum -y install devtoolset-7
# wheel
RUN sudo python3 -m pip install wheel
# Install xrootd
RUN sudo python3 -m pip install xrootd --user

COPY ./ ./dqmgui
WORKDIR /home/cmsusr/dqmgui

# Install python dependencies
RUN sudo python3 -m pip install -r ./python/requirements.txt -t ./python/.python_packages

# CMD ["/bin/bash"]
CMD sudo bash ./run.sh