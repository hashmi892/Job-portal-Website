import "../Styles/UserProfile.css";
import { FiEdit } from "react-icons/fi";
import profilePic from "../assets/Images/dummyPic.png";
import "../Styles/ProfileSetting.css";
const ProfileSetting = () => {
  return (
    <div className="">
      <div className="parent relative top-[70px] w-full min-h-full">
        <div className="main  max-w-[600px] my-10 mx-auto  gradient  p-7  flex flex-col gap-10 rounded-lg text-white">
          <div className="profile">
            <div className="flex justify-center flex-col items-center gap-2">
              <img
                src={profilePic}
                alt="ProfilePic"
                className="w-[110px] h-[110px] max-xsm:w-[80px] max-xsm:h-[80px]  rounded-full border border-mainColor
               cursor-pointer"
              />
              <h1>User Name</h1>
              <input
                type="text"
                className="w-[80%] max-xsm:text-[15px] text-center  border-t-none border-s-none border-e-none  focus:border-t-none focus:border-s-none focus:border-e-none focus:border-b-[1px] focus:outline-none py-1.5  bg-transparent text-white"
                placeholder="Briefly describe yourself (max 50 characters)"
                maxLength="50"
              />
            </div>
          </div>
          <div className="BasicSetting  flex flex-col gap-2">
            <div className="flex items-center gap-1 max-xsm:flex-col">
              <label htmlFor="UserName" className="w-20">
                Username
              </label>
              <div className="flex items-center gap-1 border bg-white rounded-lg px-2 py-1 w-[60%] max-xms:w-[80%] max-xsm:w-full">
                <input
                  type="text"
                  name="username"
                  id="UserName"
                  className="bg-transparent p-1 focus:border-none focus:outline-none w-full text-mainColor"
                />{" "}
                <FiEdit className="edit-btn" />
              </div>
            </div>
            <div className="flex items-center gap-1 max-xsm:flex-col">
              <label htmlFor="email" className="w-20">
                Email{" "}
              </label>
              <div className="flex items-center gap-1 border bg-white rounded-lg px-2 py-1 w-[60%] max-xms:w-[80%] max-xsm:w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-transparent p-1 focus:border-none focus:outline-none w-full text-mainColor"
                />{" "}
                <FiEdit className="edit-btn" />
              </div>
            </div>
            <div className="flex items-center gap-1 max-xsm:flex-col ">
              <label htmlFor="pwd" className="w-20">
                Password
              </label>
              <div className="flex items-center gap-1 border bg-white rounded-lg px-2 py-1 w-[60%] max-xms:w-[80%] max-xsm:w-full">
                <input
                  type="password"
                  name="pwd"
                  id="pwd"
                  className="bg-transparent p-1 focus:border-none focus:outline-none w-full text-mainColor"
                />{" "}
                <FiEdit className="edit-btn" />
              </div>
            </div>
          </div>
          <div className="ProfileBtn  tracking-wide  max-xsm:flex-col">
            {/* <button
              type="button"
              className="bg-mainColor text-white px-3 py-2 rounded-xl"
            >
              Upload Resume
            </button> */}
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
