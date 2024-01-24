import React from "react";
import SignUpImg from "../assets/Images/SignUpImg.gif";
import "../Styles/SignUpLogin.css";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
const SignUp = () => {
  return (
    <>
      <div className="bg-pale-blue w-full min-h-full parent-div  relative top-[70px] p-12 ">
        <div className="bg-white max-w-[1000px] h-full m-auto  rounded-3xl flex justify-around items-center p-7 child-div max-ms:flex-col  max-ms:gap-7">
          <div className="w-[400px] max-ms:w-full self-start">
            <h1 className="text-5xl my-8 text-center font-bold text-mainColor mainHeading">
              Sign up
            </h1>
            <form
              action=""
              method="post"
              className="signUpForm flex flex-col gap-7"
            >
              <div className="inputFieldwrap">
                <IoMdPerson className="text-[13px]" />
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="First Name"
                />
              </div>
              <div className="inputFieldwrap">
                <IoMdPerson className="text-[13px]" />
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="Last Name"
                />
              </div>

              <div className="inputFieldwrap">
                <MdEmail className="text-[13px]" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>

              <div className="inputFieldwrap">
                <FaLock className="text-[13px]" />
                <input
                  type="password"
                  name="pwd"
                  id="pwd"
                  placeholder="Password"
                />
              </div>

              <div className="flex gap-5 max-xsm:flex-col ">
                <button
                  type="submit"
                  className="btn bg-BtnBg1 text-white  rounded-lg tracking-wide hover:bg-mainColor "
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  className="btn bg-BtnBg1 text-white  rounded-lg tracking-wide hover:bg-mainColor "
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="max-w-[300px]">
            <img src={SignUpImg} alt="SignUp" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
