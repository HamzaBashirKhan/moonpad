import "./App.css";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Moonriver from "./components/Moonriver";
import RoadMap from "./components/roadmap/RoadMap";
import Team from "./components/team/Team";
import FAQ from "./components/faq/FAQ";
import Footer from "./components/footer/Footer";
import ArenaGameCard from "./components/arena_game_card/ArenaGameCard";
import Models from "./components/3dbackground/3dbackground";
import { ScrollContainer } from "react-scroll-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
const App = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <ScrollContainer>
        <div className="App">
          <motion.div className="text-white bgp bg-fixed px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 ">
            <Header />
            <Models />
            <Intro />
            <Moonriver />
            {/* <Cards/>
      <ArenaGameCard/> */}

            <div className="flex flex-wrap justify-center gap-10">
              <div
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
              >
                <ArenaGameCard />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
              >
                <ArenaGameCard />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
              >
                <ArenaGameCard />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
              >
                <ArenaGameCard />
              </div>
            </div>

            <RoadMap />
            <Team />
            <FAQ />
            <Footer />
          </motion.div>
        </div>
      </ScrollContainer>
    </>
  );
};
export default App;
