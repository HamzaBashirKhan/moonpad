import React from "react"

export default function Moonriver() {
  return (
    <div className="pt-10 mx-auto">
      <h1 className="pt-24 text-2xl flex justify-center font-bold">
        {" "}
        WHAT IS MOONRIVER{" "}
      </h1>
      <div className="justify-center text-center px-16 lg:px-36 text-base sm:text-lg md:text-xl lg:text-xl pt-10">
        <p>
        Moonriver is a companion network to Moonbeam and provides a permanently
        incentivized canary network. New code ships to Moonriver first, where it can be tested and
        verified under real economic conditions. Once proven, the same code ships to Moonbeam on Polkadot.
        </p>
        <p>
        Moonriver is intended to work as a smart contract platform, allowing
        developers to redeploy their ethereum dapps in a substare environment with minimal friction. This
        means that the smart contracts that power ethereum dapps will not need to rewritten or reconfigured for the
        karura network.
        </p>
      </div>
      <div className="flex justify-center gap-5 py-10 px-20 space-x-2 pt-24">
        <button
          type="button "
          className=" hover:bg-gray-100 hover:text-red-900 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow small"
        >
          UPCOMING{" "}
        </button>
        <button
          type="button "
          className=" hover:bg-gray-100 hover:text-red-900 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow small"
        >
          ONGOING{" "}
        </button>
        <button
          type="button "
          className=" hover:bg-gray-100 hover:text-red-900 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow small"
        >
          LAUNCHED
        </button>
      </div>
    </div>
  );
}
