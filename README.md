## Creating a website with javascript
## javascriptでwebサイトの作成

<sub> This is a project file with the theme of learning JS, HTML, and CSS for front-end development. </sub>

<sub> フロントエンドの開発に向けて、JSとHTMLとCSSの学習をテーマにしたプロジェクトファイルです </sub>

**環境構築**

*dockerコマンド*

* ビルドコマンド
```
docker compose build
```
* 環境の立ち上げ
```
docker compose up -d
```
* コンテナにアクセス(python-algorithmsはコンテナ名)
```
docker exec -it myweb bash
```

*javascriptのコマンド*

* nodeのバージョン確認
```
node -v
```

* yarnのバージョン確認
```
yarn -v
```

* Bunのバージョン確認
```
bun -v
```

* ターミナル実行
```
node ファイル名.js
```

* ターミナル実行(Bun)
```
bun ファイル名.js
bun run ファイル名.js
```


*gitコマンド*

* ローカルリポジトリの新規作成
```
git init
```

* ファイルの追跡(変更分全て)
```
git add .
```

* コミット
```
git commit
```

* ローカルリポジトリにリモートリポジトリのURLを貼り付ける
```
git remote add myweb URLを貼り付ける
```

* リモートリポジトリへプッシュ
```
git push -u myweb main
```

* リモートリポジトリからローカルに反映
```
git fetch
```

* ブランチの移動
```
git checkout main
```

* マージ
```
git merge myweb/main
```