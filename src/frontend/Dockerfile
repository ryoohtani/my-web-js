FROM node:20.8.1

WORKDIR /src

COPY . /src

# パッケージの更新
RUN apt-get update
# キャッシュクリーンアップと不要なリストの削除
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
# リナックスコマンドのパッケージインストール
RUN apt-get update && apt-get install -y vim less sudo tree
# jsonサーバー
RUN npm install -g json-server

# bunのインストール
RUN curl -fsSL https://bun.sh/install | bash

ENV BUN_PORT=8020
ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

EXPOSE 8020
# RUN npm install --global yarn
# EXPOSE 3000 8030
