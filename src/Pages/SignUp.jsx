import React from "react";
import SignUpImg from "../assets/Images/SignUpImg.gif";
import "../Styles/SignUpLogin.css";
import LogoWhiteNobg from "../assets/Images/LogoWhiteNobg.png";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const loginIn = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <>
      <div className="bg-pale-blue w-full min-h-screen parent-div p-3  ">
        <div className=" flex flex-col justify-center items-center gap-3 ">
          <div className="logo">
            <NavLink to="/">
              <img
                src={LogoWhiteNobg}
                alt="logo"
                className="w-[300px] h-[90px] object-cover max-Xs:w-[220px] max-lg:w-[260px]
                fancySpan fancySpan bg-mainColor
                "
              />
            </NavLink>
          </div>
          <div className="bg-white max-w-[1000px] h-full m-auto  rounded-3xl flex justify-around items-center gap-3 p-7 child-div max-ms:flex-col  max-ms:gap-7">
            <div className="w-[400px] max-ms:w-full self-start">
              <h1 className="text-5xl mt-3 mb-5 text-center font-bold text-mainColor mainHeading">
                Sign up
              </h1>
              <form method="post" className="signUpForm flex flex-col gap-7">
                <div className="inputFieldwrap">
                  <IoMdPerson className="text-[13px]" />
                  <input type="text" name="fullname" placeholder="Full Name" />
                </div>
                <div className="inputFieldwrap">
                  <IoMdPerson className="text-[13px]" />
                  <input type="text" name="username" placeholder="Username" />
                </div>

                <div className="inputFieldwrap">
                  <MdEmail className="text-[13px]" />
                  <input type="email" name="email" placeholder="E-mail" />
                </div>

                <div className="inputFieldwrap">
                  <FaLock className="text-[13px]" />
                  <input
                    type="password"
                    name="password"
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
                    onClick={loginIn}
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
      </div>
    </>
  );
};

export default SignUp;
