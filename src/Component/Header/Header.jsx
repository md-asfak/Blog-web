import React from "react";
import Image from "../../Images/Favicon.png";

function Header() {
  return (
    <>
      <header className="bg-[#292f33] min-h-[95px] flex flex-row items-center gap-3 justify-evenly ">
        <div className="flex flex-row items-center">
          <img src={Image} alt="Images" className="w-[50px]" />
          <h3 className="text-white text-2xl font-bold">Your News</h3>
        </div>
        <nav className="text-[#727679] flex flex-wrap gap-4 text-[18px]">
          <a href="" className="text-white">
            Home
          </a>
          <a href="/general">General</a>
          <a href="/business">Business</a>
          <a href="/sport">Sports</a>
          <a href="/science">Science</a>
          <a href="/Health">Health</a>
          <a href="/entertaiment">Entertaiment</a>
          <a href="/Technology">Technology</a>
        </nav>

        <div>
          <input
            type="text"
            placeholder="Explore News..."
            className="w-[230px] h-[42px]  rounded-l-xl pl-4 bg-[#31383e] text-[#ffffff] outline-none"
          />
          <button className="bg-[#0e4b8b] text-white w-[90px] h-[42px] rounded-e-xl text-[18px] font-bold">
            Search
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
