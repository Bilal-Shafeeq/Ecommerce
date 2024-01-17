import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart';
import ProductContext from './components/context/ProductContext';


const App = () => {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const addToCart = (productAddToCart) => {
    setCart([...cart, productAddToCart])
    alert(`${productAddToCart.title} added to cart`);
  }

const removeFromCart = (product)=>{
 const newCart = cart.filter((item) => item.id !== product.id)
 setCart(newCart)
  alert(`${product.title} deleted from cart`);
}

  return (
    <>
      <ProductContext.Provider value={{ products, setProducts, cart, setCart, addToCart, removeFromCart}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
    </>

  )
}

export default App