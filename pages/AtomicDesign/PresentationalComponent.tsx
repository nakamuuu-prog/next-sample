// cssもこのコンポーネントで適用
// ファイルがないのでコメントアウト
// import "./styles.css";

type ButtonProps = {
  label: string;
  text: string;
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

// Presentational Componentは一切状態やイベントなどを管理しない
// すべて渡ってきたpropsの値のみで構成された見た目を実装するコンポーネント
// propsのみに依存しているので、デザインに関してデバッグが容易になる
export const Button = (props: ButtonProps) => {
  const { label, text, disabled, onClick } = props;

  return (
    <div className="button-container">
      <span>{label}</span>
      <button disabled={disabled} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
