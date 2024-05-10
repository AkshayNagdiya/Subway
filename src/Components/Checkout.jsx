import React from 'react'
import { useSelector } from 'react-redux';

const Checkout = () => {

    const {Cartitems} = useSelector((state)=> state.cart)
      const total = Cartitems.reduce((p,c)=> p+ c.qty*c.price ,0);
    console.log(Cartitems)


  return (
    <div className='md:flex justify-center w-full bg-gray-0 md:flex-col md:justify-center md:items-center lg:flex lg:flex-row'>

        <div className='md:w-[80%] bg-red-100 p-10 mt-14 flex flex-col  justify-between h-full lg:w-[40%] lg:justify-start'>
            <div className='flex justify-between flex-col'>
            {
                Cartitems.map((item)=> {
                 return    <div className='flex justify-between p-2'>
                    <img className='w-[100px]' src={item.img} alt="" />
                    <div className='flex flex-col w-full justify-between p-4'>
                    <h1>name : {item.name} </h1>
                    <h1>Qty : {item.qty}</h1>
                    <h1>Price : {item.price}  per serve</h1>
                    </div>
                </div>
                } )
            }
                
                {/* <div className='flex items-end justify-end flex-col'>
                    <h1>Rs : {Cartitems[0].price} each</h1>
                    <h1 className='font-semibold'>Sub Total : {(Cartitems[0].price) * (Cartitems[0].qty) } Rs</h1>
                </div>  */}
            </div>
            <div className='p-2 mt-8 flex justify-between border-t-2 border-black'>
                <h1 className='font-bold text-[20px]'>Total : </h1>
                <h1 className='font-bold text-[20px]'>Rs. {total}</h1>
            </div>
        </div>



        <div className='flex flex-col justify-center p-10 border-spacing-7 border-blue-200'>
            <a href='https://www.phonepe.com/' target='_blank' className='bg-black p-2 text-white my-4 flex justify-center hover:bg-blue-800'>Phone pay</a>



            <div className='border-t-2 border-red-400 p-2'></div>
            
            
            
            <h1 className='my-2'>Shipping information</h1>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" required/>     
            <h1 className='mt-6 my-2'>Shipping address</h1>
            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" ' type="text" placeholder='Enter your Name' required />
            <input className='my-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"' type="text" placeholder='Contact No.' required />
            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"' type="text" placeholder='house no , buildeing name , colony , landmark' required />
            <h1 className='my-4'>Payment details</h1>
            <label htmlFor="Card information"></label>
            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"' type="text" placeholder='1234 1234 1234 1234' required />
            <div className='flex'>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"' type="text" placeholder='MM/YY' required />
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"' type="text" placeholder='CVC' required />
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="my-2"></div>
                <label class="md:w-2/3 block text-gray-500 font-bold">
                <input class="mr-2 leading-tight" type="checkbox"/>
                <span class="text-sm">
                    Send me on Saved address!
                </span>
                </label>
            </div>
            <button  className=' flex justify-center bg-red-300 p-2 mt-2 hover:bg-red-200'>Pay</button>
            <button  className=' flex justify-center bg-red-300 p-2 mt-2 hover:bg-red-200'>Cash On Delivery</button>
        </div>
    </div>
  )
}

export default Checkout;