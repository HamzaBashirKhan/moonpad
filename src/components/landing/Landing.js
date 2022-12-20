import { Animator, ScrollPage, Move } from "react-scroll-motion";

const Landing = () => {
  return (
    <div className=" pt-60 pb-20  justify-center">
      <div className="font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
        <ScrollPage>
          <Animator animation={Move(0, 0, 0, 800)}>
            <h1 className="flex justify-center "> THE FIRST INO LAUNCHPAD</h1>
            <h1 className="flex justify-center ">ON MOONBEAM</h1>
          </Animator>
        </ScrollPage>
      </div>
      <div className="lg:text-xl sm:text-xs  font-semibold pt-10 ">
        <div className="sm:flex sm:justify-center gap-1">
          <p className=" flex justify-center  tracking-wide ">
            Launching Most Sort Out And{" "}
          </p>
          <p className=" flex justify-center tracking-wide">
            Properly Vetted Projects
          </p>
        </div>
        <p className=" flex justify-center tracking-wide">
          On the Moonriver Network
        </p>
      </div>
      <div className="flex justify-center gap-5 py-10 px-20 space-x-2 w-">
        <button
          type="button "
          className=" hover:bg-gray-100 hover:text-red-900 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow small"
        >
          Projects{" "}
        </button>
        <button
          type="button "
          className=" hover:bg-gray-100 hover:text-red-900 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow small"
        >
          Telegram{" "}
        </button>
        <button
          type="button "
          className=" hover:bg-gray-100 hover:text-red-900 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow small"
        >
          Apply{" "}
        </button>
      </div>
    </div>
  );
};
export default Landing;
