import { NextPage } from "next";
import styled from "styled-components";

// ThemeProviderから渡ってきたpropsを使って、theme.tsに定義したthemeオブジェクトのプロパティ値を設定する
// Themeを使うとアプリ全体で同じスタイルを使用できるので、デザインの一貫性を保てる
const Text = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin: ${(props) => props.theme.space[2]};
`;

const Page: NextPage = () => {
  return (
    <div>
      <Text>Themeから参照した色を使用しています。</Text>
    </div>
  );
};

export default Page;
