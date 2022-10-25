import React from 'react'
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div id='welcome'>
    <h1>Welcome to the Store</h1>
    <Link className='link' to="/shop">Shop</Link>
    </div>
  )
}

export default Welcome