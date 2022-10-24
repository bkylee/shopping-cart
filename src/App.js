import React, {useState} from 'react'
import Item from './classes/Item'
import ShoppingCart from './components/ShoppingCart';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import ShowProducts from './components/ShowProducts';

const App = () => {
  //Item(name, price, style, imgsrc, quantity,type)
  //chairs for sale 
  const chair1 = Item('chair1', 20, 'cool',"tempsrc", 0, 'chair');
  const chair2 = Item('chair2', 40, 'weird',"tempsrc", 4, 'chair');
  const chair3 = Item('chair3', 15, 'expensive',"tempsrc", 0, 'chair');
  const chair4 = Item('chair4', 5, 'cheap',"tempsrc", 0, 'chair');
  const chair5 = Item('chair5', 40001123, 'lame',"tempsrc", 0, 'chair');
  const chair6 = Item('chair6', 120, 'cheap',"tempsrc", 0, 'chair');
  const chair7 = Item('chair7', 85, 'cheap',"tempsrc", 0, 'chair');
  const chair8 = Item('chair8', 420, 'weird',"tempsrc", 0, 'chair');
  const chair9 = Item('chair9', 96, 'weird',"tempsrc", 0, 'chair'); 

  const chairs = [chair1, chair2, chair3, chair4, chair5, chair6, chair7, chair8, chair9]; 

  //hats for sale 
  const hat1 = Item('hat1', 1, 'cool',"tempsrc",0,'hat');
  const hat2 = Item('hat2', 3, 'cheap',"tempsrc",0, 'hat');
  const hat3 = Item('hat3', 21, 'expensive',"tempsrc", 0, 'hat');
  const hat4 = Item('hat4', 43, 'weird',"tempsrc", 0, 'hat');
  const hat5 = Item('hat5', 98, 'expensive',"tempsrc", 0, 'hat');
  const hat6 = Item('hat6', 1123, 'cool', "tempsrc", 0, 'hat');
  const hat7 = Item('hat7', 5, 'cool', "tempsrc", 0, 'hat');

  const hats = [hat1, hat2, hat3, hat4, hat5, hat6, hat7];

  const allItems = chairs.concat(hats);

  // const [products, setProducts] = useState(allItems);

  const [cart, setCart] = useState([]);

  const [showCart, setShow] = useState(false);

  const toggleShow = () =>{
    if(showCart){
      setShow(false);
    }else{
      setShow(true);
    };
  };

  const addCart = (item, quantity=1) =>{
    const isFound = cart.map(val=> val.name).indexOf(item.name);
    if(isFound === -1){
      setCart(cart.push(item));
    }else{alert(`${item.name} has already been added to your cart`)};
    addQuantity(item, quantity);
  };
  
  const removeItem = (item) =>{
    setCart(prevCart => (prevCart.filter(thing =>(thing !== item))))
  };
  
  const addQuantity = (item, number=1) =>{
    //check current quantity of item 
      // let current = cart.filter((val) => val.name === item.name);
      // current = current.quantity + number;
  setCart(cart.map(product =>(product === item ? {...product, quantity: product.quantity + number} : product)));
  };

  const reduceQuantity = (item) =>{
    setCart(cart.map(product =>(product === item ? {...product, quantity: product.quantity -1} : product)));
  };

  return (
    <>
        <Link to="/">The SHOP</Link>
        <Link to="/cart">Cart</Link>
    <Routes>
        <Route element={<Header />} />
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<ShowProducts addQuantity={addQuantity} reduceQuantity={reduceQuantity} toggleShow={toggleShow} addCart={addCart} showCart={showCart} cart={cart} allItems={allItems} removeItem={removeItem}/>} />
        <Route path="/cart" element={<ShoppingCart  addQuantity={addQuantity} reduceQuantity={reduceQuantity} cart={cart} removeItem={removeItem}/>} />
        <Route element={<Footer />} />
    </Routes>
    </>
  )
}

export default App