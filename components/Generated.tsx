import React from "react";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { MdOutlineContentCopy } from "react-icons/md";

type Props = {
  promptValue: string;
  generated: string;
  setGenerated: (a: string) => void;
  copingText: (a: string) => void;
};

export default function Generated({
  promptValue,
  generated,
  setGenerated,
  copingText,
}: Props) {
  return (
    <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-full h-screen isolate">
      <div
        onClick={() => setGenerated("")}
        className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-80 -z-10"
      ></div>
      <div className="bg-white w-full max-w-[800px] shadow-2xl p-4 rounded-lg overflow-hidden border-2 border-gray-200">
        <h2 className="my-4 mt-6 text-2xl font-medium">Your Sentence</h2>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="p-4 rounded-md bg-slate-200"
        >
          {promptValue}
        </motion.p>
        <h2 className="my-4 mt-6 text-2xl font-medium">Generated Sentence</h2>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="p-4 text-white bg-black rounded-md"
        >
          {generated}
        </motion.p>
        <button
          onClick={() => copingText(generated)}
          className="p-4 mt-8 text-white duration-100 bg-black rounded-md focus:bg-green-700"
        >
          <MdOutlineContentCopy />
        </button>
        <Toaster
          toastOptions={{
            style: {
              zIndex: 9999,
            },
            position: "bottom-right",
          }}
        />
      </div>
    </div>
  );
}
