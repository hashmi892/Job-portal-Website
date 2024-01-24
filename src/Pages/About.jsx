import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import AboutUsImg from "../assets/Images/AboutUsImg.jpg";
import "../Styles/About.css";
const About = () => {
  return (
    <div>
      <section className=" about max-container grid lg:grid-cols-2 grid-cols-1  mt-20 gap-14 padding-l padding-r padding-t padding-b  relative ">
        <div className="max-lg:w-full">
          <img
            src={AboutUsImg}
            alt="AboutUs"
            className="object-cover w-full h-full rounded-xl shadow-lg z-30"
          />
        </div>
        <div className=" lg:padding-r flex flex-col pt-5 max-lg:p-2 relative area ">
          <h1 className="text-5xl font-montserrat font-bold text-mainColor leading-tight max-lg:mb-3 max-lg:text-3xl max-sm:text-2xl">
            We Help To Get The Best Job And Find A Talent
          </h1>
          <p className="text-base font-palanquin text-slate-gray text-justify">
            At our job portal, we're dedicated to connecting job seekers with
            their dream careers and assisting employers in finding the perfect
            candidates. With a passionate team and innovative technology, we're
            here to help you take the next step in your career journey. Join us
            and let's create a brighter future together. Your success is our
            mission
          </p>
          <div className="mt-1">
            <div className="mt-3 flex justify-start items-center gap-2.5">
              <AiOutlineCheck className="font-extrabold text-mainColor text-3xl" />
              <p>Connecting Job Seekers</p>
            </div>
            <div className="mt-3 flex justify-start items-center gap-2.5">
              <AiOutlineCheck className="font-extrabold text-mainColor text-3xl" />
              <p>Empowering Employers</p>
            </div>
            <div className="mt-3 flex justify-start items-center gap-2.5">
              <AiOutlineCheck className="font-extrabold text-mainColor text-3xl" />
              <p>Simplified Job Search</p>
            </div>
          </div>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
