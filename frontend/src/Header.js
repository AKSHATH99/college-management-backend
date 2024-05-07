import React from "react";

const Header = () => {
  return (
    <div className="bg-black text-white p-3 flex">
      <div className="text-4xl p-6 font-mono">COLLEGE OF ENGINEERING</div>
      <div className="flex justify-around p-7 my-2 text-2xl ml-44 border border-yellow-700 rounded-2xl bg-gray-100 text-yellow-700">
        <p className="ml-2">HOME </p>
        <p className="ml-14">ABOUT</p>
        <p className="ml-14">COURSES </p>
        <p className="ml-14 mr-10 ">CONTACTS </p>
      </div>

      <img className="ml-96 mt-3 rounded-full w-20 h-20" src="https://i.pinimg.com/originals/07/66/d1/0766d183119ff92920403eb7ae566a85.png"/>
    </div>
  );
};

export default Header;
