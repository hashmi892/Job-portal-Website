import LogoWhiteNobg from "../assets/Images/LogoWhiteNobg.png";
import "../Styles/SignUpLogin.css";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/login");
  };
  return (
    <div>
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
          <div className="bg-white max-w-[1000px] m-auto  rounded-3xl mt-8 px-10 py-5">
            <div className="w-[400px] max-ms:w-full">
              <h1 className="text-5xl mt-4 mb-7 text-center font-bold text-mainColor mainHeading">
                Forgot Password
              </h1>
              <form
                method="post"
                action=""
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
                <div className="flex justify-center text-[17px]">
                  <button
                    type="submit"
                    className="btn bg-BtnBg1 hover:bg-mainColor text-white  rounded-lg tracking-wide"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
