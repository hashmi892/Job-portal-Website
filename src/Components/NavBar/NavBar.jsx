import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsX } from "react-icons/bs";
import LogoWhiteNobg from "../../assets/Images/LogoWhiteNobg.png";
import { MenuList, registerInfo } from "./MenuList";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import img from "../../assets/Images/dummyPic.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const navigate = useNavigate();

  const menuList = MenuList.map(({ title, url }) => (
    <li key={title}>
      <NavLink
        to={url}
        className="font-montserrat hover:text-white-400 ease-in-out transition-all"
        data-aos="fade-down"
      >
        {title}
      </NavLink>
    </li>
  ));

  const registerBtnList = registerInfo.map(({ title, url }) => (
    <li key={title}>
      <NavLink
        to={url}
        className="font-montserrat hover:text-white-400 ease-in-out transition-all"
        data-aos="fade-down"
      >
        {title}
      </NavLink>
    </li>
  ));

  const handleClick = () => {
    setMenuIcon(!menuIcon);
  };
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProfilePic = () => {
    navigate("/userdashboard");
  };
  //  JS AOS library
  useEffect(() => {
    AOS.init({ delay: 2000, duration: 2000 });
  }, []);
  return (
    <div className="bg-mainColor w-full text-white max-xl:padding-x fixed z-[100] top-0 py-1 shadowBox">
      <nav className="flex justify-between items-center max-container">
        <div className="logo">
          <NavLink to="" onClick={handleLogoClick}>
            <img
              src={LogoWhiteNobg}
              alt="logo"
              className="w-[200px] h-[70px] object-cover max-Xs:w-[150px] max-lg:w-[160px]"
            />
          </NavLink>
        </div>
        <div onClick={handleClick} className="cursor-pointer ">
          {menuIcon ? (
            <BsX className="ml:hidden text-5xl max-Xs:text-4xl " />
          ) : (
            <AiOutlineMenu className="ml:hidden text-3xl max-Xs:text-2xl" />
          )}
        </div>
        <div
          className={
            menuIcon ? "menuList menuIconStyle" : "menuList menuIconStyle close"
          }
        >
          <ul className="flex items-center justify-between gap-7 max-ml:flex-col tracking-wider font-medium text-xl">
            {menuList}
          </ul>
          <div className="">
            <ul className="tracking-wider font-medium text-xl flex gap-3 max-ml:flex-col  max-ml:items-center">
              {registerBtnList}
            </ul>
          </div>
          <div
            onClick={() => {
              handleProfilePic();
            }}
            className="cursor-pointer "
          >
            <img
              src={img}
              alt="ProfilePic"
              className="w-[45px] h-[45px] rounded-full"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
