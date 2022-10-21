import React from 'react';
import uniqid from 'uniqid';

const ShoppingCart = ({cart, removeCart}) => {
    let showCart = cart.map(item =>
        <li className='cartItem' key={uniqid()}>
            <img src={item.imgsrc} alt="" />
            <Link to={`/${item.type}/${item.name}`}></Link>{item.name} {item.quantity} {item.price}
            <button type='button' onClick={removeCart}>Remove item</button>
            </li>);
    let total = cart.forEach(item=>{
        total = total + item.price;
    });
    return (
    <>
        <h2>Cart</h2>
        {showCart}
        <div>Total: {total}</div>
        <button type='button'>Checkout</button> 
    </>
  )
}

export default ShoppingCart