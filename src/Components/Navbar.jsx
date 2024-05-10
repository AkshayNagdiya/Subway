import React, { useState } from "react";
import tittle from "../assets/tittle.png";
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const { Cartitems } = useSelector((store) => store.cart);
  const [fix, setfix] = useState(false);
  const [isMobilemenu, setisMobilemenu] = useState(false);

  const scroll = () => {
    if (window.scrollY > 30) {
      setfix(true);
    } else {
      setfix(false);
    }
  };
  window.addEventListener("scroll", scroll);

  return (
    <div div className="">
      <nav
        className={`bg-white-800 flex items-center justify-between duration-500 px-8 sticky top-0 bg-white shadow-2xl ${
          fix ? "bg-gray-800 " : null
        } `}
      >
        <div className="">
          <div className="">
            <img src={tittle} alt="" style={{ width: "150px" }} />
          </div>
        </div>
        <div className='gap-8 lg:w-[65%] xl:w-[50%] md:text-[10px] lg:text-[15px] xl:text-[18px] items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky"'>
          <Link
            to="/Home"
            className="text-green-600 font-semibold hover:border-b-4 focus:border-gray-500  "
          >
            HOME
          </Link>
          <Link
            to="/Menu"
            className="text-green-600 font-semibold hover:border-b-4 focus:border-gray-500 "
          >
            MENU
          </Link>
          <Link
            to="/About"
            className="text-green-600 font-semibold hover:border-b-4 focus:border-gray-500 "
          >
            ABOUT US
          </Link>
          <Link
            to="/Store"
            className="text-green-600 font-semibold hover:border-b-4 focus:border-gray-500 "
          >
            STORE LOCATOR
          </Link>
          <Link
            to="/Cart"
            className="text-green-600 font-semibold hover:border-b-4 focus:border-gray-500  flex items-center"
          >
            <IoIosCart /> ({Cartitems.length})
          </Link>
          <div>
            <button
              type="button"
              className=" p-2 w-auto bg-yellow-300 rounded-md hover:bg-yellow-500 md:text-[10px] lg:text-[15px] "
            >
              TALK TO US
            </button>
          </div>
        </div>
        {/* <div className="flex items-center md:hidden">
          <Link
            to="/Cart"
            className="text-green-600 font-semibold hover:border-b-4 focus:border-gray-500  flex items-center"
          >
            <IoIosCart /> ({Cartitems.length})
          </Link>
          <menu className="inline-flex items-center justify-center rounded-md p-2 text-green-400 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <MdOutlineMenu onClick={Mobilemenu} />
          </menu>
        </div> */}
        <div className="flex items-center md:hidden">
          <Link
            to="/Cart"
            className="text-green-600 font-semibold hover:border-b-4 focus:border-gray-500  flex items-center"
          >
            <IoIosCart /> ({Cartitems.length})
          </Link>
          <button
            onClick={() => setisMobilemenu((prev) => !prev)}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-green-500 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      {isMobilemenu && (
        <div id="mobile-menu hidden" >
          <div className="space-y-1 px-2 pb-3 pt-2 bg-green-600">
            <Link
              to="/"
              onClick={()=> setisMobilemenu((prev) => !prev)}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/Menu"
              onClick={()=> setisMobilemenu((prev) => !prev)}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Menu
            </Link>
            <Link
              to="/About"
              onClick={()=> setisMobilemenu((prev) => !prev)}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About us
            </Link>
            <Link
              to={"/store"}
              onClick={()=> setisMobilemenu((prev) => !prev)}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Store Locations
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
