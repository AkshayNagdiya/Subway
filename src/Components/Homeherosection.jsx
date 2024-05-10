import React, { useEffect } from 'react'
import img from '../assets/hero1.png'
import img2 from '../assets/hero2.png'
import Herotwo from './Herotwo';
import { useDispatch, useSelector } from 'react-redux'
import { fetchMenu } from '../features/Menu/MenuSlice'


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
      <div className='bg h-[100vh] bg-cover flex'>
        <img className='w-fit p-10 h-5/6  top-20 left-20 ' src={img2} alt="" />
      </div>
      <div className='flex justify-center items-center p-12 font-extrabold font-[Merienda] md:text-[50px] lg:text-[60px]'><span style={{color:'#FECC06'}}> Chefs </span> <span style={{color:'#009947'}}> Special</span> </div>
      <div className='container flex h-auto flex-wrap w-fit justify-center'>
        {
          products.slice(0,6).map(products => <Herotwo key={products.id} products={products}/>)
        }
      </div>
      <div className=''>
          <div className='p-8 flex justify-center bg-[#EDEDED]'>
          <iframe style={{width:'120vh' , height:'70vh' , borderRadius:'20px'}} src="https://www.youtube.com/embed/9KWjPD3r-fU?rel=0" title="Subway Hotsellers | Just point, pick and enjoy." allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="video"></iframe>
          </div>
          <div className='flex justify-items-center md:px-8 lg:px-32 text-center h-[80px] bg-white'>
          <h5 className='flex py-4'>All rights reserved. SUBWAY® is a Registered Trademark of Subway IP LLC. ©2022 Subway IP LLC., and is licensed to Eversub India Private Limited under an exclusive master franchisee arrangement for the territory of the Republic of India.</h5>
          </div>
      </div>
    </>
  )
}

export default Homeherosection;
