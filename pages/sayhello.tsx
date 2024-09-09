import { useState, useEffect } from "react";

function Sayhello() {
  const [data, setData] = useState({ name: "" });

  useEffect(() => {
    // fetchでAPIを呼び出す
    fetch("api/hello")
      // ステータス200で返ってきたオブジェクトをJSONに変換してsetDataに渡す
      .then((res) => res.json())
      .then((profile) => {
        setData(profile);
      });
  });

  return <div>hello {data.name}</div>;
}

export default Sayhello;
