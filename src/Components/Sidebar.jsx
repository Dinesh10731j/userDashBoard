import React from "react";
import User from "../assets/user.png";

const Sidebar = () => {
  return (
    <>
      <aside className="h-[100vh] fixed top-0 left-0 w-[230px] bg-[#2C2D2D] py-3">
        <nav>
          <section className="flex justify-center items-center gap-3">
            <section>
              <img src={User} alt="user" />
            </section>
            <section>
                <h1 className="text-white font-poppins font-medium text-xl">Ashim Kafle</h1>
                <h4 className="text-white font-poppins ">UI/UX Designer</h4>
            </section>
          </section>
          <ul className="font-poppins font-medium text-white text-center px-2 py-3 ">
          
          
          <li className=" px-3 py-2 ml-3 text-[#B070D0]">
              Dashboard
              </li>
       
          
            <li className=" px-3 py-2 ml-3">
             Employees
            </li>
            <li className=" px-3 py-2 ml-3">
              Engagement Rate
            </li>
            <li className=" px-3 py-2 ml-3">Tasks</li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
