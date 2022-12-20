import React from "react";
import Landing from "./landing/Landing";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="  text-white font-lora">
      <Navbar />
      <Landing />
    </div>
  );
}
