import React from "react";
import { motion } from "framer-motion";

import { WHY_GRAMMAR_AI } from "@/content/Information";
import Container from "./Container";

type Props = {};

export default function Reasons({}: Props) {
  return (
    <Container className="px-4 pb-12">
      <h1 className="mt-24 mb-8 text-3xl font-black md:text-4xl">
        Why Grammar AI?
      </h1>
      <div className="flex flex-wrap gap-4">
        {WHY_GRAMMAR_AI.map((reasons, index) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            key={reasons.reason}
            className="basis-[300px] grow bg-gray-200 p-4 rounded-lg group hover:bg-opacity-40"
          >
            <small className="flex items-center justify-center w-8 h-8 font-bold text-white duration-200 bg-gray-800 rounded-full group-hover:bg-black">
              {reasons.reason}
            </small>
            <h2 className="my-2 text-xl font-bold">{reasons.title}</h2>
            <p className="opacity-90">{reasons.details}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
