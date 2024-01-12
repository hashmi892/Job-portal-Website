import React from "react";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "../Styles/Contact.css";
const ContactUs = () => {
  return (
    <div className="relative top-[70px] bg-pale-blue w-full h-[100%] p-7">
      <div className="bg-white max-container m-auto p-5 rounded-3xl">
        <h1 className="text-center text-3xl capitalize font-palanquin font-bold text-mainColor mb-7">
          Contact for any query
        </h1>
        <div className="flex justify-between items-center max-ms:flex-col max-ms:gap-3  ">
          <div className="flex gap-3 justify-between items-center bg-pale-blue px-8 py-3 max-ms:w-full">
            <div className="bg-white p-2 rounded-md text-mainColor">
              <MdLocationOn />
            </div>
            <div>
              <h3>Jhelum, Punjab, Pak</h3>
            </div>
          </div>
          <div className="flex gap-3 justify-between items-center bg-pale-blue px-8 py-3 max-ms:w-full">
            <div className="bg-white p-2 rounded-md text-mainColor">
              <MdEmail />
            </div>
            <div>
              <h3>jobPortal@gmail.com</h3>
            </div>
          </div>
          <div className="flex gap-3 justify-between items-center bg-pale-blue px-8 py-3 max-ms:w-full">
            <div className="bg-white p-2 rounded-md text-mainColor">
              <FaPhoneAlt />
            </div>
            <div>
              <h3>+923135694970</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-20 max-ml:flex-col max-ml:gap-6 mt-10">
          <div className="max-w-[500px] max-ml:max-w-[100%] w-full border border-slate-gray rounded-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.0167271702535!2d73.6620362111796!3d33.00333447345966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f92719bb688d7%3A0x6b4aa1c71f282a38!2sUniversity%20of%20the%20Punjab%2C%20Jhelum%20Campus!5e0!3m2!1sen!2s!4v1704749023120!5m2!1sen!2s"
              height="520"
              style={{ border: "0", width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="max-ml:max-w-[100%]">
            <p className="text-[20px]">Drop us a message; we're here to help you navigate your career path smoothly.</p>
            <div className="mt-6 contact-form"> 
              <form action="" method="post">
                <div className="flex justify-between gap-3 max-ml:flex-col">
                  <input type="text" name="uname" placeholder="Your name"  />
                  <input type="email" name="email" placeholder="Your email" />
                </div>
                <div className="subject mt-4"> <input type="text" name="subject" placeholder="subject"/></div>
                <textarea name="message"  cols="70" rows="10" placeholder="message" className="mt-4 border focus:outline-none p-2"></textarea> 
                <div><input type="submit" value="Send Message" className="w-full text-center bg-mainColor text-white py-3 my-3"/></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
