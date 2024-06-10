import React, { useState } from "react";
import User from "../assets/user.png";
import { Navdata } from "../Navdata/data";

const Sidebar = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleSubMenu = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <aside className="h-screen fixed top-0 left-0 w-[230px] bg-[#2C2D2D] py-3">
      <nav className="flex flex-col">
        <section className="flex items-center justify-center mb-6">
          <img src={User} alt="user" className="w-16 h-16 rounded-full" />
          <div className="ml-3">
            <h1 className="text-white font-medium text-lg font-poppins">Ashim Kafle</h1>
            <h4 className="text-white font-poppins">UI/UX Designer</h4>
          </div>
        </section>
        <ul className="font-medium flex flex-col gap-3 px-3">
          {Navdata.map((item, index) => (
            <li key={index} className="flex flex-col">
              <div
                className={`flex items-center gap-3 p-2 text-white transition-all delay-150 hover:bg-[#9B9B9B]`}
                onClick={() => item.subItems && toggleSubMenu(index)}
              >
                <img src={item.icon} alt={item.text} className="w-6 h-7" />
                <span>{item.text}</span>
                
              </div>
              {item.subItems && openIndices.includes(index) && (
                <ul className="ml-8 mt-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="flex items-center gap-3 p-2 text-white transition-all delay-150 hover:bg-[#9B9B9B] active:text-[#B070D0]"
                    >
                     
                      <span>{subItem.text}</span>
                    
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
