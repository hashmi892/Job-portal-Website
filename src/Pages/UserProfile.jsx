import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import "../Styles/UserProfile.css";
import { IoSettingsSharp } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
const UserProfile = () => {
  return (
    <div className=" w-full h-screen bg-lightgray ">
      <div className="main relative top-[70px] max-w-[600px] my-10 mx-auto bg-white   p-7  flex flex-col gap-10 rounded-lg ">
        <div className="flex justify-center">
          <FaCircleUser className="text-[140px]  text-lightgray rounded-full border-lightgray border-[2px]" />
        </div>
        <div className="text-[20px] flex flex-col gap-2 ">
          <h1>Privacy</h1>
          <div className="flex items-center gap-2">
            <IoSettingsSharp /> <h1>Setting</h1>
          </div>
          <div className="flex gap-2 items-center">
            <IoSunnyOutline />
            {/*  <IoMoonOutline /> */}
            <h1>Switch Apperance</h1>
          </div>
          <div className="flex gap-2 items-center">
            {" "}
            <FaRegBookmark />
            <h1>Saved Jobs</h1>
          </div>
          <h1>Terms And Condition</h1>
          <button
            type="button"
            className="bg-mediumLight text-[#FF0D0D] px-3 py-2 rounded-xl"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
