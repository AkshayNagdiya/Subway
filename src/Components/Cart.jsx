import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cartitem from './Cartitem';
import { CiDiscount1 } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Cart = () => {

  const dispatch = useDispatch();
  const {Cartitems} = useSelector((store) => store.cart)
  let  total = Cartitems.reduce((p,c)=> p+ c.qty*c.price ,0);
  const SGST = (total/100)*2.5 ;
  const CGST = (total/100)*2.5 ;
  const Delivercharge = 40;
  const Discount =( ((total+SGST+CGST+Delivercharge)/100)*10).toFixed(2);
  const Amount = (total+SGST+CGST+Delivercharge) - Discount;

  if(Cartitems.length == 0){
    return <h1 className='flex w-full justify-center items-center h-[80vh] text-gray-400 text-[50px]'>Cart is Empty</h1>
  }

  return (
    <div className='lg:flex justify-between flex-wrap md:px-10'>

      <div className='flex flex-col lg:w-[50%] h-auto '>
      {
        Cartitems.map( (cartitem)=><Cartitem key={Cartitem.id} cartitem={cartitem}  /> )
      }
    
      </div>

      <div className='flex flex-col flex-wrap lg:min-w-[50%] h-auto px-2'>
        <div className='flex flex-col flex-wrap justify-center mt-10  h-auto '>
          <div className='bg-gray-100   rounded-xl flex justify-between h-auto border-4'>
            <span className='flex flex-col items-center justify-between px-8 py-4 w-full'>
              <span className='w-full'>
                <span className='flex justify-between bg-white'>
                <h1 className='font-semibold'>Total Quantity : </h1>
                <h1 >{Cartitems.length}.00</h1>
                </span>
                <span className='flex justify-between'>
                <h1 className='font-semibold'>PRICE : </h1>
                <h1>{total}.00</h1>
                </span>
                <span className='flex justify-between'>
                <h1 className='font-semibold'>SGST : </h1>
                <h1>{SGST}</h1>
                </span>
                <span className='flex justify-between'>
                <h1 className='font-semibold'>CGST : </h1>
                <h1>{CGST}</h1>
                </span>
                <span className='flex justify-between'>
                <h1 className='font-semibold'>Delivery Charge : </h1>
                <h1>40.00</h1>
                </span>
                <span className='flex justify-between'>
                <h1 className='font-semibold flex items-center w-24 justify-between'>Discount <CiDiscount1 /> : </h1>
                <h1>-{Discount}</h1>
                </span>
                <span className='flex justify-between'>
                <h1 className='font-semibold'>TOTAL AMOUNT : </h1>
                <h1>{Amount}</h1>
                </span>
              </span>
              <Link to='/Checkout' type='button' className='flex justify-center mt-2 btn bg-gray-500  hover:bg-green-500  p-2 rounded-lg text-white curser-cell w-full '>Place Order</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
