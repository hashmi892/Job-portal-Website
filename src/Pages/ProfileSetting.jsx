import React from "react";
import "../Styles/UserProfile.css";
import { FiEdit } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
const ProfileSetting = () => {
  return (
    <div>
      <div className="parent  w-full h-screen bg-lightgray ">
        <div className="main relative top-[70px] max-w-[600px] my-10 mx-auto bg-white   p-7  flex flex-col gap-10 rounded-lg">
          <div className="profile">
            <div className="flex justify-center flex-col items-center gap-2">
              <FaCircleUser className="text-[140px]  text-lightgray rounded-full border-lightgray border-[2px]" />
              <h1>User Name</h1>
              <p>Add breife description about Yourself</p>
            </div>
          </div>
          <div className="BasicSetting  flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <label htmlFor="UserName" className="w-20">
                Username
              </label>
              <div className="flex items-center gap-1 border bg-lightgray rounded-lg px-2 py-1">
                <input
                  type="text"
                  name="username"
                  id="UserName"
                  className="bg-transparent p-1 focus:border-none focus:outline-none"
                />{" "}
                <FiEdit />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="email" className="w-20">
                Email{" "}
              </label>
              <div className="flex items-center gap-1 border bg-lightgray rounded-lg px-2 py-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-transparent p-1 focus:border-none focus:outline-none"
                />{" "}
                <FiEdit />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="pwd" className="w-20">
                Password
              </label>
              <div className="flex items-center gap-1 border bg-lightgray rounded-lg px-2 py-1">
                <input
                  type="password"
                  name="pwd"
                  id="pwd"
                  className="bg-transparent p-1 focus:border-none focus:outline-none"
                />{" "}
                <FiEdit />
              </div>
            </div>
          </div>
          <div className="ProfileBtn flex gap-3 tracking-wide justify-between">
            <button
              type="button"
              className="bg-mainColor text-white px-3 py-2 rounded-xl"
            >
              Upload Resume
            </button>
            <button
              type="button"
              className="bg-mediumLight text-[#FF0D0D] px-3 py-2 rounded-xl"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
