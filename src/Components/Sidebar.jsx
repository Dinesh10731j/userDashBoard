import React from "react";
import User from "../assets/user.png";

const Sidebar = () => {
  return (
    <>
      <aside className="h-[100vh] fixed top-0 left-0 w-[230px] bg-[#2C2D2D] py-3">
        <nav>
          <section className="flex justify-center items-center">
            <section>
              <img src={User} alt="user" />
            </section>
          </section>
          <ul className="font-poppins font-medium text-white text-center px-2 py-3 ">
          
          
          <li className="hover:bg-cyan-100 px-3 py-4 ml-3 text-[#B070D0]">
              Dashboard
              </li>
       
          
            <li className="hover:bg-cyan-100 px-3 py-4 ml-3">
             Employees
            </li>
            <li className="hover:bg-cyan-100 px-3 py-4 ml-3">
              Engagement Rate
            </li>
            <li className="hover:bg-cyan-100 px-3 py-4 ml-3">Tasks</li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
