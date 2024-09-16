import { NextPage } from "next";
import styled from "styled-components";

const Text = styled.p`
  color: #1e90ff;
  font-size: 2em;
`;

const Page: NextPage = () => {
  return (
    <div>
      <Text>World</Text>
      {/* 別ののHTML要素で使いたい場合、asでHTML要素を指定する */}
      {/* これはp要素をa要素に置き換える */}
      <Text as="a" href="/">
        Go to index
      </Text>
    </div>
  );
};

export default Page;
