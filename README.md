# idea_bank

アイデアバンク用の[The world’s fastest framework for building websites | Hugo](https://gohugo.io/)のテーマです。

アイデアバンクとは、[Free Your Inner Nonfiction Writer: Educate, Influence, and Entertain Your Readers by Johanna Rothman](https://pragprog.com/titles/d-jrnfwriter/free-your-inner-nonfiction-writer/)で紹介さている、シンプルな執筆システムです。

アイデアバンクは、日々、思い浮んだアイデアを書き留めておく場所のことです。
それらのアイデアをもとに書き止めた短い文章をまとめておく場所でもあります。

また、[Free Your Inner Nonfiction Writer](https://pragprog.com/titles/d-jrnfwriter/free-your-inner-nonfiction-writer/)では、この"アイデアをもとに書き止めた短い文章"のことを`Fieldstones`(自然石)と呼んでいます。[^1]

何かを執筆する時には、アイデアバンクからアイデアや自然石を選んで執筆します。
そして、執筆の結果、新たに思いついたり、学んだ事は、アイデアや自然石としてアイデアバンクに追加していきます。

アイデアバンクは`アイデアバンクの更新`と`執筆`のサイクルを繰り返しながら執筆していくシステムになります。

## インストール

[Quick start | Hugo](https://gohugo.io/getting-started/quick-start/#explanation-of-commands)に従って、Hugoのサイトを生成してください。

ここでは、例として`mybank`というディレクトリにサイトを作ります。

~~~shell
hugo new site mybank
~~~

`mybank`に移動し、`git submodule`を使って`idea_bank`テーマを追加します。

~~~shell
cd mybank
git submodule add https://github.com/kantas-spike/idea_bank.git themes/idea_bank
~~~

`hugo.toml`の設定を変更し、`idea_bank`テーマを有効にします。

~~~toml
# ..略..
theme = 'idea_bank'
# ..略..
~~~

あとは、動作確認です。以下を実行してサーバーを起動します。
そして、[](http://localhost:1313/)をブラウザで開いてサイトが表示されるか確認しましょう。

~~~shell
hugo server
~~~

## コンテンツの登録

アイデアも自然石も `content/ideas` ディレクトリに格納します。

コンテンツの種類は以下になります。

- 大きなアイデア

  [Leaf Bundles - Page bundles | Hugo](https://gohugo.io/content-management/page-bundles/#leaf-bundles)として登録します。

  ~~~shell
  hugo new content --kind idea-bundle ideas/アイデアバンクを作る
  ~~~

- 小さなアイデア

  ただのページとして登録します。

- 自然石

  ただのページとして登録します。


## コンテンツ間の関連付け

コンテンツの`FrontMatter`に`relationships:`を関連するコンテンツのリンクを記載することで、
コンテンツ間の関連付けを行えます。

~~~markdown
---
title: "アイデアバンクとは"
date: 2023-08-25T06:43:01+09:00
draft: false
categories:
- 自然石
tags:
relationships:
- /ideas/アイデアバンクを作る
---

アイデアバンクとは、シンプルな執筆支援システムです。
<!--more-->

何か書くことが必要になった時に助けてくれるネタ帳です。

日々思いついたアイデアや自然石を貯めておく場所です。
~~~

相互に関連付けをする場合は、手間ですが、他方のコンテンツの`relationships:`にリンクを記載してください。[^2]

## 方針

- [ ] 以下のコンテンツを管理可能にします。
  - アイデア
  - 自然石
- [ ] デザインは、[Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.](https://tailwindcss.com/)を利用します。
- [ ] タグ機能も付けたいです。
- [ ] 検索機能も付けたいです。
- [ ] アイデアと自然石に相互リンクが欲しいです。
- [ ] テーマはGitHubで管理します。
- [ ] テーマを利用するブログ自体はプライベートなものなのでGitHubに公開しません。

[^1]: 自然石とは[ワインバーグの文章読本（伊豆原 弓 伊豆原 弓 Gerald M. Weinberg）｜翔泳社の本](https://www.shoeisha.co.jp/book/detail/9784798111223)で紹介された概念らしいです。
[^2]: 全コンテンツの`relationships:`を自動検索するとも考えましたが、Hugoの売りである速度が失われるので止めました。
