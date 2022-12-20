import { React } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { GiBatMask } from "react-icons/gi";

import "aos/dist/aos.css";

const ArenaGameCard = () => {
  return (
    <div className="ring-0 p-1 ring-white ring-offset-2 ring-offset-transparent rounded backdrop-blur-[80px] p-5 sm:space-y-5 mb:space-y-3">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold mx-2">Arena Games</h1>
          <p className="uppercase text-sm mx-2">$Arn</p>
        </div>
        <GiBatMask size={50} className="mr-4 mt-1" />
      </div>
      <div className="flex gap-2 pt-2 py-5 mx-2">
        <AiFillTwitterCircle size={17} />
        <BsFacebook size={15} />
      </div>
      <button
        type="button"
        className="uppercase text-green-400 font-semibold text-sm bg-green-900 mt-2 rounded p-1 mx-2"
      >
        Register
      </button>
      <p className="text-sm font-lora mt-2 mx-2">
        Arenum is the evolution of mobile gaming and crypto which has feure-rich
      </p>
      <p className="font-bold text-sm mt-2 mx-2">
        Starts: <span className="text-sky-700 ml-1">Jan 17, 11.00 UTC</span>
      </p>
      <p className="font-bold text-sm mt-2 mx-2">
        Price: <span className="text-sky-700 ml-2">!ARN 0.375 $USD</span>
      </p>
      <p className="text-sm mx-2 font-lora mt-2">
        Registration closes in 12 hours, 9 minutes
      </p>
      <div className="w-[95%] mt-2 mx-auto bg-gray-500 rounded-full h-3 dark:bg-gray-700"></div>
      <div className="flex justify-between uppercase font-lora text-sm mt-2 mx-2">
        <p>0 busd</p>
        <p>0/544 444 Arn</p>
      </div>
      <div className="flex justify-between mx-2 font-lora mt-2 text-sm">
        <p className="font-bold ">Total Raise:</p>
        <p>$200 049</p>
      </div>
      <p className="text-sm font-lora mx-2 mt-1">1st (approx)=</p>
      <p className="text-sm font-lora mx-2 font-semibold text-sky-700 mt-1">
        $25.11
      </p>
      <div className=" px-2 flex-grow border-t border-gray-400"></div>
      <p className="text-center text-sm font-semibold py-4">KYC: In review C</p>
    </div>
  );
};
export default ArenaGameCard;
