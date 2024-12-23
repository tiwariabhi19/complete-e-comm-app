import { useState } from "react";
import logo from "../images/logo.png";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <IoIosSearch />,
      name: "Search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup: "new",
    },
    {
      icon: "",
      name: "Help",
    },
    {
      icon: "",
      name: "Sign In",
    },
    {
      icon: "",
      name: "Cart",
      sup: "(2)",
    },
  ];

  return (
    <>
      {/* Side Menu Overlay */}
      <div
        onClick={hideSideMenu}
        className={`black-overlay w-full h-full fixed duration-500 ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`w-[500px] bg-white h-full absolute duration-[400ms] ${
            toggle ? "left-0" : "-left-[100%]"
          }`}
        ></div>
      </div>

      {/* Header */}
      <header className="p-[15px] shadow-xl text-[#686b78] sticky top-0 z-10 bg-white">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="w-[100px] cursor-pointer">
            <img src={logo} alt="Logo" className="w-full" />
          </div>

          {/* Location */}
          <div className="hidden sm:block">
            <span className="font-bold border-b-[3px] border-[black]">
              Ramnagar
            </span>{" "}
            Jodgpur, Prayagraj, Uttar Pradesh{" "}
            <RxCaretDown
              onClick={showSideMenu}
              className="inline text-[1.5rem] text-[#fc8019] font-bold cursor-pointer"
            />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div
            className="sm:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {/* Navigation Links */}
          <nav
            className={`flex list-none gap-10 ml-auto text-[18px] font-semibold sm:flex ${
              menuOpen ? "flex" : "hidden"
            } sm:block`}
          >
            {links.map((link, index) => (
              <li
                key={index}
                className="flex hover:text-[#fc8019] items-center gap-2 cursor-pointer"
              >
                {link.icon}
                {link.name}
                <sup>{link.sup}</sup>
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
