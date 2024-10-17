import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  const handleButtonClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <div>
      <nav className="navbar">
        <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </a>
        <div className={`navbar--items ${navActive ? "active" : ""}`}>
          <ul className="navbar--list">
            {/* <img src="" alt="Profile" className="navbar--image" /> */}
            <li className="navbar--item">
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="navbar--content"
              >
                Home
              </Link>
            </li>
            <li className="navbar--item">
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="projectSection"
                className="navbar--content"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        <a
          href="#_"
          className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
          onClick={handleButtonClick}
        >
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Contact Me</span>
          <span className="absolute inset-0 border-2 border-white rounded-full"></span>
        </a>
      </nav>

      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg">
            <form action="submit_form.php" method="post">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input type="text" id="name" name="name" required className="mt-1 mb-3 p-2 border rounded w-full" />

              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input type="email" id="email" name="email" required className="mt-1 mb-3 p-2 border rounded w-full" />

              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject:
              </label>
              <input type="text" id="subject" name="subject" required className="mt-1 mb-3 p-2 border rounded w-full" />

              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message:
              </label>
              <textarea id="message" name="message" required className="mt-1 mb-3 p-2 border rounded w-full"></textarea>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
                >
                  Close
                </button>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
