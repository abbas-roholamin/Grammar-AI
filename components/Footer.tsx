import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="absolute bottom-0 left-0 flex items-center justify-center w-full h-12 text-sm border-t-2 sm:text-base">
      Powered by <span className="ml-1 font-bold">Nextjs</span>,
      <span className="ml-1 font-bold">Tailwind</span>,
      <span className="ml-1 mr-1 font-bold">Vercel</span> and
      <span className="ml-1 font-bold">OpenAI</span>
    </footer>
  );
}
