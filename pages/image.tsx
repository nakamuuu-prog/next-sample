// Imageコンポーネントを使用することで画像を読み込む際にサーバーサイドで画像の最適化をしてくれる
import { NextPage } from "next";
import Image from "next/image";
import BibleImage from "../public/images/bible.jpeg";

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>imageタグで表示した場合</p>
      <img src="/images/bible.jpeg" />
      <p>Imageコンポーネントを使用して表示した場合</p>
      {/* 通常Imageコンポーネントはwidthとheightを指定しないとエラーが発生するが、importでインポート(静的インポート)した画像をsrcに指定することで省略可能 */}
      {/* imageタグは静的ファイルとして提供されている画像のパスを指すのに対し、Imageコンポーネントは_next/image以下を参照する */}
      {/* src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbible.da095735.jpeg&w=3840&q=75" */}
      {/* NOTE:画像のファイルサイズが半分以下になっているらしいが、どこで確認するかわからない */}
      {/* Imageコンポーネントはブラウザの情報を元に画像を最適化してくれる */}
      {/* ・WebP対応ブラウザにはWebP形式の画像を提供するなどブラウザに対応した形式で表示 */}
      {/* ・画面サイズに応じて適切な大きさの画像を表示 */}
      {/* imageタグは画面が表示されたタイミングで画像の取得・描画を行うのに対し、Imageコンポーネントはビューポートに近づいたときに画像の取得・描画を行う */}
      {/* さらに、画像読み込み中は画像を表示する領域が確保されているので、画像の描画前後でレイアウトが崩れることがない */}
      {/* Imageコンポーネントにはlayoutやplaceholderなど、その他のpropsも渡すことができる */}
      <Image src={BibleImage} layout="intrinsic" placeholder="blur"></Image>
      <p>Imageで表示した場合は事前に描画エリアが確保されます</p>
    </div>
  );
};

export default ImageSample;
