import { useState, useCallback } from "react";
import { Button } from "./PresentationalComponent";

const usePopup = () => {
  const cb = useCallback((text: string) => {
    prompt(text);
  }, []);

  return cb;
};

type CountButtonProps = {
  label: string;
  maximun: number;
};

// Container Componentはビジネスロジックのみを実装
// Hooksを使った状態管理やAPIコールなどの副作用を実行するなどの振る舞いを実装する
// Container Componentはビジネスロジック、Presentational Componentは見た目と責務を分けることで、コードの可読性や保守性を向上させる
export const CountButton = (props: CountButtonProps) => {
  const { label, maximun } = props;

  const displyaPopup = usePopup();

  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount >= maximun) {
      displyaPopup(`You've clicked ${newCount} times`);
    }
  }, [count, maximun]);

  const disabled = count >= maximun;
  const text = disabled
    ? "Can't click any more"
    : `You've clicked ${count} times`;

  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      label={label}
      text={text}
    ></Button>
  );
};
