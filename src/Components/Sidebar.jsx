import React from "react";
import User from "../assets/user.png";
import dashboardIcon from "../assets/image 2.png";
import EmployessIcon from "../assets/image 3.png";
import EngagementRateIcon from "../assets/image 4.png";
import TaskIcon from "../assets/image 6.png"

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
          <ul className="font-poppins font-medium text-white text-center px-2 py-3 flex flex-col gap-2 ">
          <section className="flex flex-row gap-3  justify-center">
            <section  className="h-[34px] w-[34px]">
                <img src={dashboardIcon} alt="icon"/>
            </section>
            <section>
                <li>Dashboard</li>
            </section>
          </section>
          <section className="flex flex-row gap-3 items-center justify-center">
            <section  className="h-[34px] w-[34px]">
                <img src={EmployessIcon} alt="icon"/>
            </section>
            <section>
                <li>Employees</li>
            </section>
          </section>
          <section className="flex flex-row gap-3  justify-center">
            <section className="h-[34px] w-[34px]">
                <img src={EngagementRateIcon} alt="icon"/>
            </section>
            <section>
                <li>Engagement Rate </li>
            </section>
          </section>
          <section className="flex flex-row gap-3  justify-center">
            <section className="h-[34px] w-[34px]">
                <img src={TaskIcon} alt="icon"/>
            </section>
            <section>
            <li>Task</li>
            </section>
          </section>
          
         </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
