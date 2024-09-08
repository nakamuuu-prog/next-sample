import Link from "next/link";
import { useRouter } from "next/router";

const LinkTest = () => {
  return (
    <div>
      <div>
        {/* Linkコンポーネントを使うときは<a>タグでラップすると記載してあるが、ラップしなくても使える */}
        <Link href="/ssr">GO TO SSG</Link>
      </div>
      <div>
        {/* hrefでオブジェクトを使うとクエリパラメータも指定することが可能 */}
        {/* 戦記先のURL:http://localhost:3000/ssg?keyword=hello */}
        <Link
          href={{
            pathname: "/ssg",
            query: { keyword: "hello" },
          }}
        >
          GO TO SSG with Object
        </Link>
      </div>
      <div>
        <Link href="/isr">
          {/* buttonを使用すると、onClickが呼ばれたタイミングで遷移する */}
          <button>GO TO SSG</button>
        </Link>
      </div>
    </div>
  );
};

// useRouterを使ってLinkと同じように画面遷移することもできる
const RouterTest = () => {
  const router = useRouter();

  // <Link href="/ssr">GO TO SSG</Link>と同じ動き
  router.push("/ssr");

  // <Link href={{pathname: "/ssg",query: { keyword: "hello" },}}>と同じ動き
  router.push({
    pathname: "/ssg",
    query: { keyword: "hello" },
  });

  // その他
  // リロード
  router.reload();

  // 後ろ向き遷移
  router.back();

  // 遷移開始
  router.events.on("routeChangeStart", (url, { shallow }) => {
    // urlには遷移先のパス
    // shallowはシャロールーティング(パスのみが置き換わる遷移)の場合はtrueになる
  });

  // 遷移完了
  router.events.on("routeChangeComplete", (url, { shallow }) => {
    // urlには遷移先のパス
    // shallowはシャロールーティング(パスのみが置き換わる遷移)の場合はtrueになる
  });
};

export default LinkTest;
