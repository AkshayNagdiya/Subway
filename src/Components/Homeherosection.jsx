import React, { useEffect } from 'react'
import img from '../assets/hero1.png'
import img2 from '../assets/hero2.png'
import Herotwo from './Herotwo';
import { useDispatch, useSelector } from 'react-redux'
import { fetchMenu } from '../features/Menu/MenuSlice'
import { Link } from 'react-router-dom';


const Homeherosection = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchMenu())
  },[])

  const {isLoading,isError,isSuccess,message,products} = useSelector(state => state.menu)

  if(isLoading){
    return (
      <div className='container'>
        <h1 className='font-extrabold text-center my-96'>Loading ...</h1>
      </div>
    )
  }

  if(isError){
    return(
      <div className='container'>
      <h1 className='font-extrabold text-center my-96'>404 Page not available</h1>
    </div>
    )
  }
  return (
    <>
      <div className='bg  h-auto md:h-[100vh] bg-cover md:flex'>
        <img className='w-fit p-10 h-5/6  top-20 left-20 ' src={img2} alt="img" />
        <span className='md:hidden relative left-10 bottom-2 text-white gap-2'>
        <p>Order Now on </p>
          <button className='bg-orange-500 hover:bg-orange-600 h-6 w-28 text-xs rounded-3xl my-2'><a href="https://www.swiggy.com/">SWIGGY</a></button><br />
          <button className='bg-red-600 hover:bg-red-700 h-6 w-28 text-xs rounded-3xl'><a href="https://www.zomato.com/indore">ZOMATO</a></button><br />
        </span>
      </div>
      <div className='flex justify-center items-center pt-8 md:p-12 font-extrabold font-[Merienda] text-3xl md:text-[50px] lg:text-[60px]'><span style={{color:'#FECC06'}}> Chefs </span> <span style={{color:'#009947'}}> Special</span> </div>
      <div className='container flex h-auto flex-wrap w-fit justify-center'>
        {
          products.slice(0,6).map(products => <Herotwo key={products.id} products={products}/>)
        }
      </div>
      <div className=''>
          <div className='p-8 flex justify-center bg-[#EDEDED]'>
          <iframe style={{width:'120vh' , height:'70vh' , borderRadius:'20px'}} src="https://www.youtube.com/embed/9KWjPD3r-fU?rel=0" title="Subway Hotsellers | Just point, pick and enjoy." allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="video"></iframe>
          </div>
          <div className=' bg-white text-center py-6 md:text-xl font-semibold'>
          <h5 className=''>All rights reserved. Akshay Nagdiya</h5>
          </div>
      </div>
    </>
  )
}

export default Homeherosection;
