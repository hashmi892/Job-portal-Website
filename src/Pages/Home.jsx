import React from "react";
import "../Styles/Home.css";
import FindJobs from "./FindJobs";
import About from "./About";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

import Typed from "react-typed";

const Home = () => {
  return (
    <>
      <div className="relative top-[70px] homePage w-full h-[75vh] flex justify-start items-center py-9">
        <div className="text-white max-w-[800px] mx-14">
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
          <p className="mt-7 font-sans text-[19px] max-md:text-[15px] text-justify tracking-wide">
            Welcome! Our website is a place where you can find lots of different
            job options. Whether you're searching for a job or looking for the
            right person to hire, our website makes it easy. Come and join us to
            find many exciting job opportunities
          </p>
        </div>
      </div>
      <FindJobs />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
