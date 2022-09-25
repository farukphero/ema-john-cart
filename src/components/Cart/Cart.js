import React from 'react';

const Cart = (props) => {
  return (
    <div>
      <h5 style={{textAlign:'center', fontSize:'25px'}}>Order Summary </h5>
        <p>Selected Items: {props.cart.length}</p>
        {/* <p>Total Price:${cart.price}</p> */}
        <p>Total Shipping Charge:$</p>
        <p>Tax:</p>
        <h6>Grand Total: </h6>
        <button className='clear-cart'>Clear Cart</button><br />
        <button className='review-cart'>Review Order</button>
    </div>
  );
};

export default Cart;