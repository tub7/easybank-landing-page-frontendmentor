import React from "react";
import logo from "../assets/images/logo.svg";
import ham from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";

export default function Nav({ active, setActive }) {
  const links = ["home", "about", "Contact", "Blog", "Careers"];
  return (
    <div className="relative z-20 bg-white flex flex-row justify-between lg:px-40">
      <img src={logo} className="p-7 lg:px-0" />
      <img
        src={active ? close : ham}
        className="p-7 lg:hidden "
        onClick={() => {
          setActive((p) => !p);
        }}
      />
      <div className="hidden lg:flex justify-center items-center w-2/5  ">
        {links.map((el, ind) => {
          return (
            <p
              className="p-2 text-lg relative
          py-5 opacity-80 cursor-pointer  
         after:content-[''] after:bg-green-500 after:h-1 after:absolute after:top-16 after:left-0 hover:after:right-0 after:transition-all after:duration-1000 "
              key={ind}
            >
              {el}
            </p>
          );
        })}
      </div>
      <button
        className="hidden lg:block text-white text-base bg-gradient-to-r hover:from-green-300 hover:to-blue-300 from-green-500 to-blue-500 h-12 px-8 my-auto
        rounded-3xl "
      >
        Request Invite
      </button>
    </div>
  );
}
