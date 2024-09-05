// ファイル名を[id].tsxとすることで、URLのパスの値に応じたページを生成できる
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type PostProps = {
  id: string;
};

const Post: NextPage<PostProps> = (props) => {
  const { id } = props;
  // useRouterは関数コンポーネント内のルーティング情報にアクセスできる
  // router.pathでページ遷移にも利用できる
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
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
        <p>{`/post/${id}に対応するページです。`}</p>
      </main>
    </div>
  );
};

// getStaticPathsでパスパラメータを返すことで、getStaticPropsのcontextで受け取れるようになる
// 今回はposts/[id].tsxなのでid値を返す必要がある
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: "1",
      },
    },
    {
      params: {
        id: "2",
      },
    },
    {
      params: {
        id: "3",
      },
    },
  ];

  // fallbackをfalseにすると、pathsで定義されたページ以外は404ページを表示する
  // MEMO:trueにするとどんなパラメータが渡ってきても画面表示されてしまう
  // http://localhost:3000/posts/あああああにすると「/post/あああああに対応するページです。」になる
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  // MEMO:本はこの書き方をしているが、エラーが出る
  // 引用:「context.params['id]はstring | string[]型なので値が配列かどうかで場合分けをする」
  // context.params?.idの型はstring | string[] | undefined型
  // 'context.params' は 'undefined' の可能性があります。ts(18048)
  // (property) params?: ParsedUrlQuery | undefined
  // const id = Array.isArray(context.params["id"])
  //     ? context.params["id"][0]
  //     : context.params["id"];

  const id = Array.isArray(context.params?.id)
    ? context.params?.id[0]
    : context.params?.id;

  // MEMO:サンプルコードにはないが、idがstring | undefined型なので、とりあえずundefinedのときはエラーにしておく
  if (id === undefined) {
    throw new Error();
  }

  return {
    props: {
      id,
    },
  };
};

export default Post;
