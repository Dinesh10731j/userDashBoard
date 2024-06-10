import React, { useState } from "react";
import User from "../assets/user.png";
import { Navdata } from "../Navdata/data";


const Sidebar = () => {
  return (
    <aside className="h-screen fixed top-0 left-0 w-[230px] bg-[#2C2D2D] py-3">
      <nav className="flex flex-col">
        <section className="flex items-center justify-center mb-6">
          <img src={User} alt="user" className="w-16 h-16 rounded-full" />
          <div className="ml-3">
            <h1 className="text-white font-medium text-lg">Ashim Kafle</h1>
            <h4 className="text-white">UI/UX Designer</h4>
          </div>
        </section>
        <ul className="font-medium flex flex-col gap-3 px-3">
          {Navdata.map((item, index) => (
            <li
              key={index}
              className={`flex items-center gap-3 p-2 text-white transition-all delay-150`}
              
            >
              <img src={item.icon} alt={item.text} className="w-6 h-7" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
