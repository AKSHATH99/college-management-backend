import React from "react";

const Header = () => {
  return (
    <div className=" p-3 flex bg-black text-white">
      <div className="text-4xl phone:text-xl  p-6 font-bold font-mono">COLLEGE OF ENGINEERING - CMS </div>
      {/* <div className="  p-4 my-2  w-96 text-2xl ml-44 flex justify-center items-center  rounded-xl bg-gray-100 text-white shadow-xl"style={{ backgroundColor: "#925FE2" }}>
        <p className="mx-8 font-bold text-3xl " > Login Dashboard</p>
      </div> */ }

      <img className="ml-[500px] phone:ml-2 mt-3 rounded-full w-20 h-20 shadow-2xl" src="https://i.pinimg.com/originals/07/66/d1/0766d183119ff92920403eb7ae566a85.png"/>
    </div>
  );
};

export default Header;
