import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Accordion } from "../ui/accordion";
import { useState } from "react";
import Login from "../Login";
import Signup from "../Signup";

const Intro = () => {
  const triggerClass =
    "cursor-pointer hover:bg-blue-400/10 mt-6 py-2 px-4 w-full text-start rounded-lg";
  const contentClass = "py-2 px-4 w-full text-start rounded-lg bg-black/40";
  const [mode, setMode] = useState<string>("login");
  return (
    <div className="flex flex-row w-screen h-full">
      <div className="flex flex-col flex-3 px-40 justify-center overflow-y-auto my-16">
        <span className="text-2xl">Welcome to My Project - Plankout</span>
        <span className="text-lg mt-4">
          Visit this Project on GitHub -{" "}
          <a
            className="text-indigo-600 hover:bg-indigo-500/10 rounded-md py-1 px-2"
            target="_blank"
            href="https://github.com/Sahil2315/plankout"
          >
            Click Here
          </a>{" "}
        </span>
        <span className="text-lg mt-1">
          Visit My GitHub Profile -{" "}
          <a
            className="text-indigo-600 hover:bg-indigo-500/10 rounded-md py-1 px-2"
            target="_blank"
            href="https://github.com/Sahil2315"
          >
            Click Here
          </a>{" "}
        </span>
        <Accordion type="single" className="w-[900px] max-md:w-[95%]">
          <AccordionItem value="item-1">
            <AccordionTrigger className={triggerClass}>
              What is Plankout?
            </AccordionTrigger>
            <AccordionContent className={contentClass}>
              Plankout is a full-stack, AI-powered application designed to
              provide tailored workout plans and real-time assistance to users.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className={triggerClass}>
              What Does Plankout Do?
            </AccordionTrigger>
            <AccordionContent className={contentClass}>
              Plankout Creates and tracks Tailored Workout Plans for Fitness
              Enthusiasts of all Levels, Genders, etc.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className={triggerClass}>
              How Does Plankout Work?
            </AccordionTrigger>
            <AccordionContent className={contentClass}>
              Plankout works by integrating Generative AI along with Dynamic
              Application Development Processes in order to work Correctly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className={triggerClass}>
              How to Use Plankout?
            </AccordionTrigger>
            <AccordionContent className={contentClass}>
              Plankout's full-fledged app is still under development, but you
              can explore the Test Section via the navigation above to test its
              workout generation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className={triggerClass}>
              What Technologies are used by Plankout?
            </AccordionTrigger>
            <AccordionContent className={contentClass}>
              Plankout encorporates the Google Gemini API along with Python,
              FastAPI, Reactjs, React Native and MongoDB.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className={triggerClass}>
              How Accurate is Plankout?
            </AccordionTrigger>
            <AccordionContent className={contentClass}>
              Plankout uses Generative AI for guidance, but listen to your
              body—avoid overexertion, even if the app suggests pushing harder.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className={triggerClass}>
              What Lead to Plankout's Creation?
            </AccordionTrigger>
            <AccordionContent className={contentClass}>
              I built Plankout to learn backend integration with Gen AI and
              refine one of my project ideas for tracking weekly workouts.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col flex-2 h-full justify-center pr-20">
        <Login mode={mode} setMode={setMode} />
        <Signup mode={mode} setMode={setMode} />
      </div>
    </div>
  );
};

export default Intro;
