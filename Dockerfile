FROM ubuntu
WORKDIR /usr/src/app
COPY ./ ./
RUN apt-get update
RUN apt-get install -y python3 
RUN apt-get install -y python2.7
RUN apt-get install -y python-dev
RUN apt-get install -y wget
RUN apt-get install -y git
RUN apt-get install -y pip
RUN apt-get install -y rpm 
RUN apt-get install -y yum
RUN cd /usr/src/app/python/
RUN git clone git clone git://github.com/xrootd/xrootd-python.git
RUN wget https://download-ib01.fedoraproject.org/pub/epel/7/x86_64/Packages/e/epel-release-7-13.noarch.rpm
RUN RUN cd /usr/src/app/python/xrootd-python

RUN python3 -m pip install -r ./python/requirements.txt -t ./python/.python_packages

CMD ["/bin/bash"]