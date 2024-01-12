import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiSolidLockAlt } from "react-icons/bi";
import "../Styles/LoginSignUp.css";

const LoginSignUp = () => {
  // State to manage the action (Login or Sign Up)
  const [action, setAction] = useState("Login");

  return (
    <div className="bg-halfWhite w-full h-screen relative">
      {/* Container for the form */}
      <div className="sm:min-w-[500px] max-sm:w-[90%] max-[340px]:w-[96%]  box-center rounded-xl p-4 min-h-[450px] bg-white">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-2">
          {/* Header text and underline */}
          <div className="text-center font-montserrat text-4xl font-bold text-mainColor">
            {action}
          </div>
          <div className="w-14 h-1 rounded-full bg-mainColor"></div>
        </div>
        {/* Input Fields Section */}
        <div className="mt-5 mb-3 flex flex-col gap-3">
          {action === "Login" ? (
            // Conditional rendering for Name input in Sign Up
            <div></div>
          ) : (
            // Name input with icon in Sign Up
            <div className="inputCss">
              <BsFillPersonFill className="text-slate-gray mt-1" />
              <input
                type="text"
                name="uname"
                className="bg-transparent w-full h-full py-3 border-none  outline-none focus:border-none focus:outline-none "
                placeholder="Name"
              />
            </div>
          )}

          {/* Email input */}
          <div className="inputCss">
            <MdEmail className="text-slate-gray mt-1" />
            <input
              type="email"
              name="email"
              className="bg-transparent w-full h-full py-3 focus:border-none focus:outline-none "
              placeholder="Email"
            />
          </div>
          {/* Password input */}
          <div className="inputCss">
            <BiSolidLockAlt className="text-slate-gray mt-1" />
            <input
              type="password"
              name="pwd"
              className="bg-transparent w-full h-full py-3 focus:border-none focus:outline-none "
              placeholder="Password"
            />
          </div>
        </div>
        {action === "Sign Up" ? (
          // Conditional rendering for "Forgot password?" in Login
          <div></div>
        ) : (
          // "Forgot password?" with link in Sign Up
          <div className="text-slate-gray flex items-center max-Xs:flex-col max-Xs:items-start gap-2 font-montserrat cursor-pointer">
            Forgot password?
            <h6 className="text-mainColor text-[17px] font-semibold cursor-pointer">
              Click Here!
            </h6>
          </div>
        )}

        {/* Buttons Section */}
        <div className="flex max-Xs:flex-col gap-3 mt-6 items-center">
          <div
            // Toggle action to "Sign Up" when clicked
            className={action === "Login" ? "grayBgBtn" : "purpleBgBtn"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            // Toggle action to "Login" when clicked
            className={action === "Sign Up" ? "grayBgBtn" : "purpleBgBtn"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
