import React from "react";
import first from "../assets/images/image-currency.jpg";
import second from "../assets/images/image-restaurant.jpg";
import third from "../assets/images/image-plane.jpg";
import fourth from "../assets/images/image-confetti.jpg";

export default function Latest() {
  const value = [
    {
      img: first,
      by: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      decr: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only reciev money in a single...",
    },
    {
      img: second,
      by: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      decr: "Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. That means you...",
    },
    {
      img: third,
      by: "Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      decr: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad.We'll even show you...",
    },
    {
      img: fourth,
      by: "Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      decr: "After a lot of hard work by the whole team, we're excited to launch our closed beta.it's easy to request an invite through the site...",
    },
  ];
  return (
    <>
      <h1 className="text-3xl mx-auto mb-5 text-center lg:text-left lg:ml-40">
        Latest Articles
      </h1>
      <div className="h-full flex flex-col lg:flex-row lg:mx-40 lg:gap-5 lg:mb-20">
        {value.map((el, ind) => (
          <div
            className={
              ind === value.length - 1
                ? "w-10/12 rounded-lg mx-auto bg-white overflow-hidden my-3 mb-20 lg:mb-3"
                : "w-10/12 rounded-lg mx-auto bg-white overflow-hidden my-3 "
            }
            key={ind}
          >
            <img src={el.img} alt="" className="h-48 w-full" />
            <div className="h-48 px-7 pt-4">
              <span className="opacity-50 text-left text-xs">
                {"By " + el.by}
              </span>
              <h1 className="lg:hover:text-green-500 cursor-pointer font-meduim text-base text-left">
                {el.title}
              </h1>

              <p className="opacity-60 text-left text-xs my-1 ">{el.decr}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
