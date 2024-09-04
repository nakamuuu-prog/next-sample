import { NextPage } from "next";
import Head from "next/head";

type SSGProps = {};

// NextPageはNext.jsのPages向けの型
// NextPage<props>でpropsが入るPagaであることを明示することができる
const SSG: NextPage<SSGProps> = () => {
  return (
    <div>
      {/* Headコンポーネントで包むと<head>タグに配置される */}
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
      </main>
    </div>
  );
};

export default SSG;
