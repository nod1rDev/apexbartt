import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [activeMenu, setActiveMenu] = useState(null); // State to track which menu is open
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

  const toggleMenu = (menuIndex) => {
    setActiveMenu(activeMenu === menuIndex ? null : menuIndex);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      id: 1,
      label: "Services",
      subItems: [
        { name: "AI and Automation", link: "/ai-automation" },
        { name: "Robotic Process Automation", link: "/rpa" },
        { name: "Zapier Consulting", link: "/zapier-consulting" },
        { name: "Make.com Consulting", link: "/make-consulting" },
        { name: "Monday.com Specialists", link: "/monday-specialists" },
        { name: "CRM Systems", link: "/crm-systems" },
      ],
    },
    {
      id: 2,
      label: "Results",
      subItems: [
        { name: "Case Study 1", link: "/case-study-1" },
        { name: "Case Study 2", link: "/case-study-2" },
      ],
    },
    {
      id: 3,
      label: "About Us",
      subItems: [
        { name: "Company History", link: "/history" },
        { name: "Team", link: "/team" },
        { name: "Careers", link: "/careers" },
      ],
    },
    {
      id: 4,
      label: "Resources",
      subItems: [
        { name: "Blog", link: "/blog" },
        { name: "Whitepapers", link: "/whitepapers" },
        { name: "Webinars", link: "/webinars" },
      ],
    },
  ];

  return (
    <header
      className={`cont flex h-[80px] justify-between items-center transition-all duration-300 ${
        isScrolled ? " " : ""
      }`}
    >
      <Link to={"/"}>
        <div className="flex gap-2 items-center">
          <img src="/logoNoBg.png" className="w-[80px]" alt="Logo" />
          <span className="font-[500]">ApexBart Solution</span>
        </div>
      </Link>
      {/* Navigation */}
      <div className="flex gap-6 items-center">
        <nav className="flex gap-10">
          {navItems.map((item, index) => (
            <div
              key={item.id}
              className="relative flex group flex-col items-center"
              onMouseEnter={() => setActiveMenu(index)} // Show menu on hover
            >
              {/* Menu Button */}
              <button
                onClick={() => toggleMenu(index)} // Toggle menu on click
                className="flex text-start leading-0 items-center"
              >
                <div className="uppercase flex flex-col">
                  <span className="-mb-2 opacity-[60%]">0{item.id}</span>
                  {item.label}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(0,0,0,1)"
                >
                  <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                </svg>
              </button>

              {/* Dropdown */}
              {activeMenu === index && (
                <div
                  onMouseLeave={() => setActiveMenu(null)}
                  onMouseEnter={() => setActiveMenu(index)}
                  className="absolute top-[60px] left-0 bg-white shadow-lg rounded-md p-4 w-[220px] text-start text-sm"
                >
                  <ul className="space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.link}
                          className="hover:text-blue-500 border-b border-b-black pb-2 border-opacity-[30%] block"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>
        <Link to={"/contact"}>
          <button className="py-[16px] flex items-center max-h-[50px] rounded-[90px] bg-[#4434ff] text-[18px] text-white font-[500] transition-all duration-1000 hover:bg-[#3898ec] px-[24px]">
            <span>Book A Call</span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="rgba(246,246,246,1)"
            >
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
