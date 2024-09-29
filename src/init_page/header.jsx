import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './static/Logo.png';

function Header({introRef}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToIntroduction = () => {
    introRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-10 border-b-2 border-slate-800">
      <nav className="border-gray-200 px-4 lg:px-6 py-6 bg-background_color">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <a href="#">
              <img src={logo} alt="Logo" class="w-10 bg-background_color"/>
            </a>
          </div>

          <div className="flex lg:hidden">
            <button onClick={toggleMenu} className="text-gray-800 dark:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full`}>
            <div className="flex flex-col lg:flex-row lg:space-x-2 mt-4 lg:mt-0 font-bold">
              <button onClick={scrollToIntroduction} className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 rounded-lg text-sm px-4 py-2 lg:py-2.5 mb-2 lg:mb-0 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get Started</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
