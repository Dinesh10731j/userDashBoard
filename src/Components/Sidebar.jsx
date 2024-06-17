import React, { useState, useEffect } from "react";
import User from "../assets/user.png";
import { Navdata } from "../Navdata/data";

const Sidebar = () => {
  const [openIndices, setOpenIndices] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const defaultIndex = Navdata.findIndex((item) => item.text === "Dashboard");
    setSelectedIndex(defaultIndex);
  }, []);

  const toggleSubMenu = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
     
      <aside
        className={`fixed top-0 left-0 h-screen w-[230px] bg-[#2C2D2D] py-3 transition-transform transform lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <nav className="flex flex-col">
        <button
        className="lg:hidden p-4"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>
          <section className="flex items-center justify-center mb-6">
            <img src={User} alt="user" className="w-16 h-16 rounded-full" />
            <div className="ml-3">
              <h1 className="text-white font-medium text-lg font-poppins">
                Ashim Kafle
              </h1>
              <h4 className="text-white font-poppins">UI/UX Designer</h4>
            </div>
          </section>
          <ul className="font-medium flex flex-col gap-3 px-3">
            {Navdata.map((item, index) => (
              <li key={index} className="flex flex-col font-poppins">
                <div
                  className={`relative flex items-center justify-between p-2 transition-all rounded-md delay-150 cursor-pointer ${
                    selectedIndex === index ? "text-[#B070D0]" : "text-white"
                  } hover:bg-[#9B9B9B]`}
                  onClick={() => {
                    handleItemClick(index);
                    if (item.subItems) toggleSubMenu(index);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.icon}
                      alt={item.text}
                      className={`w-6 h-7 ${
                        selectedIndex === index ? "filter-white" : ""
                      }`}
                      style={{
                        filter:
                          selectedIndex === index
                            ? "invert(57%) sepia(61%) saturate(592%) hue-rotate(228deg) brightness(102%) contrast(101%)"
                            : "none",
                      }}
                    />
                    <span>{item.text}</span>
                  </div>
                  {item.subItems && (
                    <span className="text-md">
                      {openIndices.includes(index) ? "△" : "▽"}
                    </span>
                  )}
                  {selectedIndex === index && (
                    <div className="absolute left-0 top-0 h-full w-1 bg-[#B070D0]" />
                  )}
                </div>
                {item.subItems && openIndices.includes(index) && (
                  <ul className="ml-8 mt-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className={`relative flex items-center font-poppins gap-3 p-2 transition-all delay-150 cursor-pointer ${
                          selectedIndex === `${index}-${subIndex}`
                            ? "text-[#B070D0]"
                            : "text-white"
                        } hover:bg-[#9B9B9B]`}
                        onClick={() => handleItemClick(`${index}-${subIndex}`)}
                      >
                        <span>{subItem.text}</span>
                        {selectedIndex === `${index}-${subIndex}` && (
                          <div className="absolute left-0 top-0 h-full w-1 bg-[#B070D0] rounded-md" />
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
