import React from 'react'
import { IoBagAddOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Herotwo = ({products}) => {
  return (
    <div className='flex flex-col justify-center p-8 h-auto  md:w-[300px] lg:w-[400px]'>
      <Link to="/Menu" className='rounded-[50px] flex flex-col h-auto shadow-2xl shadow-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300 ...' style={{transition : 'ease-out'}}>
        <img style={{width : '400px' , maxHeight : '400px'}} src={products.img} alt="" />
        <h1 className='p-2 pl-6 flex justify-items-stretch text-[25px] font-semibold font-[Merienda] md:text-[15px] lg:text-[25px]'>{products.name}</h1>
      </Link>
    </div>
  )
}

export default Herotwo;
