import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-4 bg-white shadow-md">
      <div className="w-full max-w-[1200px] mx-auto h-16 flex justify-between items-center">
        <h1 className="text-xl font-black">Grammar AI</h1>
        <a
          href="https://www.alirezasamadi.com/"
          target={"_blank"}
          className="flex items-center gap-4 text-sm"
        >
          Developed by
          <img
            src="https://www.alirezasamadi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMy%20Image.0e022541.png&w=256&q=75"
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </a>
      </div>
    </nav>
  );
}
