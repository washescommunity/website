import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { dadosEdicaoAtual } from "../data/dadosEdicaoAtual";
import "../style/app.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = () => {
    setIsOpen(false)
  }

  const renderNavItem = (item, index, isMobile = false) => (
    <Link
      key={index}
      to={item.path}
      target={item.external ? "_blank" : "_self"}
      rel={item.external ? "noopener noreferrer" : ""}
      className={`text-gray-500 hover:text-white hover:bg-pink-500 px-3 py-2 rounded transition-colors duration-300 relative group ${
        location.pathname === item.path || (location.pathname === "/" && item.path === "/home") ? "font-bold" : ""
      } ${isMobile ? "text-2xl my-4" : ""}`}
      onClick={handleNavItemClick}
    >
      {item.name}
      <span
        className={`absolute bottom-0 left-0 w-full h-1 ${
          location.pathname === item.path || (location.pathname === "/" && item.path === "/home") ? "bg-pink-500" : "bg-transparent"
        } group-hover:bg-pink-500 transition-all duration-300`}
      ></span>
    </Link>
  );

  const navItems = [
    { name: "HOME", path: "/home" },
    { name: "QUEM SOMOS", path: "/quem-somos" },
    { name: `WASHES ${dadosEdicaoAtual.anoAtualDoEvento}`, path: `/washes-${dadosEdicaoAtual.anoAtualDoEvento}` },
    { name: "EDIÇÕES ANTERIORES", path: "/edicoes-anteriores" },
    {
      name: "DATAWASHES",
      path: "https://datawashes.pythonanywhere.com",
      external: true,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/home" className="flex items-center">
            <img
              src="./assets/imgs/logo_washes.svg"
              alt="Logo"
              className="h-8 mr-2 cursor-pointer"
            />
            <span className="text-2xl font-medium">WASHES</span>
          </Link>
        </div>
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item, index) => renderNavItem(item, index))}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white flex flex-col items-center justify-center z-40">
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <FaTimes size={24} />
          </button>
          {navItems.map((item, index) => renderNavItem(item, index, true))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
