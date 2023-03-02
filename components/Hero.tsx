import React from "react";
import { FaGithub, FaPaypal } from "react-icons/fa";

import Container from "./Container";

import HeroImg from "@/public/hero image.png";
import Image from "next/image";

type Props = {
  promptValue: string;
  setPromptValue: (a: string) => void;
  generating: () => void;
  loader: string;
};

export default function Hero({
  promptValue,
  setPromptValue,
  generating,
  loader,
}: Props) {
  return (
    <Container className="relative flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-2 mt-24 mb-8">
        <a
          href="https://github.com/AliReza1083/Grammar-AI"
          target={"_blank"}
          className="flex items-center gap-1 px-4 py-2 bg-gray-100 border-2 rounded-lg"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.paypal.com/paypalme/alirezasamadi"
          target={"_blank"}
          className="flex items-center gap-1 px-4 py-2 bg-gray-100 border-2 rounded-lg"
        >
          <FaPaypal /> PayPal
        </a>
      </div>
      <h1 className="mb-4 text-4xl font-black text-center md:text-6xl">
        Grammar AI
      </h1>
      <p className="text-base font-medium text-center opacity-75 md:text-xl">
        This application makes it easy for users to improve their writing and
        avoid common mistakes.
      </p>
      <Image
        src={HeroImg}
        className="my-12 w-96"
        width={600}
        height={600}
        alt=""
      />
      <textarea
        className="w-full p-4 border-2 border-gray-500 rounded-lg outline-none focus:border-black md:w-4/5 lg:w-1/2"
        value={promptValue}
        rows={5}
        onChange={(e) => setPromptValue(e.target.value)}
        placeholder="e.g: I okay am"
      />
      <p className="w-full mt-1 text-sm md:w-4/5 lg:w-1/2 opacity-70">
        It is either going to rewrite it or correct it.
      </p>

      <button
        onClick={generating}
        className={`bg-black text-white w-full md:w-4/5 lg:w-1/2 rounded-lg py-2 my-5 ${
          loader == "Generating..." && "animate-pulse"
        }`}
      >
        {loader}
      </button>
    </Container>
  );
}
