FROM node:16.2-slim

RUN sed -i s@/archive.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list && apt update && apt install git -y && apt clean

WORKDIR /docs

RUN apt update && apt install git -y && git clone https://github.com/Entertech/tDCS-Documents.git

COPY ./start.sh .
COPY ./update.sh .

CMD ./start.sh