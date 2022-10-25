import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div id='header'>
      <h1><Link to="/shop" >The SHOP</Link></h1>
      <div id='inputs'>
        <div id='headLeft'>
          <Link to="/shop" className='link'>The SHOP</Link>
          <input type="text" placeholder='Search' id='search'/>
        </div>
        <Link to="/cart" className='link headRight' >Cart</Link>
      </div>
    </div>
  )
}

export default Header