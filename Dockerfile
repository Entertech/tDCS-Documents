FROM node:16.2-slim

RUN sed -i s@/archive.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list && apt update && apt install git -y && apt clean

WORKDIR /docs

RUN apt update 
RUN apt install git -y && git clone https://github.com/Entertech/tDCS-Documents.git

WORKDIR /docs/tDCS-Documents/tDCS 
RUN yarn install 

WORKDIR /docs

COPY ./start.sh .
COPY ./update.sh .

CMD ./start.sh