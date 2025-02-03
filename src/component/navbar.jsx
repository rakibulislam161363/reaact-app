import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Nav from './navenext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-4 bg-[#E4E4E780]">
      <div className="container mx-auto flex flex-wrap items-center justify-between ">
        <NavLink to="/" className=" text-2xl font-bold mb-3">
          <img src="LOGO.png" alt="" />
        </NavLink>
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden hover:text-gray-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } w-full lg:block lg:w-auto`}
        >
          <div className='lg:flex block items-center gap-5'>
            <ul className="text-base lg:flex lg:justify-between">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-2 lg:inline-block font-semibold"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Incidents"
                  className="block py-2 px-2 lg:inline-block font-semibold"
                >
                  Incidents
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Locations"
                  className="block py-2 px-2 lg:inline-block font-semibold"
                >
                  Locations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Activities"
                  className="block py-2 px-2 lg:inline-block font-semibold"
                >
                  Activities
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Documents"
                  className="block py-2 px-2 lg:inline-block font-semibold"
                >
                  Documents
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Cypher"
                  className="block py-2 px-2 lg:inline-block font-semibold"
                >
                  Cypher AI
                </NavLink>
              </li>
            </ul>
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  className="bg-white rounded-full p-2"
                  src="notification.png"
                  alt=""
                />
                <div className="absolute w-2 h-2 bg-green-500 top-0 right-0 rounded-2xl z-10"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="">
                  <img className="" src="people.png" alt="" />
                </div>
                <div className="">
                  <h1 className="text-[#71717A] text-xl">Usman Zafar</h1>
                  <p className="text-[#71717A]">usmanzafar@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nav />
      <Outlet />
    </nav>
  );
};

export default Navbar;
