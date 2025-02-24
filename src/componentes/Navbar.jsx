import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Menu = () => "☰"; 
  const X = () => "✖";
  const menuItems = ["About", "Portfolio", "Projects", "Contacts", "CV", "English"];

  return (
    <nav className="bg-black text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-lg font-semibold">
          Luca Cappello
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <a key={index} href={`#${item.toLowerCase()}`} className="hover:text-gray-400 transition">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center space-y-4 py-4">
          {menuItems.map((item, index) => (
            <a key={index} href={`#${item.toLowerCase()}`} className="hover:text-gray-400 transition">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
