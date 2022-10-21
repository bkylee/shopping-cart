import React from 'react'
import Item from './classes/Item'
import ShoppingCart from './components/ShoppingCart';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

const App = () => {
  //Item(name, price, style, imgsrc, quantity,type)
  //chairs for sale 
  const chair1 = Item('chair1', 20, 'cool',"tempsrc", 0, 'chair');
  const chair2 = Item('chair2', 40, 'weird',"tempsrc", 0, 'chair');
  const chair3 = Item('chair3', 15, 'expensive',"tempsrc", 0, 'chair');
  const chair4 = Item('chair4', 5, 'cheap',"tempsrc", 0, 'chair');
  const chair5 = Item('chair5', 40001123, 'lame',"tempsrc", 0, 'chair');
  const chair6 = Item('chair6', 120, 'cheap',"tempsrc", 0, 'chair');
  const chair7 = Item('chair7', 85, 'cheap',"tempsrc", 0, 'chair');
  const chair8 = Item('chair8', 420, 'weird',"tempsrc", 0, 'chair');
  const chair9 = Item('chair9', 96, 'weird',"tempsrc", 0, 'chair'); 

  const chairs = [chair1, chair2, chair3, chair4, chair5, chair6, chair7, chair8, chair9]; 

  //hats for sale 
  const hat1 = Item('hat1', 1, 'cool',0, 'hat');
  const hat2 = Item('hat2', 3, 'cheap',0, 'hat');
  const hat3 = Item('hat3', 21, 'expensive', 0, 'hat');
  const hat4 = Item('hat4', 43, 'weird', 0, 'hat');
  const hat5 = Item('hat5', 98, 'expensive',0, 'hat');
  const hat6 = Item('hat6', 1123, 'cool', 0, 'hat');
  const hat7 = Item('hat7', 5, 'cool', 0, 'hat');

  const hats = [hat1, hat2, hat3, hat4, hat5, hat6, hat7];

  const [cart, setCart] = useState([]);

  const [showCart, setShow] = useState(false);

  const toggleShow = () =>{
    if(showCart){
      setShow(false);
    }else{
      setShow(true);
    };
  };

  const addCart = (item) =>{
    setCart(cart.concat(item));
  };
  
  const removeItem = (item) =>{
    setCart(...prevCart => prevCart.splice(index, 1));
  };

  const addQuantity = (itemName) =>{
        setCart(...prevCart=> prevCart.find(thing =>{if(thing === itemName){
          thing.quantity++;
        }
      })
      );
  };

  const reduceQuantity = (itemName) =>{
        setCart(...prevCart=> prevCart.find(thing =>{if(thing === itemName){
          thing.quantity++;
        }}));
  };

  const allItems = chairs.concat(hats);
  let showItems = allItems.map(item =>{
    <div className="products" key={uniqid()}>
      <img src={item.imgsrc} alt="" />
      <Link to={`/${item.type}/${item.name}`}>{item.name}</Link>
      <button type='button'>Add</button>
      <input type="number" min={1} max={20} />
    </div>
  });
  
  return (
    <>
    <button type='button'>Sort</button>
    <button type='button'>Filter</button>
    {showItems}
    {showCart ? <ShoppingCart /> : null}
    </>
  )
}

export default App