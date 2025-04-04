import React from "react";
import { cn } from "../../../utils/cn";
import { Spotlight } from "../../../components/ui/Spotlight";
import { FlipWords } from "../../../components/ui/flip-words";
import { TextGenerateEffect } from "../../../components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "../../../components/ui/typewriter-effect";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

export function SpotlightPreview() {
  const words = ["Data-Analyst", "Data-Storyteller", "Problem-Solver"];
  const intro =
    "✨A passionate data analyst with a strong foundation in extracting insights from data. From transforming raw data into meaningful visualizations to optimizing decision-making through analytics, I thrive on uncovering patterns and trends. Skilled in Python, SQL, Power BI, and EDA, I love working with data-driven tools and technologies to solve real-world problems🚀.";

  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="cyan" />

      {/* inside  */}
      <div className="h-[50rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden ">
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 ">
          <h3 className="mt-32 sm:mt-0 text-center text-black dark:text-white font-medium text-xl tracking-wider">
            Hello, Data Explorers..!
          </h3>
          <h1 className="mt-6 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-green-400/40 bg-opacity-50 dark:from-neutral-50 dark:to-green-400/40">
            I&apos;m Ankur{" "}
            <span className="space-y-0 border-b-4 border-b-green-400">
              Jat
            </span>{" "}
            <br />
          </h1>

          <div className="mt-10 sm:mt-10 tracking-wider  text-neutral-300/80 max-w-3xl text-center mx-auto capitalize ">
            <TextGenerateEffect words={intro} />
          </div>

          <div className="mt-10 text-center sm:p-1   sm:mt-8 tracking-wider  mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            <FlipWords words={words} /> <br />
          </div>

          {/* know more button  */}
          <div className="flex justify-center items-center mt-14">
            <Link href={"/about"}>
              <Button
                borderRadius="1.75rem"
                className="bg-transparent dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-medium tracking-wider"
              >
                Know More!
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"></p> */}
    </div>
  );
}
