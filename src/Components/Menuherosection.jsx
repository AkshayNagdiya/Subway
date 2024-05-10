import React, { useEffect } from "react";
import img from "../assets/GrillsBG.png";
import img1 from "../assets/hero1.png";
import img2 from "../assets/chef-special-logo.png";
import img3 from "../assets/discover-more-text.png";
import img4 from "../assets/HeadlineText.png";
import img5 from "../assets/Crispers.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../features/Menu/MenuSlice";
import Menuitems from "./Menuitems";

const Menuherosection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenu());
  }, []);

  const { isLoading, isError, isSuccess, message, products } = useSelector(
    (state) => state.menu
  );

  if (isLoading) {
    return (
      <div className="container">
        <h1 className="font-extrabold text-center my-96">Loading ...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container">
        <h1 className="font-extrabold text-center my-96">
          404 Page not available
        </h1>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div
        className=" pt-10 bg-cover flex flex-col justify-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <img
          src={img4}
          className="hidden md:block"
          style={{ width: "700px", marginInline: "100px", padding: "20px" }}
          alt="img"
        />
        <img src={img4} className="md:hidden py-10 w-3/4 pl-4" alt="img" />
        <div className="flex flex-row justify-center">
          <div className="grid grid-cols-3 gap-6 justify-center">
            <div className="flex pl-32 ">
              <img src={img2} alt="" className="flex justify-center" />
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="pt-10 bg-cover flex-col h-auto justify-center bg-white">
        <div className="container flex h-auto w-fit flex-wrap justify-center">
          {products.slice(0, 6).map((products) => (
            <Menuitems key={products.id} products={products} />
          ))}
        </div>
        <div className="flex pl-10 md:pl-32 w-60 md:w-96 ">
          <img src={img3} alt="" className="flex justify-center" />
        </div>
      </div>

      {/*  */}

      <div className="pt-10 pb-8 bg-cover flex-col h-auto justify-center bg-[#008045]">
        <div className="container flex h-auto w-fit flex-wrap justify-center">
          {products.slice(6, 12).map((products) => (
            <Menuitems key={products.id} products={products} />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-between pt-8 md:pt-0 ">
        <div className="md:flex md:justify-end">
          <h1 className="text-green-600 md:pt-20 text-3xl md:text-[50px]">
            INTRODUCING
          </h1>
          <h1 className="text-green-600 font-extrabold md:pt-40 md:text-[50px]">
            {" "}
            CRISPERS
          </h1>
          <img src={img5} alt="img" className="w-[100%] md:w-[50%]" />
        </div>
      </div>

      <p className="py-10 bg-black text-white ">All Right Reserved Akshay Nagdiya</p>
    </div>
  );
};

export default Menuherosection;
