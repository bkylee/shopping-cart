import React, { Fragment } from 'react'
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';

const ShowProducts = ({total, addQuantity, reduceQuantity, toggleShow, showCart, addCart, allItems, cart, removeItem}) => {
  return (
  <>
  <div id='headButts'>
      <button type='button'>Sort</button>
      <button type='button'>Filter</button>
      <button type='button' onClick={toggleShow}>Cart</button>
    </div>
    <div id='main'>
    {showCart ? <ShoppingCart total={total} addQuantity={addQuantity} reduceQuantity={reduceQuantity} cart={cart} removeItem={removeItem}/> : null}
      <div id='products'>
      {allItems.map((item) =>(
      <div className="product" key={uniqid()}>
        <div className='prodLinks'>
        <Link className='link' to={`/${item.name}`}><img src={item.imgsrc}></img>{item.name} ${item.price}</Link>
        <button type='button' onClick={()=>addCart(item)}>Add</button>
        {/* <input className='numbProd' type="number" min={1} max={20} />    WIP*/}
        </div>
      </div>
    ))}
    </div>
  </div>
    </>
    )
}

export default ShowProducts