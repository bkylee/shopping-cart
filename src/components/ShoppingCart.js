import React from 'react';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

const ShoppingCart = ({reduceQuantity, addQuantity, cart, removeItem}) => {
   
    return (
    <>
        <h2>Cart</h2>
        {cart.map((item) =>(
        <li className='cartItem' key={uniqid()}>
            <img src={item.imgsrc} alt="" />
            <Link to={`/${item.type}/${item.name}`}></Link>{item.name} {item.quantity} {item.price}
            <button type='button' onClick={reduceQuantity(item)}>-</button>
            <button type='button' onClick={addQuantity(item, 1)}>+</button>
            <button type='button' onClick={()=>removeItem(item)}>Remove item</button>
            </li>))}
        <div>Total: {cart?.reduce((a,v)=> a = a + v.price, 0)}</div>
        <button type='button'>Checkout</button> 
    </>
  )
}

export default ShoppingCart