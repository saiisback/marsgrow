"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Herotext } from "@/components/ui/herotext";


export function Hero() {
  const words = ["passion", "dedication"];
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br text-align-left from-slate-300 to-black py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Turn your
        <Herotext className="text-red-500"
          words={words} /> <br />
        into success with <u className="underline-offset-0">MARGOS</u>
        <br />
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg" />
          <div className="px-8 py-2 bg-white rounded-[6px] text-2xl relative group transition duration-200 text-black hover:bg-transparent hover:text-white">
          Let’s Connect !
          </div>
        </button>
      </motion.h1>
    </LampContainer>
  );
}
