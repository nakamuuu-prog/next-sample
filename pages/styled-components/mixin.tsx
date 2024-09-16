import { NextPage } from "next";
// styled-componentsのmixinを利用するとCSSの定義を再利用できる
// css関数を使って他のstyledに埋め込むことで適用できる
import styled, { css } from "styled-components";

// 赤色ボーダー
const redBox = css`
  paddding: 0.25em 1em;
  border: 3px solid #ff0000;
  border-radius: 10px;
`;

// 青色文字
const font = css`
  color: #1e90ff;
  font-size: 2em;
`;

// 赤色ボーダーと青色文字を適用する
const Button = styled.button`
  background: transparent;
  margin: 1em;
  cursor: pointer;

  ${redBox}
  ${font}
`;

// 青色文字だけ適用する
const Text = styled.p`
  font-weight: bold;

  ${font}
`;

const Page: NextPage = () => {
  return (
    <div>
      <Button>Hello</Button>
      <Text>World</Text>
    </div>
  );
};

export default Page;
