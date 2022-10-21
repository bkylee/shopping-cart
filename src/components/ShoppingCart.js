import React from 'react';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

const ShoppingCart = ({cart, removeItem}) => {
    let total = cart.map(item=>{
        total = total + item.price;
    });
    return (
    <>
        <h2>Cart</h2>
        {cart.map((item) =>(
        <li className='cartItem' key={uniqid()}>
            <img src={item.imgsrc} alt="" />
            <Link to={`/${item.type}/${item.name}`}></Link>{item.name} {item.quantity} {item.price}
            <button type='button' onClick={removeItem}>Remove item</button>
            </li>))}
        <div>Total: {total}</div>
        <button type='button'>Checkout</button> 
    </>
  )
}

export default ShoppingCart