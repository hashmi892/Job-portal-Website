import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const handleUserAcc = () => {
    navigate("/ProfileSetting");
  };
  return (
    <>
      <div className="footer relative top-[70px]   text-white">
        <div className="section1 bg-mainColor flex justify-between items-center  border border-t-transparent border-s-transparent border-e-transparent border-b-white p-6 pb-7 max-xsm:flex-col max-xsm:gap-3">
          <p className="max-xsm:text-center">
            Get connected with us on social networks:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-[20px]">
            <FaFacebookF className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaGithubSquare className="cursor-pointer" />
          </div>
        </div>
        <div className="section2 p-6 pb-12 max-md:pb-6 max-xsm:pb-3 grid grid-cols-4 gap-8 max-xsm:gap-1 max-md:grid-rows-4 max-md:grid-cols-1 bg-mediumBlack">
          <div className="childSection1  max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center">
            <div>
              <h1 className="uppercase">About Our Website</h1>
              <hr className="w-[70px] mt-1 mb-3 max-md:m-auto max-md:mt-2 max-md:mb-3" />
            </div>
            <p className="pe-5  tracking-wide">
              We&#39;re here to help you find jobs easily. Our website connects
              job seekers with employers. Simple, efficient, and user-friendly.
              Join us to discover your next career move!
            </p>
          </div>
          <div className="childSection2  max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center">
            <div>
              {" "}
              <h1 className="uppercase">Jobs</h1>
              <hr className="w-[38px] mt-1 mb-3 max-md:m-auto max-md:mt-2 max-md:mb-3" />
            </div>
            <ul className="flex flex-col gap-2">
              <li>Web developer</li>
              <li>App Developer</li>
              <li>Full stack developer</li>
              <li>Backend developer</li>
            </ul>
          </div>
          <div className="childSection3  max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center">
            <div>
              <h1 className="uppercase">Usefull links</h1>
              <hr className="w-[60px] mt-1 mb-3 max-md:m-auto max-md:mt-2 max-md:mb-3" />
            </div>
            <ul className="flex flex-col gap-2">
              <li
                className="cursor-pointer"
                onClick={() => {
                  handleUserAcc();
                }}
              >
                Your Account
              </li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  navigate("/aboutUs");
                }}
              >
                About Us
              </li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  navigate("/contactUs");
                }}
              >
                Contact us
              </li>
              <li className="cursor-pointer">Terms and Condition</li>
            </ul>
          </div>
          <div className="childSection4  max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center">
            <div>
              <h1 className="uppercase">Contact</h1>
              <hr className="w-[60px] mt-1 mb-3 max-md:m-auto max-md:mt-2 max-md:mb-3" />
            </div>
            <ul className="flex flex-col gap-2 max-md:items-center">
              <li className="flex items-center gap-3">
                <IoMdHome />
                Jhelum, Pk
              </li>
              <li className="flex items-center gap-3">
                <MdEmail />
                <a href="mailto:jobPortal@gmail.com">jobPortal@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt />
                0312 5691276
              </li>
            </ul>
          </div>
        </div>
        <div className="section3 bg-[#212121] text-center tracking-wide text-[20px] py-4 max-xsm:text-[14px]">
          <p>&copy; 2024 Copyright All Right Reserved: JobPortal.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
