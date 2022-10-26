import React, {useState, useEffect} from 'react'
import Item from './classes/Item'
import ShoppingCart from './components/ShoppingCart';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound'
import ShowProducts from './components/ShowProducts';
import Welcome from './components/Welcome';

const App = () => {
  //Item(name, price, style, imgsrc, quantity,type)
  //chairs for sale 
  const chair = Item('chair', 20, 'cool',"https://canadel.com/wp-content/uploads/CNN090390303EVE-1.png", 0);
  const bottle = Item('bottle', 40, 'weird',"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ222?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1654034080576", 0);
  const car = Item('car', 15, 'expensive',"https://img.autobytel.com/chrome/multiview/white/640/2022kic11_640/2022kic110001_640_01.jpg", 0);
  const hat = Item('hat', 5, 'cheap',"https://cdn.shopify.com/s/files/1/0239/6805/products/EV20191022-01-B_1200x1200.png?v=1571755280", 0);
  const jacket = Item('jacket', 40001123, 'lame',"https://workwear-usa.com/wp-content/uploads/2020/04/493925179992.jpg", 0);
  const keyboard = Item('keyboard', 120, 'cheap',"https://p2-ofp.static.pub/ShareResource/560x450/SSNP/4X30M86879/4X30M86879-560x450-01.9ee25905822c6d94.png", 0);
  const mouse = Item('mouse', 85, 'cheap',"https://media.steelseriescdn.com/thumbs/filer_public/00/0c/000c589d-c620-4e24-9c94-fedfa1bc65d8/imgbuy_qck_neo_nior_002.png__1920x1080_crop-fit_optimize_subsampling-2.png", 0,);
  const pc = Item('pc', 420, 'weird',"https://m.media-amazon.com/images/I/816hWrUTvML._AC_SX679_.jpg", 0,);
  const pillow= Item('chair9', 96, 'weird',"https://m.media-amazon.com/images/I/61VxFel4T9L._AC_SX522_.jpg", 0,); 
  const socks= Item('socks', 2301, 'cool', 'https://balenciaga.dam.kering.com/m/3b76f3ae47015493/Thumbnail-530580472B49060_F.jpg?v=5', 0); 
  const sword= Item('sword', 1, 'dangerous', 'https://cdn.shopify.com/s/files/1/0035/3281/6495/products/4_c0a8080d-bb1c-483a-95bd-d88502bcc2b3_300x.png?v=1649690780', 0);
  const table= Item('table', 596, 'weird', 'https://m.media-amazon.com/images/I/61cJPcufGbL._AC_SL1500_.jpg', 0);

  const allItems = [chair, bottle, car, hat, jacket, keyboard, mouse, pc, pillow, socks, sword, table]

  // const [products, setProducts] = useState(allItems);

  const [cart, setCart] = useState([]);

  const [showCart, setShow] = useState(false);

  const [total, setTotal] = useState(0);

  const toggleShow = () =>{
    if(showCart){
      setShow(false);
    }else{
      setShow(true);
    };
  };


  useEffect(() => {
    setTotal(cart?.reduce((a,v)=> a = a + (v.price * v.quantity), 0));
  }, [cart]);

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
    <Header />
    <Routes>
        <Route path='/shopping-cart' element={<Welcome />} />
        <Route path="/shop" element={<ShowProducts total={total} addQuantity={addQuantity} reduceQuantity={reduceQuantity} toggleShow={toggleShow} addCart={addCart} showCart={showCart} cart={cart} allItems={allItems} removeItem={removeItem}/>}/>
        <Route path="/cart" element={<ShoppingCart  total={total} addQuantity={addQuantity} reduceQuantity={reduceQuantity} cart={cart} removeItem={removeItem}/>} />
        <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App