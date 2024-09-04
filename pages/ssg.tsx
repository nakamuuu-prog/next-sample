import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

type SSGProps = {
  message: string;
  name: string;
};

// NextPageはNext.jsのPages向けの型
// NextPage<props>でpropsが入るPagaであることを明示することができる
const SSG: NextPage<SSGProps> = (props) => {
  const { message, name } = props;

  return (
    <div>
      {/* Headコンポーネントで包むと<head>タグに配置される */}
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
        <p>{message}</p>
        <p>{name}</p>
      </main>
    </div>
  );
};

// getStaticPropsという関数を定義すしてexportすると、この関数はビルド時に実行される
// getStaticPropsは必ずexportし、asyncをつけること！
// 引数のcontextはオブジェクトで、中には実行関連の情報が詰まっている
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  // MEMO:とりあえず今は全部undefined
  console.log(context.params); // パスパラメータ。SSGの場合はgetStaticPaths関数を別途定義した時に参照可能
  console.log(context.locale); // 現在のロケール情報(可能な場合)
  console.log(context.locales); // サポートしているロケールの配列(可能な場合)
  console.log(context.defaultLocale); // デフォルトのロケールのデータ(可能な場合)
  console.log(context.preview); // Preview Modeか
  console.log(context.previewData); // Preview ModeでsetPreviewDataによってセットされたデータ

  const timestamp = new Date().toLocaleString();
  const message = `${timestamp} に getStaticPropsが実行されました`;
  const name = "John";
  console.log(message);
  return {
    props: {
      message,
      name,
    },
  };
};

export default SSG;
