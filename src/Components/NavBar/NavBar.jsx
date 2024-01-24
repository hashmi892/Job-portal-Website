import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsX } from "react-icons/bs"; // Import the correct 'X' icon
import LogoWhiteNobg from "../../assets/Images/LogoWhiteNobg.png";
import { MenuList, registerInfo } from "./MenuList";
import "./NavBar.css";

const NavBar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const menuList = MenuList.map(({ title, url }) => (
    <li key={title}>
      <a
        href={url}
        className="font-montserrat hover:text-white-400 ease-in-out transition-all"
      >
        {title}
      </a>
    </li>
  ));

  const registerBtnList = registerInfo.map(({ title, url }) => (
    <li key={title}>
      <a
        href={url}
        className="font-montserrat hover:text-white-400 ease-in-out transition-all"
      >
        {title}
      </a>
    </li>
  ));

  const handleClick = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <div className="bg-mainColor w-full text-white max-xl:padding-x fixed z-50 top-0 ">
      <nav className="flex justify-between items-center max-container ">
        <div className="logo">
          <a href="#">
            <img
              src={LogoWhiteNobg}
              alt="logo"
              className="w-[200px] h-[70px] object-cover max-Xs:w-[150px] max-lg:w-[160px]"
            />
          </a>
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {/* Corrected the icons */}
          {menuIcon ? (
            <BsX className="ml:hidden text-5xl max-Xs:text-4xl " />
          ) : (
            <AiOutlineMenu className="ml:hidden text-3xl max-Xs:text-2xl" />
          )}
        </div>
        <div
          className={
            menuIcon
              ? "flex items-center gap-14 max-lg:text-[15px] max-ml:flex-col max-ml:items-center max-ml:justify-center max-ml:absolute max-ml:right-0 max-ml:top-[70px] max-ml:w-full  max-ml:pb-20 max-ml:gap-5 menuList"
              : "flex items-center gap-14 max-lg:text-[15px] max-ml:flex-col max-ml:items-center max-ml:justify-center max-ml:absolute max-ml:right-0 max-ml:top-[70px] max-ml:w-full  max-ml:pb-20 max-ml:gap-5 menuList close"
          }
        >
          <ul className="flex items-center justify-between gap-7 max-ml:flex-col tracking-wider font-medium text-xl ">
            {menuList}
          </ul>
          <div className="">
            <ul className="tracking-wider font-medium text-xl flex gap-3 max-ml:flex-col  max-ml:items-center">
              {registerBtnList}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
