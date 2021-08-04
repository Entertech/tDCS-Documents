FROM node:16.2-slim

RUN sed -i s@/archive.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list && apt update && apt install git -y && apt clean

WORKDIR /docs

RUN apt update
RUN apt install git -y
RUN git clone https://gitee.com/lockeysama/tDCS-Documents.git

WORKDIR /docs/tDCS-Documents/tDCS 
RUN yarn add @docusaurus/theme-search-algolia \
&& yarn add @docusaurus/plugin-sitemap \
&& yarn install
RUN git config --global user.email "you@example.com" \
&& git config --global user.name "Your Name" \
&& cd .. && git add tDCS/package.json tDCS/yarn.lock \
&& git commit -m "nothing"

WORKDIR /docs

COPY ./start.sh .
COPY ./update.sh .

CMD ./start.sh
