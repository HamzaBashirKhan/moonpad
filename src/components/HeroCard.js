import profileImage from "../images/arcane.jpg";
import { motion } from "framer-motion";
const HeroCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="sm:flex border-2 border-purple-800 rounded"
    >
      <div className="sm:w-2/5">
        <img src={profileImage} alt="profile" />
      </div>
      <div className="sm:w-3/5 bg-slate-50/20 mb:max-sm:pt-10 mb:max-sm:pb-6 text-sm md:text-base lg:text-lg grid content-center">
        <h1 className="flex justify-center uppercase text-2xl md:text-3xl xl:text-4xl font-extrabold">
          Total Minted
        </h1>
        <p className="flex justify-center">
          The Price is 0.042eth ETH + Gas Fee
        </p>
        <p className="flex justify-center pt-5">534/1000</p>

        <div className="px-10 md:px-16 lg:px-20 xl:px-36 pt-1">
          <div className="flex justify-around bg-purple-800/70 py-2">
            <button href="#">-</button>
            <p>2</p>
            <button href="#">+</button>
          </div>
        </div>

        <div className="flex justify-center pt-5">
          <button
            href="#"
            className="bg-violet-900 px-14 py-2 rounded-sm uppercase"
          >
            Mint
          </button>
        </div>
      </div>
    </motion.div>
  );
};
export default HeroCard;
