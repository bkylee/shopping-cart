import React from 'react';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

const ShoppingCart = ({total, reduceQuantity, addQuantity, cart, removeItem}) => {

    
    return (
    <>
    <div id='cart'>
        <h2>Cart</h2>
        <div id='total'>Total: ${total} <Link to='/cart'>Checkout</Link> </div>
        <ul>
        {cart.map((item) =>(
        <li className='cartItem' key={uniqid()}>
            <img src={item.imgsrc} alt="" />
            <Link className='link' to={`/${item.type}/${item.name}`}></Link>{item.name} {item.quantity} {item.price}
            <button type='button' onClick={()=>reduceQuantity(item)}>-</button>
            <button type='button' onClick={()=>addQuantity(item, 1)}>+</button>
            <button type='button' onClick={()=>removeItem(item)}>Remove item</button>
            </li>))}
            </ul>
    </div>
    </>
  )
}

export default ShoppingCart