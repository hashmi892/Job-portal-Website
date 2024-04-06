import React from "react";
import LoginImg from "../assets/Images/LoginImg.gif";
import LogoWhiteNobg from "../assets/Images/LogoWhiteNobg.png";
import "../Styles/SignUpLogin.css";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const signUp = (e) => {
    e.preventDefault();
    navigate("/signUp");
  };
  return (
    <>
      <div className="bg-pale-blue w-full min-h-screen parent-div p-3 ">
        <div className=" flex flex-col justify-center items-center gap-3">
          <div className="logo">
            <NavLink to="/">
              <img
                src={LogoWhiteNobg}
                alt="logo"
                className="w-[300px] h-[90px] object-cover max-Xs:w-[220px] max-lg:w-[260px]
                fancySpan fancySpan bg-mainColor "
              />
            </NavLink>
          </div>
          <div className="bg-white max-w-[1000px] m-auto  rounded-3xl flex justify-around items-center gap-4 p-7 child-div max-ms:flex-col-reverse max-ms:gap-7">
            <div className="max-w-[300px]">
              <img src={LoginImg} alt="Login" className="w-full" />
            </div>
            <div className="w-[400px] max-ms:w-full">
              <h1 className="text-5xl my-8 text-center font-bold text-mainColor mainHeading">
                Login
              </h1>
              <form
                method="post"
                className="signUpForm flex flex-col gap-7 max-ms:self-start"
              >
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
                <div className="flex justify-between max-xssm:flex-col max-xssm:gap-2">
                  <div className="flex items-center gap-2">
                    <div>
                      {" "}
                      <input
                        type="checkbox"
                        name="rememberMe"
                        id="rememberMe"
                      />
                    </div>
                    <div>
                      <label for="rememberMe">Remember Me</label>
                    </div>
                  </div>
                  <div>
                    <a href="#" className="text-mainColor">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="flex gap-5 max-xsm:flex-col">
                  <button
                    type="submit"
                    className="btn bg-BtnBg1 hover:bg-mainColor text-white  rounded-lg tracking-wide"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={signUp}
                    className="btn bg-BtnBg1 hover:bg-mainColor text-white  rounded-lg tracking-wide"
                  >
                    SignUp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
