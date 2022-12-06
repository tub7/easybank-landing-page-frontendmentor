import React from "react";
import second from "../assets/images/logo2.svg";
import face from "../assets/images/icon-facebook.svg";
import yt from "../assets/images/icon-youtube.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pin from "../assets/images/icon-pinterest.svg";
import insta from "../assets/images/icon-instagram.svg";

export default function Footer() {
  return (
    <div className="bg-[#2d314e]  flex flex-col lg:flex-row lg:px-40 lg:justify-between lg:py-10 ">
      <div className="flex flex-col  ">
        <img src={second} alt="" className="mx-auto h-5 mt-10 lg:h-6" />
        <div className="flex gap-x-4 mx-auto my-8">
          <img src={face} alt="" />
          <img src={yt} alt="" />
          <img src={twitter} alt="" />
          <img src={pin} alt="" />
          <img src={insta} alt="" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-8 lg:w-5/12 lg:text-lg opacity-80 ">
        <div className="flex flex-col lg:my-auto ">
          <p className="text-white mx-auto lg:mx-0 my-1">About Us</p>
          <p className="text-white mx-auto lg:mx-0 my-1">Contact</p>
          <p className="text-white mx-auto lg:mx-0 my-1">Blog</p>
        </div>
        <div className="flex flex-col lg:my-auto">
          <p className="text-white mx-auto lg:mx-0 my-1">Careers</p>
          <p className="text-white mx-auto lg:mx-0 my-1">Support</p>
          <p className="text-white mx-auto lg:mx-0 my-1">Privacy Policy</p>
        </div>
      </div>
      <div className="flex flex-col">
        <button className="text-white text-lg bg-gradient-to-r from-green-500 to-blue-500 lg:w-11/12 w-1/2 mx-auto px-6 py-3 rounded-3xl mt-8 mb-4">
          Request Invite
        </button>
        <p className="opacity-40 text-white mx-auto my-1">
          © Easybank. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
