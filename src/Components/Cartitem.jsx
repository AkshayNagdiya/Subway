import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, remove } from "../features/Cart/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cartitem = ({ cartitem }) => {
  const { id, img, name, price, des, rating } = cartitem;
  let { qty } = cartitem;

  const dispatch = useDispatch();
  // const [quantity , setquantity] = useState(1);

  const Decrement = (id) => {
    qty > 1 ? dispatch(decrease({ id })) : (qty = 0);
    toast.error(`Decrease ${name}`, {
      position: "top-center",
    });
  };

  const Increment = (id) => {
    dispatch(increase({ id }));
    toast.success(`Increased ${name}`, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const handleRemove = (id) => {
    console.log(cartitem);
    dispatch(remove(id));
    toast.error(`Removed ${name}`, {
      position: "top-center",
    });
  };

  return (
    <div className="flex flex-col mt-10 ">
      <div className="flex flex-col justify-center px-8 h-auto ">
        <div className="bg-gray-100 rounded-3xl md:flex justify-between h-auto border-4">
          <span className="flex justify-between">
            <span>
              {" "}
              <img
                className="h-[100px] md:h-[200px]"
                src={cartitem.img}
                alt=""
              />
              <h1 className=" md:hidden pl-2 font-semibold">{cartitem.name}</h1>
            </span>
            <span className="md:flex flex-col items-center justify-between px-8 py-4 ">
              <span>
                <h1 className="hidden md:block font-semibold">
                  {cartitem.name}
                </h1>
                <p className="text-green-800">{cartitem.category2}</p>
                <form className="max-w-xs mx-auto my-0 md:mt-14">
                  <label
                    htmlFor="quantity-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-green-900"
                  >
                    Choose quantity:
                  </label>
                  <div className="relative flex items-center max-w-[8rem]">
                    <button
                      onClick={() => Decrement(id)}
                      type="button"
                      id="decrement-button"
                      className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        className="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <input
                      text={qty}
                      type="text"
                      id="quantity-input"
                      data-input-quantityer
                      aria-describedby="helper-text-explanation"
                      className="bg-gray-50 border-x-0 border-gray-300 h-10 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder={qty}
                      required
                    />
                    <button
                      onClick={() => Increment(id)}
                      type="button"
                      id="increment-button"
                      className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        className="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
                <h1>Price : {price * qty} </h1>
              </span>
            </span>
          </span>
          <div className="p-2 md:p-0 text-center">
            <button
              type="button"
              className="btn bg-red-500 md:h-52 hover:bg-green-500 w-full  p-2 md:px-10 rounded-3xl text-white duration-200 curser-cell "
              onClick={() => handleRemove(cartitem.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
