import React, { useContext } from 'react'
import ProductContext from '../components/context/ProductContext'
import { GiShoppingCart } from "react-icons/gi";



const Cart = () => {


  const { cart, removeFromCart } = useContext(ProductContext)
  return (
    <div>
      <div className='lg:w-[82vw] mx-auto mb-10 px-2 '>
        <div className='grid grid-cols-1 lg:grid-cols-4 justify-items-center'>
         {cart.length ?  
          cart.map((product) => {
            return (
              <div key={product.id} className='lg:w-[18vw] w-full mt-10 shadow-2xl rounded-md bg-fixed py-4 overflow-hidden hover:shadow-purple-300 cursor-pointer '>
                <img className="pb-4 hover:scale-105 transition-all w-full h-[220px] rounded-t-md " src={product.thumbnail} alt="" />
                <div className='px-4'>
                  <h2 className='font-bold text-lg mb-2 text-[#525252]'>{product.title}</h2>
                  <p className='text-s text-[#656363]'>{product.description}</p>
                  <div className='flex justify-between mt-4 '>
                    <span className='font-bold text-lg text-[#525252]'>Price: ${product.price}</span>
                    <button onClick={() => removeFromCart(product)} className='px-6 py-[6px] rounded-md bg-gray-500 text-white ml-2 hover:bg-red-500'>Remove</button>
                  </div>
                </div>
              </div>
            )
          })
          :
          <div className=' flex justify-center items-center w-[80vw] h-[80vh] mx-auto flex-col'>
          <GiShoppingCart className='lg:text-[20rem] text-[10rem]'/>
              <div className='lg:text-[30px] text-[15px] font-bold'>Your Cart is currently Empty</div>
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Cart