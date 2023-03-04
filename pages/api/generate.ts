// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt } = req.body;

  const payload = {
    model: "text-davinci-003",
    prompt,
    max_tokens: 200,
    temperature: 0.7,
    top_p: 1,
    n: 1,
    stream: false,
  };

  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_APIKEY}`,
    },
    body: JSON.stringify(payload),
  });

  const json = await response.json();

  res.status(200).send(json);
}
