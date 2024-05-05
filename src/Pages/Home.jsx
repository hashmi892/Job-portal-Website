import { useEffect, useState } from "react";
import "../Styles/Home.css";
// import FindJobs from "./FindJobs";
import About from "./About";
import ContactUs from "./ContactUs";
import imageSlide from "./HomeBgData";
import Typed from "react-typed";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import Jobs from "./Jobs";
import FindJobs from "./FindJobs";
import PostJobs from "./PostJobs";

const Home = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    AOS.init({ delay: 500, duration: 1000 });
  }, []);

  const prevSlides = () => {
    setCurrentState((prevState) =>
      prevState === 0 ? imageSlide.length - 1 : prevState - 1
    );
  };

  const nextSlides = () => {
    setCurrentState((prevState) =>
      prevState === imageSlide.length - 1 ? 0 : prevState + 1
    );
  };

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    transition: "background-image 0.5s ease-in-out",
  };
  return (
    <>
      <div
        className="homePage relative top-[70px] w-full h-[75vh] max-xssm:h-[100%] flex justify-start items-center py-9"
        style={bgImageStyle}
        id="home"
      >
        <div
          className="text-white max-w-[800px] mx-14 z-50"
          data-aos="fade-right"
        >
          <h1 className="text-6xl font-montserrat font-bold max-md:text-4xl max-Xs:text-2xl max-Xs:mt-7 tracking-wide">
            Explore Limitless
            <Typed
              className=" block"
              strings={["Opportunities", "Possibilities", "Chances", "Options"]}
              typeSpeed={100}
              loop={true}
              backSpeed={50}
            />
          </h1>
          <p className="mt-7 mb-4 font-sans text-[19px] max-md:text-[15px] text-justify tracking-wide">
            Welcome! Our website is a place where you can find lots of different
            job options. Whether you&#39;re searching for a job or looking for
            the right person to hire, our website makes it easy. Come and join
            us to find many exciting job opportunities
          </p>
        </div>
        <div
          className="text-4xl text-white absolute top-[50%] cursor-pointer left-0"
          onClick={prevSlides}
        >
          <HiOutlineChevronLeft />
        </div>
        <div
          className="text-4xl text-white absolute top-[50%] cursor-pointer right-0"
          onClick={nextSlides}
        >
          <HiOutlineChevronRight />
        </div>
      </div>
      <Jobs />
      <About />
      <FindJobs />
      <PostJobs />
      <ContactUs />
    </>
  );
};

export default Home;
