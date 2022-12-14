import React, { useState } from 'react';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([])

  const [cart, setCart] = useState([])
   
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  },[])

const handleAddToCart = (product) => {
  const newCart = [...cart, product]
  // console.log(newCart )
  setCart(newCart)
  }
  return (
    <div className='products'>
      <div className="products-container">
        {
          products.map(product => <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          >
            
            </Product>)
         }
       </div>
      <div className="cart-container">
         <Cart cart={cart}></Cart>
        
       </div>
    </div>
  );
};

export default Shop;