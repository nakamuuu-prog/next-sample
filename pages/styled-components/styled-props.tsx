import { NextPage } from "next";
import styled from "styled-components";

type ButtonProps = {
  color: string;
  backgroundColor: string;
};

// スタイルをpropsで指定できるようにする
const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.color};

  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  cursor: pointer;
`;

const Page: NextPage = () => {
  return (
    <div>
      {/* 赤文字で透明な背景のボタン */}
      <Button backgroundColor="transparent" color="#FF0000">
        Hello
      </Button>
      {/* 白文字で青色背景のボタン */}
      <Button backgroundColor="#1E90FF" color="white">
        World
      </Button>
    </div>
  );
};

export default Page;
