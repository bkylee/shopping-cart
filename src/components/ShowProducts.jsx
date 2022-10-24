import React from 'react'
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';

const ShowProducts = ({addQuantity, reduceQuantity, toggleShow, showCart, addCart, allItems, cart, removeItem}) => {
  return (
  <>
    <button type='button'>Sort</button>
    <button type='button'>Filter</button>
    <button type='button' onClick={toggleShow}>Cart</button>
    {allItems.map((item) =>(
    <div className="products" key={uniqid()}>
      <input type='image' src={item.imgsrc} alt="" />
      <Link to={`/${item.type}/${item.name}`}>{item.name}</Link>
      <button type='button' onClick={()=>addCart(item)}>Add</button>
      <input className='numbProd' type="number" min={1} max={20} />
    </div>
  ))}
    {showCart ? <ShoppingCart addQuantity={addQuantity} reduceQuantity={reduceQuantity} cart={cart} removeItem={removeItem}/> : null}
    </>
    )
}

export default ShowProducts