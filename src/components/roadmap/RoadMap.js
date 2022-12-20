import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import "aos/dist/aos.css";
// import { useEffect } from "react";
import Aos from "aos";

const RoadMap = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 1000 });
  // }, []);
  return (
    <div className="py-5 mb:max-sm:px-5 items-center object-contain">
      <h1 className="uppercase flex justify-center pb-5 text-3xl font-extrabold sm:pb-10 md:pb-12 lg:pb-14 2xl:pb-16 sm:pt-10 md:text-4xl lg:text-5xl 2xl:text-6xl">
        Road Map
      </h1>

      <div className="absolute border-opacity-20 border-gray-100 h-[100%] border-[5px] left-[7%] sm:absolute sm:border-opacity-20 sm:border-gray-100 xl:h-[105%] sm:border-[5px] sm:left-[50%]"></div>

      <RightCard
        heading={"Quarter 1"}
        list={[
          "NFT Launchpad (Moonriver)",
          "Avalanche Integration",
          "Binance Integration",
          "Ethereum Integration",
          "Marketing and Partnership Announcement",
        ]}
      />

      <LeftCard
        heading={"Quarter 2"}
        list={[
          "NFT Swap",
          "NFT Farming",
          "Listing on CEX and DEX",
          "Listing on Coingecko and Coinmarketcap",
          "Marketing and Partnership Announcement",
        ]}
      />

      <RightCard
        heading={"Quarter 3"}
        list={[
          "Staking Launch",
          "Farming Launch",
          "Binance Integration",
          " Strategic Partnership and Marketing",
        ]}
      />

      <LeftCard
        heading={"Quarter 4"}
        list={["Integrating Launchpad for IGO", "Research and Development"]}
      />
    </div>
  );
};
export default RoadMap;
