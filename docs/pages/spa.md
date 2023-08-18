---
layout: section
---

# SPA の概要

---

# Webページが表示されるまでの大まかな道のり

1. User が Web ブラウザに URL を入力する。
2. ブラウザは与えられたアドレスに対して、リクエストを送信する。
3. サーバーはリクエストを受け取り、HTML をレスポンスとして返す。
4. ブラウザは受け取った HTML を解釈し、レンダリングする。

<img src="/web.excalidraw.png" class="mt-4 w-[80%]" />

> この説明はかなりざっくりしているので、詳しくはこちらを参照：<https://web.dev/howbrowserswork/>

---

## layout: two-cols

# SPA と MPA / MPA とは

- MPA: Multi Page Application
  - 複数のHTMLページで構成されるWebサイトのこと。
  - MPAでは、新しいページへ移動するとブラウザがサーバーに対して新しいページのHTMLをリクエストする。
- 代表的なMPAフレームワーク:
  - Ruby on Rails, Django, Laravel, Hugo, Astro, etc...

::right::

```mermaid {scale: 0.6}
sequenceDiagram
  actor U as User
  participant B as 🌐 Browser
  participant S as 🖥️ Server
  U ->> B: https://example.com/
  B ->> S: GET / HTTP/1.1
  S ->> B: <html>...</html>
  B ->> U: レンダリングしたページを表示
  U ->> B: ページ遷移
  B ->> S: GET /about HTTP/1.1
  S ->> B: <html>...</html>
  B ->> U: レンダリングしたページを表示
```

---

# SPA と MPA / SPA とは

- SPA: Single Page Application
  - ローカルでHTMLをレンダリングする単一のJavaScriptアプリケーションで構成されるWebサイトのこと。
  - SPAでは、ページ遷移をするとJSが実行され、同じHTMLで新しいHTMLのページを再描画する。
  - スムーズが画面遷移を実現するため、動的なWebサイトに適している。
  - e.g. GoogleMap, Discord, etc...
- 代表的なSPAフレームワーク:
  - SvelteKit, SolidStart, Next.js, etc...

---

## layout: two-cols

# SPA と MPA / SPA の特徴

- 初回のページ表示が遅い。
- しかし、その後のページ遷移は高速。

<br>

- このような、クライアント側でページをレンダリングする手法を **CSR** (Client Side Rendering) と呼ぶ。

<v-click>

- この初回ページの表示が遅いという問題を解決するために、以下のような手法が考案された。
  - SSR (Server Side Rendering)
  - SSG (Static Site Generation)

</v-click>

::right::

```mermaid {scale: 0.53}
sequenceDiagram
  actor U as User
  participant B as 🌐 Browser
  participant S as 🖥️ Server
  U ->> B: https://example.com/
  B ->> S: GET / HTTP/1.1
  S ->> B: <html>...</html>
  B ->> S: GET /app.js HTTP/1.1
  S ->> B: app.js の中身
  B ->> B: ページを生成
  B ->> U: レンダリングしたページを表示
  U ->> B: ページ遷移
  B ->> S: 差分だけリクエスト
  S ->> B: 差分だけレスポンス
  B ->> B: 差分だけページを更新
  B ->> U: レンダリングしたページを表示
```

---

## layout: two-cols

# CSR (Client Side Rendering)

1. リクエストが来ると、空のHTMLを返す。
2. ブラウザ上でJavaScriptが実行され、HTMLの中身を生成する。

<br>

- 問題点:
  - 初回のページ表示が遅い。

::right::

```mermaid {scale: 0.53}
sequenceDiagram
  actor U as User
  participant B as 🌐 Browser
  participant S as 🖥️ Server
  U ->> B: https://example.com/
  B ->> S: GET / HTTP/1.1
  S ->> B: <html>...</html>
  Note left of U: ページの内容は見えない<br>操作はできない
  B ->> S: GET /app.js HTTP/1.1
  S ->> B: app.js の中身
  B ->> B: ページを生成
  B ->> U: レンダリングしたページを表示
  Note left of U: ページの内容が見える<br>操作はできる
```

---

## layout: two-cols

# SSR (Server Side Rendering)

1. リクエストが来ると、サーバー側でHTMLを生成して返す。
2. 仮の見た目として、インタラクティブな操作はできないHTMLが表示する。
3. JavaScriptを実行し、インタラクティブな操作を可能にする。

<br>

- 問題点:
  - リクエスト時に毎回HTMLを生成するため、サーバーの負荷が高くなる。
  - 実際にインタラクティブなページが表示されるのは、JavaScriptが実行されてから。

::right::

```mermaid {scale: 0.52}
sequenceDiagram
  actor U as User
  participant B as 🌐 Browser
  participant S as 🖥️ Server
  U ->> B: https://example.com/
  B ->> S: GET / HTTP/1.1
  S ->> S: HTMLを生成
  S ->> B: <html>...</html>
  B ->> U: レンダリングしたページを表示
  Note left of U: ページの内容は見える<br>操作はできない
  B ->> S: GET /app.js HTTP/1.1
  S ->> B: <script>...</script>
  B ->> B: Hydration
  B ->> U: レンダリングしたページを表示
  Note left of U: ページの内容が見える<br>操作はできる
```

---

## layout: two-cols

# SSG (Static Site Generation)

1. ビルド時にHTMLを生成しておく。
2. リクエストが来ると、生成済みのHTMLを返す。

<br>

- 問題点:
  - ビルド時にHTMLを生成しておくため、コンテンツが更新されるたびにビルドしなければならない。

::right::

```mermaid
sequenceDiagram
  actor U as User
  participant B as 🌐 Browser
  participant S as 🖥️ Server
  U ->> B: https://example.com/
  B ->> S: GET / HTTP/1.1
  S ->> B: <html>...</html>
  B ->> U: レンダリングしたページを表示
  B ->> S: GET /app.js HTTP/1.1
  S ->> B: <script>...</script>
  B ->> B: Hydration
  B ->> U: レンダリングしたページを表示
  Note left of U: ページの内容が見える<br>操作はできる
```

---

# SPA (CSR) vs MPA (SSR)

| 性能       | SPA (CSR) | MPA (SSR) |
| ---------- | --------- | --------- |
| 初回表示   | 遅い      | 速い      |
| ページ遷移 | 速い      | 遅い      |
