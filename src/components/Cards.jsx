import React from "react"
import { GiBatMask } from "react-icons/gi"
import { AiFillTwitterCircle } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
export default function Cards() {
  return (
      <div className="my-10 text-white font-lora block ring-0 p-1 ring-white ring-offset-2 ring-offset-transparent sm:w-[70%] rounded">
        <div className=" flex justify-between">
          <div>
            <h1 className="font-bold">Arena Games</h1>
          </div>
          <div className="order-last mr-4 mt-1">
            <GiBatMask size={20} />
          </div>
        </div>
        <p className=" text-sm">$ARN</p>
        <div className="flex pt-2 py-5">
          <div className=" ml-2 mr-2">
            <AiFillTwitterCircle />
          </div>
          <div className="mr-2">
            <BsFacebook />
          </div>
        </div>
        <button
          type="button"
          className="text-green-400 font-semibold text-sm bg-green-900 mt-2 rounded ml-2 p-1"
        >
          REGISTER
        </button>
        <p className="ml-2 text-sm py-2">
          {" "}
          Arenum is the evolution of mobile gaming and crypto which has
          feure-rich
        </p>
        <div className="flex">
          <p className="text-white font-semibold text-sm ml-2"> Starts:</p>
          <p className="text-sky-700 font-semibold text-sm ml-2">
            {" "}
            Jan 17, 11.00 UTC
          </p>
        </div>
        <div className="flex mt-2">
          <p className="text-white font-semibold text-sm ml-2"> Price:</p>
          <p className="text-sky-700 font-semibold text-sm ml-2">
            {" "}
            !ARN 0.375 $USD
          </p>
        </div>
        <p className="text-sm ml-2 mt-1">
          Registration closes in 12 hours, 9 minutes
        </p>
        <div className="justify-center flex">
          <div className="w-[75%] mt-2 mx-2 bg-gray-500 rounded-full h-1.5 dark:bg-gray-700"></div>
        </div>

        <div className="flex text-sm mt-2 justify-between">
          <p className="ml-2"> 0 BUSD</p>
          <p className="order-last mr-2"> 0/544 444 ARN</p>
        </div>
        <div className="flex mt-2 justify-between">
          <p className="text-white font-semibold text-sm ml-2"> Total Raise:</p>
          <p className="text-sky-700 font-semibold text-sm mr-2"> $200 049</p>
        </div>
        <div>
          <p className="text-sm ml-2 mt-1"> 1st (approx)= </p>
          <p className="text-sky-700 font-semibold text-sm mr-2 ml-2 mt-1">
            {" "}
            $25.11{" "}
          </p>
        </div>
        <div className="relative flex items-center">
          <div className=" mx-2  border-t border-gray-400"></div>
        </div>
        <div className=" px-2 my-5 flex-grow border-t border-gray-400"></div>
        <p className=" flex justify-center text-sm font-semibold mb-2">
          {" "}
          KYC: In review C{" "}
        </p>
      </div>
  );
}
