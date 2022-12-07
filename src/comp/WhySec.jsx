import React from "react";
import first from "../assets/images/icon-online.svg";
import second from "../assets/images/icon-budgeting.svg";
import third from "../assets/images/icon-api.svg";
import fourth from "../assets/images/icon-onboarding.svg";

export default function WhySec() {
  return (
    <div
      className="mt-40 lg:mt-96 lg:grid lg:grid-rows-1 lg:grid-cols-4 flex justify-center flex-col
    gap-y-6 mb-40 lg:mx-40"
    >
      <div className="col-span-4 flex gap-5 flex-col lg:mb-9">
        <h1 className=" text-center lg:text-4xl opacity-80 lg:text-left text-4xl w-2/3 mx-auto lg:mx-0">
          Why choose Easybank?
        </h1>
        <p className="opacity-60 text-center w-11/12 mx-auto lg:mx-0 lg:text-left lg:w-1/3 ">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="flex gap-5 flex-col">
        <img src={first} alt="" className="w-16 mx-auto lg:mx-0" />
        <h1 className="text-center text-4xl w-2/3 mx-auto lg:text-left lg:mx-0 opacity-80">
          Online Banking
        </h1>
        <p className="opacity-60 text-center w-11/12 mx-auto  lg:text-left lg:mx-0">
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world
        </p>
      </div>

      <div className="flex gap-5 flex-col">
        <img src={second} alt="" className="w-16 mx-auto lg:mx-0" />
        <h1 className="opacity-80 text-center text-4xl w-2/3 mx-auto lg:text-left lg:mx-0">
          Simple Budgeting
        </h1>
        <p className="opacity-60 text-center w-11/12 mx-auto  lg:text-left lg:mx-0">
          See exactly where your money goes each month. Receive notifications
          when you're close to your hitting limits.{" "}
        </p>
      </div>
      <div className="flex gap-5 flex-col">
        <img src={fourth} alt="" className="w-16 mx-auto lg:mx-0" />
        <h1 className="opacity-80 text-center text-4xl w-2/3 mx-auto lg:text-left lg:mx-0">
          Fast Onboarding
        </h1>
        <p className="opacity-60 text-center w-11/12 mx-auto  lg:text-left lg:mx-0">
          See exactky where your money goes each month.Receive notifications
          when you're close to your hitting limits.
        </p>
      </div>
      <div className="flex gap-5 flex-col">
        <img src={third} alt="" className="w-16 mx-auto lg:mx-0" />
        <h1 className="opacity-80 text-center text-4xl w-2/3 mx-auto lg:text-left lg:mx-0 lg:h-20">
          Open Api
        </h1>
        <p className="opacity-60 text-center w-11/12 mx-auto lg:text-left lg:mx-0 ">
          Manage your savings, investments, pension, and much more from one
          account. Tracking your money has never been easier.
        </p>
      </div>
    </div>
  );
}
