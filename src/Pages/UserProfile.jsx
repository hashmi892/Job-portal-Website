import React, { useState } from "react";
import "../Styles/UserProfile.css";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import img from "../assets/Images/dummyPic.png";
import { useNavigate } from "react-router-dom";
const UserProfile = () => {
  const [profileImage, setProfileImage] = useState(img);
  const navigate = useNavigate();
  const handleSettingBnt = () => {
    navigate("/ProfileSetting");
  };
  return (
    <div className=" w-full h-full ">
      <div className="main  max-w-[600px]  mx-auto bg-white   p-5 max-ml:p-3  flex flex-col gap-10 max-ml:gap-2 rounded-lg ">
        <div className="flex justify-center  items-center">
          <div className="flex flex-col gap-2 justify-center items-center">
            <img
              src={profileImage}
              alt="ProfilePic"
              className="w-[80px] h-[80px] rounded-full border border-mainColor
               cursor-pointer"
              onClick={() => handleSettingBnt()}
            />
            <p className="max-ml:text-[14px]">User Name</p>
          </div>
        </div>

        <div className="text-[20px] max-ml:text-[14px] flex flex-col gap-2  cursor-pointer">
          <h1>Privacy</h1>
          <div className="flex items-center gap-2  cursor-pointer">
            <IoSettingsSharp />{" "}
            <h1 onClick={() => handleSettingBnt()}>Setting</h1>
          </div>
          <div className="flex gap-2 items-center  cursor-pointer">
            {" "}
            <FaRegBookmark />
            <h1 className=" cursor-pointer">Saved Jobs</h1>
          </div>
          <h1 className=" cursor-pointer">Terms And Condition</h1>
          <button
            type="button"
            className="bg-mediumLight text-[#FF0D0D] px-3 py-2 rounded-xl border border-[#999]"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
