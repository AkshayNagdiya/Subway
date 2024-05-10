import React, { useState } from 'react'
import tittle from '../assets/tittle.png'
import { Link } from 'react-router-dom'
import { IoIosCart } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { MdOutlineMenu } from "react-icons/md";


const Navbar = () => {

  const {Cartitems} = useSelector((store) => store.cart)
  const [fix,setfix] = useState(false)

  const scroll = ()=>{
    if(window.scrollY > 30 ){
      setfix(true)
    }else{
      setfix(false)
    }
  }
  window.addEventListener("scroll",scroll);

  return (
    <>
        <nav className={`bg-white-800 flex items-center justify-between duration-500 px-8 sticky top-0 bg-white shadow-2xl ${fix ?"bg-gray-800 ": null} `} >
            <div className=''>
                <div className=''>
                <img src={tittle} alt="" style={{width:'150px'}}/>
                </div>
            </div>
            <div className='gap-8 lg:w-[65%] xl:w-[50%] md:text-[10px] lg:text-[15px] xl:text-[18px] items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky"'>
                <Link to="/Home" className='text-green-600 font-semibold hover:border-b-4 focus:border-gray-500  '>HOME</Link>
                <Link to="/Menu"  className='text-green-600 font-semibold hover:border-b-4 focus:border-gray-500 '>MENU</Link>
                <Link to="/About" className='text-green-600 font-semibold hover:border-b-4 focus:border-gray-500 '>ABOUT US</Link>
                <Link to="/Store" className='text-green-600 font-semibold hover:border-b-4 focus:border-gray-500 '>STORE LOCATOR</Link>  
                <Link to="/Cart" className='text-green-600 font-semibold hover:border-b-4 focus:border-gray-500  flex items-center'><IoIosCart /> ({Cartitems.length})</Link>      
                <div>
                  <button type='button' className=' p-2 w-auto bg-yellow-300 rounded-md hover:bg-yellow-500 md:text-[10px] lg:text-[15px] '> TALK TO US </button>
                </div>
            </div>
            <div className='md:hidden w-[30%] flex justify-end'>
              <Link to="/Cart" className='text-green-600 font-semibold hover:border-b-4 focus:border-gray-500  flex items-center'><IoIosCart /> ({Cartitems.length})</Link> 
              <menu className='text-green-500 flex justify-center items-center p-2 text-[25px]'><MdOutlineMenu /></menu>
            </div>
            {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to={"/"} href="#" className="block py-2 px-3 text-white md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">HOME</Link>
                            </li>
                            <li>
                                <Link to={"/SpecialM"} href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">SPECIAL MENU</Link>
                            </li>
                            <li>
                                <Link to={"/ourmenu"} href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">OUR MENU</Link>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">CONTACT</a>
                            </li>
                        </ul>
            </div> */}
        </nav>
    </>

  )
}

export default Navbar
