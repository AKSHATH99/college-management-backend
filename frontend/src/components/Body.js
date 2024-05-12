import React from "react";

const Body = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex  justify-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://e0.pxfuel.com/wallpapers/615/602/desktop-wallpaper-university-of-cambridge-college-campus.jpg)",
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-blur opacity-90"></div>
      {/* <p className="text-white text-6xl z-10 absolute mt-20">LOGIN DASHBOARD</p> */}
      <p className="text-white text-6xl phone:text-3xl z-10 absolute mt-40  font-normal font-bold ">
        WHO IS LOGGING IN ?{" "}
      </p>
      <div className="flex phone:flex-col  justify-around absolute text-4xl z-10 mt-72">
        <div className=" phone:mt-4 border-4 rounded-xl ml-12 bg-white hover:text-blue-600 hover:cursor-pointer hover:font-semibold hover:w-64 transition-all duration-300">
          <img
            className="ml-11 h-36 w-36 p-3 mt-4"
            src="https://cdn-icons-png.flaticon.com/512/5850/5850276.png"
            alt="Student Icon"
          />{" "}
          <div className="p-12">STUDENT </div>
        </div>
        <div className=" phone:mt-4 border-4 rounded-xl ml-12 bg-white hover:text-blue-600 hover:cursor-pointer hover:font-semibold hover:w-64 transition-all duration-300">
          <img
            className="ml-11 h-36 w-36 p-3 mt-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfte6HFt_nZh9c7rVb5VdLLlmGjZ0z7YQaA&usqp=CAU"
            alt="Teacher Icon"
          />{" "}
          <div className="p-12">TEACHER </div>
        </div>
        <div className="phone:mt-4 border-4 rounded-xl shadow-2xl ml-12 bg-white hover:text-blue-600 hover:cursor-pointer hover:font-semibold hover:w-64 transition-all duration-300">
          <img
            className="ml-11 h-36 w-36 p-3 mt-4"
            src="https://cdn-icons-png.flaticon.com/512/2206/2206368.png"
            alt="Admin Icon"
          />{" "}
          <div className="p-12">ADMIN </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
