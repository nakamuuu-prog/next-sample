import { NextPage } from "next";
import styled from "styled-components";

// styled.要素名`スタイル`でスタイルを指定
const Badge = styled.span`
  padding: 8px 16px;
  font-weight: bold;
  text-align: center;
  color: white;
  background: red;
  border-radius: 16px;
`;

const Page: NextPage = () => {
  return <Badge>Hello World!</Badge>;
};

export default Page;
