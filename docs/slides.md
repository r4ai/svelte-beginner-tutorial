---
colorSchema: 'auto'
layout: 'intro'
highlighter: shiki
---

# Svelte 入門

## 100行で作るTodoアプリ

<div class="absolute bottom-10 right-20">
  <span class="font-700 text-xl">
    <a href="https://r4ai.dev">2IS, Rai, 2023</a>
  </span>
</div>

---

# 対象者

- HTML/CSS/JS がなんとなくわかる人

<br>

以下の内容はやりません。

- 基礎的なWebの知識の説明(HTTP, DOM, etc...)
- HTML, CSS, JS の文法の説明
- ローカルでの開発環境の構築（StackBlitz を使います）
- おしゃれなスタイルの作成
- デプロイ

<br>

> **注意**：かなり初心者向けの内容です。

<SlideCurrentNo class="absolute bottom-10 right-20" />

---

# アジェンダ

- Svelte 入門
  - Svelte とは
  - 演習: プロジェクトの作成

- Svelte 基本文法
  - Data binding, Props, Reactivity, etc... の解説
  - 演習: Todo アプリの作成

<!-- - SPA の概要（時間が余れば）
  - SPA と MPA
  - CSR, SSR, SSG -->

---
layout: section
---

# Svelte 入門

## ～100行で作るTodoアプリ～

---

# Svelte とは

- Svelte は、Web アプリを構築するためのフレームワークである。
  - 主に SPA を構築するために使われる。
- Svelte はコンパイラである。
  - `.svelte` ファイルを一つのコンポーネント（部品）として扱い、これを実行可能な JavaScript へコンパイルする。
  - 仮想DOMは使わない。
  - $\therefore$ React等に比べてランタイムは非常に軽量で、高速に動作する。

<img src="/svelte_compile.excalidraw.png" alt="Svelteはコンパイラである" class="mt-8 w-[50%]" />

---
layout: two-cols-header
---

# 演習 Step0: Project の作成

::left::

- <https://stackblitz.com/fork/github/r4ai/svelte-skelton-template> を開く。
- 画面右側に `Hello, Svete!` と表示されていることを確認する。

::right::

<img src="/stackblitz_initialized.png" />

---
layout: two-cols
---

# コンポーネントとは

- コンポーネントとは、アプリケーションの構成要素である。
- コンポーネントを組み合わせることで、アプリケーションを構築する。

::right::

<img src="/app_mockup.png" class="w-[75%] mx-auto" />

---
layout: two-cols
---

# コンポーネントとは

- コンポーネントとは、アプリケーションの構成要素である。
- コンポーネントを組み合わせることで、アプリケーションを構築する。

<v-click>
```txt
App
├── NavBar
├── ItemList
│  ├── TodoItem
│  └── TodoItem
└── ItemList
    ├── TodoItem
    ├── TodoItem
    └── TodoItem
```
</v-click>

::right::

<img src="/app_mockup_component.excalidraw.png" class="w-[75%] mx-auto" />

---
layout: two-cols-header
---

# コンポーネントの構成

::left::

- `.svelte` 一つが一つのコンポーネントになる。
  - e.g. `App.svelte`は`App`コンポーネントで、
    `<App />`として使う。
- コンポーネントは、次の3つの部分から構成される。
  - ロジック（JavaScript, TypeScript）
  - マークアップ（HTML風言語）
  - スタイル（CSS, SCSS, ...）
    - スコープは、コンポーネント内に閉じている。

<br>

> **TypeScript**: JavaScript に型の概念を追加した言語。JS のスーパーセットである（JS $\subset$ TS）。

::right::

```svelte
<!-- App.svelte -->

<script>
  // ロジックを記述 (JavaScript, TypeScript)
  let world = "World";
</script>

<!-- 0個以上のマークアップを記述 (HTML) -->
<h1>Hello, {world}!</h1>

<style>
  /* styleを記述 (CSS) */
  h1 {
    color: red;
  }
</style>
```

---
layout: two-cols-header
---

# コンポーネントの構成

::left::

- 小文字のタグ: HTML タグ
  - e.g. `<div>`, `<span>`, `<h1>`, etc...
- 大文字のタグ: Svelte コンポーネント
  - e.g. `<TodoItem>`, `<TodoList>`, etc...

<br>

- 相対パスでコンポーネントをインポートする。
- コンポーネントは default export されている。

::right::

```txt
.
├── lib
│  ├── TodoItem.svelte
│  └── TodoList.svelte
└── App.svelte
```

<br>

```svelte
<!-- App.svelte -->
<script>
  // 相対パスでコンポーネントをインポート
  // コンポーネントは default export されている
  import TodoItem from "./lib/TodoItem.svelte";
</script>

<h1>Todo List</h1>  <!-- HTML タグ -->
<div>               <!-- HTML タグ -->
  <TodoItem />      <!-- Svelte コンポーネント -->
  <TodoItem />      <!-- Svelte コンポーネント -->
  <TodoItem />      <!-- Svelte コンポーネント -->
</div>
```

---
layout: section
---

# Svelte基本文法

---
layout: iframe-right
url: https://svelte.dev/repl/606742ee5f9146198df51289e66cf13b?version=4.2.0
---

# データバインディング

- マークアップ内の `{}` で囲まれた部分は、JavaScript の式として評価される。

- スクリプト内のトップレベルで定義された変数、関数等を利用することができる。

<br>

> データバインディング: アプリの UI と、そこに表示されるデータとを結びつけること。

---
layout: iframe-right
url: https://svelte.dev/repl/c1d41b6e0fed4cc288f3ff912d811ec5?version=4.2.0
---

# データバインディング

- 属性値にもデータバインディングを行える。

<br>

- `src="{src}"` = `src={src}` = `{src}`
  - 属性に与える値が式である場合は、`"{}"`を`{}`に省略できる。
  - さらに属性名と属性値が同じ場合は、`src={src}`を`{src}`に省略できる。

---
layout: iframe-right
url: https://svelte.dev/repl/b2ac5058273748188e160756a51a27fc?version=4.2.0
---

# Props

- コンポーネント間でデータを受け渡すには、props を使う。

- コンポーネントを関数として見ると、props は引数に相当する。

- コンポーネント内でexportした変数は、親コンポーネントからpropsとして渡すことができる。子から親へも渡したい場合は、`bind:`を使う。

---
layout: iframe-right
url: https://svelte.dev/repl/0199154d839e4d1cac887d10014d461a?version=4.2.0
---

# Logic / If blocks

- Svelte 特有の `if` ブロックを使うことで、HTML 内に制御式を書ける。

- 複雑な条件分岐の場合、三項演算子に比べて可読性が高い。

---
layout: iframe-right
url: https://svelte.dev/repl/d756552fc1df40a7a5dd54226b3a4597?version=4.2.0
---

# Logic / Each blocks

- `todos`の一つ一つを`todo`として、ループを回す。

---

# 演習 Step1: コンポーネントを作ってみよう

1. `TodoItem.svelte`を作成する。
   1. Propsとして、`title`, `id`を受け取る。
   2. チェックボックスとタイトルを表示する。
2. `App.svelte`に、Todoアプリのレイアウトを書く。
   1. 作成した`TodoItem`コンポーネントを使って、TodoListを作る。
   2. 新しいTodoを作成するフォームを作る。

<br>

> 解答：https://github.com/r4ai/svelte-skelton-template/commit/eecbfa5833cf25a44c10347a0540e53849740632

---
layout: iframe-right
url: https://svelte.dev/repl/439e960a34ce410ca28815a5e0190e1f?version=4.2.0
---

# 双方向バインディング

- `bind:属性名={変数}`で、属性値と変数を双方向にバインディングできる。

<br>

- value 属性が変更 $\rightarrow$ 変数 name の値が value 属性の値になる
- name 変数の値が変更 $\rightarrow$ value 属性の値が name 変数の値になる

---
layout: iframe-right
url: https://svelte.dev/repl/522f3905c3534c5780c4bec5965d79b8?version=4.2.0
---

# イベントハンドラ

- `on:イベント名={ハンドラ}`で、イベントハンドラを登録できる。

<br>

- button 要素の click イベントが発生すると、`handleClick` 関数が実行される

<br>

- `|` でイベントにmodifierをつけることができる。

<br>

```svelte
<!-- handleSubmitを実行する前に、`event.preventDefault()`を呼び出す。 -->
<form on:submit|preventDefault={handleSubmit}>
  <!-- ... -->
</form>
```

---
layout: iframe-right
url: https://svelte.dev/repl/1635882bfba64ab5aa2db2b208e19c57?version=4.2.0
---

# Reactive Assignment

- 変数に`=`で値を代入する際に、DOMの更新が行われる。
  
- 代入演算によって状態の更新を管理しているので、`.push()`や`.pop()`などのメソッドを使った場合、自動的に再描画されない。

<br>

> Note. Reactのように、`useState`を使ってsetterとgetterで状態を管理する必要はない。

---

# 演習 Step2: 新しいTodoを追加出来るようにしよう

1. todoリストのデータを管理するための変数`todos`を`App.svelte`で定義する。
2. この定義した変数のデータを、`TodoItem`コンポーネントに渡すことで、todoリストを表示する。
3. フォームのsubmit時に、inputタグの値を`title`とする新しいtodoを作成し、それをtodoリストに追加する。

<br>

> 解答：<https://github.com/r4ai/svelte-skelton-template/commit/e10e974d376c6fba0418cfadf2d3b2a57520b2a5>

---

# 演習 Step3: 完了済みのタスクには打消し線を表示しよう

1. `todos`で、そのタスクが完了済みかどうかを管理するためのプロパティ`completed`を追加する。
2. `TodoItem`コンポーネントのpropsとして、`completed`を双方向バインディングする。
3. `TodoItem`内で、チェックボックスがチェックされている場合は`completed`を`true`にする。
4. `TodoItem`内で、`completed`が`true`の場合は、タイトルに打消し線を表示する。

<br>

> 解答: <https://github.com/r4ai/svelte-skelton-template/commit/88a56f38f1dac201c33bfe4455ed18954793c4c5>

---

# 演習 Step4: todoリストを未完了と完了済みで分けて表示しよう

1. filter関数を使って、`completed`が`true`のtodoリストと、`false`のtodoリストで、分けて表示する。

<br>

> 解答: https://github.com/r4ai/svelte-skelton-template/commit/47f43f2a62a4a577b888ff9e2667f2208aa5cbe6

---
layout: iframe-right
url: https://svelte.dev/repl/7b514fab77fd43abb00c057d582ced65?version=4.2.0
---

# Reactive Statement

- なぜ`doubled`は更新されないのか？
  1. `<script>`は、コンポーネントの読み込み時に一度だけ実行される。
  2. `doubled = count * 2`だと、`doubled = 0 * 2`になるため、`doubled`は常に0になる。

- `$:` という特殊な構文を使うことで、状態の変更に応じて再実行されるブロックを定義できる。

<br>

> Note. Reactでいう、依存配列を明示的に書く必要がない`useEffect`みたいなもの。

---
layout: iframe-right
url: https://svelte.dev/repl/f52d833de1bb46adb55e3c2fd06d5750?version=4.2.0
---

# Lifecycle

- `onMount(fn)`:
  - マウント直後に、`fn`が実行される。
  - アンマウント時に、`fn`の返り値が実行される。
- `onDestroy(fn)`:
  - アンマウント直前に、`fn`が実行される。

ライフサイクルの実行順序：

```txt
1. トップレベルのスクリプト
2. beforeUpdate
3. onMount
4. afterUpdate
5. onDestroy
6. onMountの返り値
```

---

# 演習 Step5: 作成したtodoリストをlocalStorageへ保存しよう

1. todoアイテムの型定義を作成する。
2. 仮でおいていた`todos`の初期値を、localStorageから取得したものに変更する。
3. `todos`が更新されるたびに、`todos`をlocalStorageに保存するようにする。

<br>

> 解答: https://github.com/r4ai/svelte-skelton-template/commit/5d6bf32e4df86387fe62aa83be7dd43c52bf6990

---

# 演習 Step6: 作成したtodoアイテムを削除できるようにしよう

1. `App.svelte`で、指定したIDのtodoアイテムを削除する関数`deleteTodo`を作成する。
2. この`deleteTodo`を、`TodoItem`コンポーネントに渡す。
3. `TodoItem`コンポーネント内で、削除ボタンを作成し、クリック時に`deleteTodo`を実行するようにする。

<br>

> 解答: https://github.com/r4ai/svelte-skelton-template/commit/90cce1421f91c9e0d5acff5bd33f25ec05e169ce

---
layout: iframe-right
url: https://svelte-todo.r4ai.dev/
---

# おまけ: スタイルを書こう

- tailwindCSS, daisyUIを使っています。
- リンク: [svelte-todo.r4ai.dev](https://svelte-todo.r4ai.dev)

---

# おわりに

- 今回は実際に手を動かして、Svelte の基本文法を学んだ。

- Svelteは、記法も既存のHTMLに近く、学習コストが低いと思う。
  - 公式のチュートリアルが分かりやすいので、ぜひやってみてほしい。

- Webアプリ開発の際には、選択肢の一つとしてSvelteも検討してみてほしい。
  - React大好きな人にはSolidJSもおすすめ。

<br><br>

> 今回作成したToDoアプリとスライドは、GitHubで公開しています。  
> https://github.com/r4ai/svelte-beginner-tutorial

---
layout: end
---

# ご清聴ありがとうございました
