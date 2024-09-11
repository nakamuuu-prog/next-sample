# Atomic Design

Atomic Design はデザインを階層的に定義することで、一貫性を保ち管理しやすくなる

## 5 つの階層

- Atoms
- Molecules
- Organisms
- Templates
- Pages

### Atoms

一番下の階層<br>
ボタンやテキストなどこれ以上分割できないもの<br>
状態や振る舞いを持たず、文章、色、大きさなど描画に必要なものは props で受け取る<br>

### Molecules

ラベル付きのテキストボックスなど複数の Atoms を組み合わせて構築された UI コンポーネント<br>
状態や振る舞いを持たず、必要なデータは親から受け取る<br>
1 つの役割を持った UI のみを実装する<br>

### Organisms

サインインフォームやヘッダーなどの具体的な UI コンポーネントを実装<br>
ドメイン知識に依存したデータを受け取ったり、Context を参照するなど、独自の振る舞いを持つ<br>
見た目を Presentational Component、状態や振る舞いを Container Component に実装する<br>

### Templates

ページ全体のレイアウトを実装<br>
複数の Organisms 以下のコンポーネントを配置して、それぞれを CSS でレイアウトする<br>

### Pages

ページ単位の UI を実装する最上位のコンポーネント<br>
状態の管理、router 関係の処理、API コールなどの副作用の実行、Context に値を渡すなど、振る舞いに関するものを実装<br>
