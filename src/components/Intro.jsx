import React from "react";
import HeroCard from "./HeroCard";

export default function Intro() {
  return (
    <div className=" font-lora text-white py-16">
      <h1 className="font-bold text-3xl flex justify-center"> MINT </h1>
      <p className="text-xl  flex justify-center">
        {" "}
        I'm about to ape into my own project
      </p>


      <div className="py-20">
      <HeroCard/>
      </div>


    </div>
  );
}
