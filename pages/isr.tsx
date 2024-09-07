import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type ISRProps = {
  message: string;
};

// ISR(インクリメンタル静的再生成)
// ページの寿命を設定できる
const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props;

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはISRによってビルド時に生成されたページです</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp} にこのページのgetStaticPropsが実行されました`;

  console.log(message);

  return {
    props: {
      message,
    },
    // 有効期限を設定すると、有効期限が切れたページは再生成される
    revalidate: 10,
  };
};

export default ISR;
