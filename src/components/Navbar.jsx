import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from './context/ProductContext';

const Navbar = () => {
  const { setProducts, cart } = useContext(ProductContext);
  const [searchValue, setSearchValue] = useState("");

  const searchProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`);
    const data = await res.json();
    setProducts(data.products);
  };

  return (
    <nav className='flex flex-col sm:flex-row justify-between items-center shadow-md lg:h-[7vh]  sm:px-8 md:px-16 lg:px-20 hover:shadow-purple-300 mt-4 lg:mt-0'>
      <h3 className='font-extrabold text-2xl mb-2 sm:mb-0'><Link to="/">Project1</Link></h3>
      <div className='flex items-center mt-3 lg:mt-0 '>
        <input
          type="search"
          name=""
          id=""
          placeholder='Search here'
          className='outline-none border-2 px-3 py-1 rounded-md w-[60vw] sm:w-[30vw] md:w-[25vw] lg:w-[20vw] xl:w-[15vw] hover:border-purple-300'
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className='px-3 py-[6px] rounded-md bg-gray-500 text-white ml-2 hover:bg-purple-500'
          onClick={searchProduct}
        >
          Search
        </button>
      </div>
      <ul className='flex gap-6 text-xl font-bold'>
        <li className='cursor-pointer hover:text-[#6B7280] my-auto'><Link to="/">Home</Link></li>
        <li className='cursor-pointer hover:text-[#6B7280]'>
          <Link to="/cart">
            <div className="relative py-2 mb-3">
              <div className="t-0 absolute left-3">
                {cart.length ?
                  <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cart.length}</p>
                  : null}
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;






// import React, { useContext, useState } from 'react'
// import { Link } from 'react-router-dom'
// import ProductContext from './context/ProductContext'


// const Navbar = () => {

//   const { setProducts, cart } = useContext(ProductContext)

//   const [searchValue, setSearchValue] = useState("")

//   const searchProduct = async () => {
//     const res = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
//     const data = await res.json()
//     setProducts(data.products);
//   }

//   return (
//     <nav className='flex justify-between items-center shadow-md h-[7vh] px-[60px] hover:shadow-purple-300'>
//       <h3 className='font-extrabold text-2xl'><Link to="/">Project1</Link></h3>
//       <div>
//         <input type="search" name="" id="" placeholder='Search here' className='outline-none border-2 px-3 py-1 rounded-md w-[20vw]
//         hover:border-purple-300' onChange={(e) => setSearchValue(e.target.value)} />
//         <button className='px-3 py-[6px] rounded-md bg-gray-500 text-white ml-2 hover:bg-purple-500'
//           onClick={searchProduct}>Search</button>
//       </div>
//       <ul className='flex gap-6 text-xl font-bold'>
//         <li className='cursor-pointer hover:text-[#6B7280] my-auto'><Link to="/">Home</Link></li>
//         <li className='cursor-pointer hover:text-[#6B7280]'><Link to="/cart"> 

//         {/* ---Cart and badge */}
//           <div class="relative py-2 mb-3">
//             <div class="t-0 absolute left-3">
//                 {cart.length ? 
//                 <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cart.length} </p>
//                 : null}
//             </div>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
//             </svg>
//           </div>
//           {/* ---Cart and badge end*/}

//           </Link></li>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar





