// page/_document.tsxはデフォルトで生成されるページの設定のうち、htmlやhead、body要素に関わる部分を上書きするカスタムドキュメントというしくみ
import Document, { DocumentContext, DocumentInitialProps } from "next/document";
// styled-componentsはCSS in JSと呼ばれるライブラリの1つ
// JSないにCSSを効率的に書くためのもの
// コマンド
// npm install --save styled-components
// npm install --save-dev @types/styled-components
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          // もともとのstyle
          initialProps.styles,
          // styled-componentsのstyle
          sheet.getStyleElement(),
        ],
      };
    } finally {
      sheet.seal();
    }
  }
}
