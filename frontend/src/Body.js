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
      <p className="text-white text-6xl z-10 absolute mt-40  font-normal font-bold ">
        WHO IS LOGGING IN ?{" "}
      </p>
      <div className="flex justify-around absolute  text-4xl z-10 mt-72">
        <div className="border-4 rounded-xl   border-yellow-700 ml-12 bg-white">
          <img
            className=" ml-11  h-36 w-36 p-3 mt-4"
            src="https://cdn-icons-png.flaticon.com/512/5850/5850276.png"
          />{" "}
          <div className="p-12 text-yellow-700">STUDENT{" "}</div>
        </div>
        <div className="border-4 rounded-xl   border-yellow-700 ml-12 bg-white">
          <img
            className=" ml-11  h-36 w-36 p-3 mt-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfte6HFt_nZh9c7rVb5VdLLlmGjZ0z7YQaA&usqp=CAU"
          />{" "}
          <div className="p-12 text-yellow-700">TEACHER{" "}</div>
        </div>
        <div className="border-4 rounded-xl   border-yellow-700 ml-12 bg-white">
          <img
            className=" ml-11  h-36 w-36 p-3 mt-4"
            src="https://cdn-icons-png.flaticon.com/512/2206/2206368.png"
          />{" "}
          <div className="p-12 text-yellow-700">ADMIN{" "}</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
