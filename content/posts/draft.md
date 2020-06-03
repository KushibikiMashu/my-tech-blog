---
title: React Hooksを本番環境で使ったらコンポーネントの状態管理がとても楽だった
template: "post"
date: "2019-05-23T21:35:00.000Z"
updatedAt: ""
draft: true
slug: "/posts/2019-05-23"
category: "React"
tags:
    - "React"
    - "React Hooks"
description: ""
---

titles

2020-1-23

- Circle CIでAWSのEC2にデプロイする
    - sshは閉じる
    - EC2でアカウントを用意する
    - 2.1を使う

- Kotlinで遊んでみた。コンストラクタの考察
    - 利点

- フロントエンドでテストを書くためにReactのチュートリアルにreact-testing-libraryでテストを書いた

- Gatsby.jsのブログに目次を追加した

- Reactで簡単にFloating Action ButtonとDrawerを実装する

- 二分探索を使って、同じ記事を取得する

- アジャイルである、ということ
  - 今の仕事
  - PO、デザイナーとの協業
  - デザインに口を出す → OOUIを取り入れ、画面数を1/2に
  - 値段に口を出す。読書ではなく、リサーチ目的に絞る。

- アジャイル開発宣言のメンバーの経歴を調べたら面白かった

- エクストリームプログラミングを現代に実践する

- 2019年、読んでよかった本まとめ
  - タイトルは変えるかも
  - 「エンジニア2年目の自分が力がついたと感じた書籍を紹介する」

- SOLID原則をコードで説明する

- SOLID原則以外にもOOPの原則がある

- LaravelのDIは「契約による設計」以外認めない
  - ファサードなんて使うな。ファサードは実はアダプター（出典）
  - containerなんて使うな。サービスロケーターになる
  - DIは「契約による設計」（バートランド・メイヤー）しか認めない

---
# これから書くこと
- 未経験プログラマの戦略
    - 情報学部卒ではない
    - ブロックチェーン、機械学習
        - 機械学習は、統計やってる人がメイン？
    - 少し前はアプリエンジニア
    - インフラエンジニア、ネットワークエンジニアはいつの時代も必要
    - Webエンジニアとやることが違う
    - 結局は自分のやりたいことをやる
    - フロント、サーバー、インフラの区分けは曖昧
        - 金銭ドリブンでは戦略がありそう
        - フリーランスになる
        - Go/Scalaやる
        - 言語には流行り廃りがある
    - プログラミングとの向き合い方。根本的な理解を得るためには何を学ぶか
    - ベテランに追いつけない部分
        - 現場経験
        - 実務・運用上発生する問題
        - チームとして働くこと
    - 人がやらないことをやる
        - 人がやらなくて価値のあることをやる
        - 人がリスクだと思っているけど実はリスクがないことをやる
        - そのチームで「唯一」の人間になる
            - スキル面
- 他業種からプログラマになって思うこと
    - Code is Poetry
    - 英語ネイティブだと最初のハードルは低そう
    - 認知能力 cognitive function
    - 言語能力
- 学ぶことを決める
- 情報収拾の仕方
    - stack overflow
    - GitHub issue
    - できる人のブログ
- 技術書の読み方
    - 必要な箇所だけ読む
    - 興味のある章を通読する
    - 情報の吸収効率が一番高い時に読む
    - 漫然とインプットしない
    - インプット後にはアウトプットを
        - Twitter
        - 会話
        - ブログ
        - コード
    - 情報の質を上げる
    - 一次情報に当たる
- チュートリアルの重要性
    - チュートリアルは3日でできる
        - Redux
            - 2日
        - React-Native
            - 3日
            - スターターの選定、環境構築
            - Hello, world
            - ホーム画面の作成
        - Elm
            - 3日
            - ポートフォリオ作成へ
                - 1ヶ月
        - React DnD
            - 2日
        - Gatsby.js
            - 2日
        - Rust
            - たくさん
        - GitHubにレポジトリを作る
            - 達成感と進捗管理
            - 草の数
    - 環境構築はDockerで行う
        - Alpine Linuxベースが軽量
    - チュートリアルの後
        - あとは用途を考えること
        - APIを読むこと
        - リーダブルコードにも書いてる
    - その他の技術の理解到達度によってスピードは変わる
    - アウトプットはマスト
- 学習方法
    - Progate
- いろんな業界からきてほしい
    - プログラマになることは難しくない
    - いいプログラマになることは難しい
- 設計を学ぶこと
    - DDDも設計の一種
    - オブジェクト指向の話ばっかり
- ElmとRedux
    - Qiitaにも投稿する
- 読んだ本の気になった箇所をまとめる
- 今からVue.jsではなくReactを学び始める理由
- 業務で使う言語を使う
    - 自分が学んでいる言語を業務に取りいれる（これはまだ）
        - Elm
- エンジニアの副業について
    - 賛成
    - 本当にやるべきこと？
- Elmを学んだ結果
    - 関数型の基礎
    - 高階関数
    - 関数は値
    - カリー化
    - 型でプログラミングをする
    - 副作用
    - 関数を組み合わせる
    - オブジェクト指向はデータとデータを扱うメソッドをまとめている
    - ファイルが大きくなったらモジュールを分割する
    - Reactの書き方が上手くなった？
- Rustを学んだ結果
    - メモリ操作
    - スタックとヒープ
    - シングルスレッド・マルチスレッド
    - エラー処理（Result型）
    - 所有権、借用、ライフタイム
- テストコードを書いてみた結果
    - リファクタが怖くない
        - 前職で「テストコードを書いてるのに書き換えるのは怖い」という方がいた。（PHPは3系から使ってる）
    - テストしやすいように関数を書く
        - 返り値あり。関数を組み合わせる
- Nginx、MySQLのチューニングをしてみた結果

# 書かないこと
給料の話

# ↑本当にこれでいいのか？
ブログで自分にラベル付けをする
- Reactの最先端を行く人
- Goもちょっとできる人
- Dockerもちょっとできる人
- AWS触る人
- サービス志向である人
- Google好き

いらないラベル
- 未経験
- 経験年数が浅い
- どれも中途半端な人
- 何してるかわからない人

---
clean coderを読んで学んだこと。

いい言葉の抜き出しでもいい

# Clean Coderの効用
この本を読んでから、自分も会社で見積もり時間を妥協することがなくりました。

また、仕事の見積もりでも、自分の作業だけではなく、他の人から手伝いを頼まれて作業を中断することを想定して見積もりを算出するようになりました。

Clean Coderで「問題を解決するにあたり、同僚に聞いた方が早いこともある。同僚に頼ってもいい。ただ、同僚が自分を頼ってくれているときは、快く問題解決を手伝ってあげよう」と説かれていたからです。

実際にこれを実践したところ、マネージャーから「自分の仕事の範囲を超えて同僚の手伝いをしており、とても良い姿勢だ」と評価されました。

# ファクトから考える
「1日の終わりに仕事の振り返りを行うと、業務でのアウトプットの質が向上した」というツイートを見かけました。

そういうこともあるだろうなと思いましたが、論拠がツイートに記載されていませんでした。

根拠の曖昧なことを元に思考するのではなく、ファクトから思考しなければ、前提を誤ったり間違った概念化、あるいは十分に議論されてきた概念を再発明することになりがちです。

# 毎日振り返り
- 課金のドメインモデル
    - トップダウン = 公式ドキュメントをざっとみて全体像を把握する（書籍を読む）
    - ボトムアップ = 別のプロダクトのテストコードを読む（APIを調べる）

# テストの観点からフレームワークを比較してみた
Slim, Lumen, BEAR.Sunday

- アーキテクチャの違い
- エラーメッセージの違い

# UseCase層の実装悩み
悩むということは情報が足りない。情報を集めて、比較して、分析して、判断する

# TDD本の印象に残った文章抜き出し

# Teem Geekの印象に残った文章抜き出し

# フレームワークでクリーンアーキテクチャについての疑問
ウェブアプリケーションでは、Webが前提

- MVC

結論: ビジネスロジックとアプリケーションロジックに集中したいだけでは？

追記。「クリーンアーキテクチャ」のわりに、SOLID原則のISP, DIPくらいの話しか聞かなくて不思議。
原典ではコンポーネントの話もしてた。

本質は、方針と詳細を分けること。依存の方向をデータの方向と同じにするのではなく、アーキテクトがオブジェクトの依存を制御すること

# 弁コムの構成に見る、継続的に安定してソフトウェア（アプリケーション）をデプロイ・運用をするための取り組み
## What, Why, How
ツールはHow。What, Whyは書籍より引用する。

ツールという観点、なぜそのツールがあるのか、安定したソフトウェアのデプロイ・運用という観点からまとめる。

SEO要件。

Yii。
Varnishは廃止予定。Akamaiに移行。

開発環境はVagrantからDockerへ移行した。
staging環境。
本体はEC2。マイクロサービス。owned k8s。「はてな」と同じ
現在、本体のコンテナ化と「安定したコンテナ運用」のためのプロジェクトが立ち上がっている。
ECSに以降。クラウドネイティブ宣言。

gitlab-ciでCI/CD。pushのたびにテストのpipelineが走る。
code deploy。

ログ・メトリクス収集。New Relic、グラファナからDatadog。sensu、

chatops（デプロイ、ログ収集、エラー検知）

必読書勉強会。セキュリティ、アクセシビリティ。

課題
テストの実行が遅い
ランダムで落ちるテストがある
gitlabサーバもownedのため、稀にパイプラインが詰まることがある

所感
Reactは2015年から、k8sは2017年（？）から取り入れるなどしてきた。
枯れていない技術を採用した結果、なのだと思う

CI/CD、XP

---

Kotlinで遊んでみた
delegate、 interfaceで具象メソッドを実装、をやってみたい


DIを簡単に書ける

```kotlin
fun main() {
    val fooEngine = Engine("foo式")
    val fooCar = Car(fooEngine)
    fooCar.run()

    val barEngine = Engine("bar式")
    val barCar = Car(barEngine)
    barCar.run()
}

interface EngineInterface {
    fun start()
}

class Engine(val type: String): EngineInterface {
    override fun start() = println("$type エンジンが動き出しました")
}

class Car(val engine: EngineInterface) {
    fun run() {
        engine.start()
    }
}
```

```kotlin
interface RadioProgramFactoryInterface {
    fun create(title: String, personalities: List<Personality>, guests: List<Guest?>): RadioProgram
}

class RadioProgramFactory: RadioProgramFactoryInterface {
    override fun create(title: String, personalities: List<Personality>, guests: List<Guest?>): RadioProgram
    	= RadioProgram(title, personalities, guests)
}

class RadioProgram(val title: String,
                        val personalities: List<Personality>,
                        val guests: List<Guest?>
        ) {
    fun introduce(): String {
        return personalities.fold("", {greetings, personality ->
            if (title == "オードリーのオールナイトニッポン" && personality.name == "春日俊彰") {
                return greetings + "土曜の夜カスミン。"
            }
            greetings + personality.greet()
        })
    }

    fun introduceGuests(): String {
        val first = guests.first()

        if (guests.count() == 1 && first != null) {
          return "今夜のゲストは" + first.name + "さんです。"
        }

        return ""
    }
}

class Personality(val name: String, val age: Int) {
    fun greet(): String = this.name + "です。"
}

data class Guest(val name: String, val age: Int)

fun main() {
    var title = "オードリーのオールナイトニッポン"
    val wakasama = Personality("若林正恭", 41)
    val kasumin = Personality("春日俊彰", 40)
    val radioProgram = RadioProgramFactory().create(title, listOf(wakasama, kasumin), listOf())
    println(radioProgram.title)
    println(radioProgram.introduce())

    title = "スペシャルウィーク"
    val yamachan = Guest("山里亮太", 42)
    val specialWeek = RadioProgramFactory().create(title, listOf(wakasama), listOf(yamachan))
    println(specialWeek.title)
    println(specialWeek.introduceGuests())
}
```
https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS4zLjYxIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsImpzQ29kZSI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiaW50ZXJmYWNlIFJhZGlvUHJvZ3JhbUZhY3RvcnlJbnRlcmZhY2Uge1xuICAgIGZ1biBjcmVhdGUodGl0bGU6IFN0cmluZywgcGVyc29uYWxpdGllczogTGlzdDxQZXJzb25hbGl0eT4sIGd1ZXN0czogTGlzdDxHdWVzdD8+KTogUmFkaW9Qcm9ncmFtXG59XG5cbmNsYXNzIFJhZGlvUHJvZ3JhbUZhY3Rvcnk6IFJhZGlvUHJvZ3JhbUZhY3RvcnlJbnRlcmZhY2Uge1xuICAgIG92ZXJyaWRlIGZ1biBjcmVhdGUodGl0bGU6IFN0cmluZywgcGVyc29uYWxpdGllczogTGlzdDxQZXJzb25hbGl0eT4sIGd1ZXN0czogTGlzdDxHdWVzdD8+KTogUmFkaW9Qcm9ncmFtXG4gICAgXHQ9IFJhZGlvUHJvZ3JhbSh0aXRsZSwgcGVyc29uYWxpdGllcywgZ3Vlc3RzKVxufVxuXG5jbGFzcyBSYWRpb1Byb2dyYW0odmFsIHRpdGxlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgcGVyc29uYWxpdGllczogTGlzdDxQZXJzb25hbGl0eT4sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgZ3Vlc3RzOiBMaXN0PEd1ZXN0Pz5cbiAgICAgICAgKSB7XG4gICAgZnVuIGludHJvZHVjZSgpOiBTdHJpbmcge1xuICAgICAgICByZXR1cm4gcGVyc29uYWxpdGllcy5mb2xkKFwiXCIsIHtncmVldGluZ3MsIHBlcnNvbmFsaXR5IC0+IFxuICAgICAgICAgICAgaWYgKHRpdGxlID09IFwi44Kq44O844OJ44Oq44O844Gu44Kq44O844Or44OK44Kk44OI44OL44OD44Od44OzXCIgJiYgcGVyc29uYWxpdHkubmFtZSA9PSBcIuaYpeaXpeS/iuW9sFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyZWV0aW5ncyArIFwi5Zyf5puc44Gu5aSc44Kr44K544Of44Oz44CCXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyZWV0aW5ncyArIHBlcnNvbmFsaXR5LmdyZWV0KClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZnVuIGludHJvZHVjZUd1ZXN0cygpOiBTdHJpbmcge1xuICAgICAgICB2YWwgZmlyc3QgPSBndWVzdHMuZmlyc3QoKVxuICAgICAgICBcbiAgICAgICAgaWYgKGd1ZXN0cy5jb3VudCgpID09IDEgJiYgZmlyc3QgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBcIuS7iuWknOOBruOCsuOCueODiOOBr1wiICsgZmlyc3QubmFtZSArIFwi44GV44KT44Gn44GZ44CCXCIgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gXCJcIlxuICAgIH1cbn1cblxuY2xhc3MgUGVyc29uYWxpdHkodmFsIG5hbWU6IFN0cmluZywgdmFsIGFnZTogSW50KSB7XG4gICAgZnVuIGdyZWV0KCk6IFN0cmluZyA9IHRoaXMubmFtZSArIFwi44Gn44GZ44CCXCJcbn1cblxuZGF0YSBjbGFzcyBHdWVzdCh2YWwgbmFtZTogU3RyaW5nLCB2YWwgYWdlOiBJbnQpXG5cbmZ1biBtYWluKCkgeyAgICBcbiAgICB2YXIgdGl0bGUgPSBcIuOCquODvOODieODquODvOOBruOCquODvOODq+ODiuOCpOODiOODi+ODg+ODneODs1wiXG4gICAgdmFsIHdha2FzYW1hID0gUGVyc29uYWxpdHkoXCLoi6XmnpfmraPmga1cIiwgNDEpXG4gICAgdmFsIGthc3VtaW4gPSBQZXJzb25hbGl0eShcIuaYpeaXpeS/iuW9sFwiLCA0MClcbiAgICB2YWwgcmFkaW9Qcm9ncmFtID0gUmFkaW9Qcm9ncmFtRmFjdG9yeSgpLmNyZWF0ZSh0aXRsZSwgbGlzdE9mKHdha2FzYW1hLCBrYXN1bWluKSwgbGlzdE9mKCkpXG4gICAgcHJpbnRsbihyYWRpb1Byb2dyYW0udGl0bGUpXG4gICAgcHJpbnRsbihyYWRpb1Byb2dyYW0uaW50cm9kdWNlKCkpXG4gICAgXG4gICAgdGl0bGUgPSBcIuOCueODmuOCt+ODo+ODq+OCpuOCo+ODvOOCr1wiXG4gICAgdmFsIHlhbWFjaGFuID0gR3Vlc3QoXCLlsbHph4zkuq7lpKpcIiwgNDIpXG4gICAgdmFsIHNwZWNpYWxXZWVrID0gUmFkaW9Qcm9ncmFtRmFjdG9yeSgpLmNyZWF0ZSh0aXRsZSwgbGlzdE9mKHdha2FzYW1hKSwgbGlzdE9mKHlhbWFjaGFuKSlcbiAgICBwcmludGxuKHNwZWNpYWxXZWVrLnRpdGxlKVxuICAgIHByaW50bG4oc3BlY2lhbFdlZWsuaW50cm9kdWNlR3Vlc3RzKCkpXG59XG4ifQ==
