import RoadmapCard from "./RoadmapCard";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
function RightCard({ heading, list }) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div data-aos="fade-left" data-aos-duration="2000">
      <div className="flex sm:justify-end sm:w-full">
        <div className="sm:pr-[1%] pt-[5%]">
          <svg
            viewBox="0 0 48 48"
            fill="#581C87"
            xmlns="http://www.w3.org/2000/svg"
            className="-rotate-90 h-20 w-20 mb:max-sm:w-10 mb:max-sm:h-10 "
          >
            <path
              d="M5.93882 13.9336L23.0362 4.53011C23.6363 4.20002 24.3637 4.20002 24.9638 4.53011L42.0612 13.9336C43.0988 14.5043 43.4161 15.8467 42.7438 16.8215L25.6464 41.6127C24.8515 42.7654 23.1485 42.7654 22.3536 41.6127L5.25624 16.8215C4.58391 15.8467 4.90118 14.5044 5.93882 13.9336Z"
              stroke="#9333EA"
              strokeWidth="1"
              className="border-[2px] border-violet-900"
            />
          </svg>
        </div>
        <div className="sm:w-[45%] sm:flex sm:justify-start">
          <RoadmapCard heading={heading} list={list} />
        </div>
      </div>
    </div>
  );
}

export default RightCard;
