import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

type SSRProps = {
  message: string;
};

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページはサーバーサイドレンダリングによってビルド時に生成されたページです。
        </p>
        <p>{message}</p>
      </main>
    </div>
  );
};

// SSRは描画する前にgetServerSidePropsが呼ばれる
// アクセスするたびに内容が変わる
export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  context
) => {
  console.log(context.req); // http.IncomingMessageのインスタンスでリクエストの情報やCookieを参照できる
  console.log(context.res); // http.ServerResponseのインスタンスでCookieをセットしたり、レスポンスヘッダーを書き換えられる
  console.log(context.resolvedUrl); // 実際にアクセスがあったパス
  console.log(context.query); // そのクエリをオブジェクトにしたもの

  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にこのページのgetServerSidePropsが実行されました。`;
  console.log(message);

  return {
    props: {
      message,
    },
  };
};

export default SSR;
