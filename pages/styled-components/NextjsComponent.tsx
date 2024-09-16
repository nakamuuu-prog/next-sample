import { NextPage } from "next";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string;
  children: React.ReactNode;
};

// styled-componentsは描画時にスタイルを作成してclassNameをコンポーネントに渡している
// コンポーネント内の特定のコンポーネントや要素にスタイルを適用したい場合は、propsに渡されるclassNameをスタイルを適用したいコンポーネント、または要素に適用する必要がある
// しかし、Linkコンポーネントはchildren要素が渡されない場合、デフォルトでaタグを返すようになっているためa要素にclassNameを適用することができない
// そこで、Linkとaタグを組み合わせたコンポーネントを作り、propsでclassNameを設定できるようにする
const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props;
  return (
    <Link {...rest}>
      <a className={className}>{children}</a>
    </Link>
  );
};

const StyledLink = styled(BaseLink)`
  color: #1e90ff;
  font-size: 2em;
`;

const Page: NextPage = () => {
  return (
    <div>
      <StyledLink href="/">Go to Index</StyledLink>
    </div>
  );
};

export default Page;
