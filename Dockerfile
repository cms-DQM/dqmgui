FROM ubuntu
WORKDIR /usr/src/app
COPY ./ ./
RUN apt-get update
RUN apt-get install -y python3 
RUN apt-get install -y pip
RUN python3 -m pip install -r ./python/requirements.txt -t ./python/.python_packages

CMD ["/bin/bash"]