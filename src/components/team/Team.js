import profileImage from "../../images/profile-img.jpeg";
import TeamMember from "./TeamMember";
import { Carousel } from "antd";
import { motion } from "framer-motion";
const Team = () => {
  var settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="pb-5 pt-8 sm:pb-10 sm:pt-14 lg:pb-14 lg:pt-20 2xl:pb-20 2xl:pt-28 px-7">
      <h1 className="uppercase flex justify-center pb-5 text-2xl font-extrabold md:text-3xl lg:text-4xl 2xl:text-6xl">
        Meet the Team
      </h1>
      <p className="flex justify-center text-xs font-medium pb-5 sm:pb-10 md:pb-14 lg:pb-18 2xl:pb-22 sm:text-sm md:text-base lg:text-lg 2xl:text-3xl">
        The ones who are making everything happen.
      </p>

      <Carousel autoplay={true} autoplaySpeed={2500} speed={7000} {...settings}>
        <div>
          <motion.div whileHover={{ scale: 0.9 }} className="mx-5 my-5">
            <TeamMember
              image={profileImage}
              name={"Tnip"}
              designation={"Founder"}
              index="1"
            />
          </motion.div>
        </div>
        <motion.div whileHover={{ scale: 0.9 }}>
          <div className="mx-5 my-5">
            <TeamMember
              image={profileImage}
              name={"Lil'Misfit"}
              designation={"Co-Founder"}
              index="2"
            />
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 0.9 }}>
          <div className="mx-5 my-5">
            <TeamMember
              image={profileImage}
              name={"Egg"}
              designation={"Marketing"}
              index="3"
            />
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 0.9 }}>
          <div className="mx-5 my-5">
            <TeamMember
              image={profileImage}
              name={"Qais"}
              designation={"UI-designer"}
              index="4"
            />
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 0.9 }}>
          <div className="mx-5 my-5">
            <TeamMember
              image={profileImage}
              name={"Tnip"}
              designation={"Founder"}
              index="5"
            />
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 0.9 }}>
          <div className="mx-5 my-5">
            <TeamMember
              image={profileImage}
              name={"Lil'Misfit"}
              designation={"Co-Founder"}
              index="6"
            />
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 0.9 }}>
          <div className="mx-5 my-5">
            <TeamMember
              image={profileImage}
              name={"Egg"}
              designation={"Marketing"}
              index="7"
            />
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 0.9 }}>
          <div className="mx-5 my-5">
            <TeamMember
              image={profileImage}
              name={"Qais"}
              designation={"UI-designer"}
              index="8"
            />
          </div>
        </motion.div>
      </Carousel>
    </div>
  );
};
export default Team;
