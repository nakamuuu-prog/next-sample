// apiディレクトリに配置するとAPIやプロキシとして使える
// ビルド時には使えないのでgetStaticPathsやgetStaticPropsでは呼べない

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

// api/helloで呼び出された時の挙動
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // ステータス200でオブジェクトを返す
  res.status(200).json({ name: "John Doe" });
}
