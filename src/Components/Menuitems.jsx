import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/Cart/CartSlice";
import { BsCartCheckFill } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Menuitems = ({ products }) => {
  const dispatch = useDispatch();
  const { id, name, img, price, rating, desc } = products;
  const { Cartitems } = useSelector((state) => state.cart);

  const [bun, setBun] = useState(0);
  const [cheese, setCheese] = useState(0);

  const handleadd = () => {
    dispatch(
      add({
        id,
        name,
        img,
        price: price + parseInt(bun) + parseInt(cheese),
        qty: 1,
      })
    );
    toast.success(`Add ${name}`, {
      position: "top-center",
      autoClose: 3000,
    })
  };

  const checkItems = Cartitems.filter((i) => {
    return i.id === products.id;
  });

  return (
    <div className="flex flex-col my-4 md:my-0 justify-center md:p-8 h-auto w-[70vw] md:w-auto ">
      <div className="bg-white  rounded-[30px]  md:rounded-[40px] flex flex-col h-auto border-4 shadow-2xl shadow-slate-950">
        <img
          // style={{ width: "400px", height: "400px" }}
          className="max-h-[250px] md:max-h-[300px]"
          src={products.img}
          alt="img"
        />
        <h1 className="p-2 flex justify-items-stretch md:text-[25px] font-semibold">
          {products.name}
        </h1>
        <span className="md:pt-4 flex justify-around text-xs md:text-base">
          <select
            onChange={(e) => {
              setBun(e.target.value);
            }}
            className="block appearance-none md:w-[180px] bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option value={0}>White Bun</option>
            <option value={50}>Brown Bun </option>
          </select>
          <select
            onChange={(e) => {
              setCheese(e.target.value);
            }}
            className="block appearance-none w-half bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 md:pr-8 rounded leading-snug focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option value={80}>Extra Cheese</option>
            <option value={50}>Extra Veggies</option>
          </select>
        </span>
        <span className="flex items-center justify-between px-8 py-4">
          <span>
            <h1 className="font-semibold">{products.title}</h1>
            <p className="text-green-800 text-sm md:text:lg md:text-base">
              Price: {products.price + parseInt(bun) + parseInt(cheese)} Rs
            </p>
          </span>
          <button
            type="button"
            className="btn text-xs md:text-base bg-green-500  hover:bg-red-500  p-2 rounded-lg text-white curser-cell flex items-center"
            onClick={handleadd}
          >
            {" "}
            <p className="hidden md:block">Add to cart</p>{" "}
            <p className="md:hidden pl-2">Add</p>
            <span className=" px-4 md:p-2">
              <BsCart />
            </span>{" "}
          </button>

          {/* 
          // if u want to change button to added on click it changes 
          {
           checkItems?.length == 0 ? <>

           <button type='button' className='btn bg-green-500  hover:bg-red-500  p-2 rounded-lg text-white curser-cell flex items-center' onClick={()=> handleadd(products)}> Add to cart <span className='p-2'><BsCart /></span> </button>

           </> : <>
           <button type='button' className='btn bg-green-500  hover:bg-red-500  p-2 rounded-lg text-white curser-cell flex items-center'> Added<span className='p-2'><BsCartCheckFill /></span> </button>

           </> 
          } */}
        </span>
      </div>
    </div>
  );
};

export default Menuitems;
