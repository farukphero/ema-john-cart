import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
  const { name, price, img, seller, ratings} = props.product

  return (
    <div className='product-handle'>
      <img src={img?img:'no image founded'} alt="" />
      <div className='text-details'>
        <h6>{name}</h6>
         <p>Price: ${price}</p>
         <p>Manufacturer: {seller}</p>
         <p>Rating: {ratings} star</p>
      </div>
      
      <button onClick={() => props.handleAddToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
    </div>
  );
};

export default Product;