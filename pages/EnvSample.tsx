import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const EnvSample: NextPage = (props) => {
  // サーバーサイドで描画するときはtest1が表示され、クライアントサイドで描画するときはundefindeが表示される
  console.log("process.env.TEST", process.env.TEST);
  // サーバーサイド、クライアントサイドに関わらずtest2が表示される
  console.log("process.env.NEXT_PUBLIC_TEST", process.env.NEXT_PUBLIC_TEST);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* サーバーサイドで描画するときはtest1が表示され、クライアントサイドで描画するときは何も表示されない */}
        <p>{process.env.TEST}</p>
        {/* サーバーサイド、クライアントサイドに関わらずtest2が表示される */}
        <p>{process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </div>
  );
};

// getStaticPropsは常にサーバーサイドで動いているので環境変数を参照できる
export const getStaticProps: GetStaticProps = async (context) => {
  console.log("process.env.TEST", process.env.TEST);
  console.log("process.env.NEXT_PUBLIC_TEST", process.env.NEXT_PUBLIC_TEST);

  return {
    props: {},
  };
};

export default EnvSample;
