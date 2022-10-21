import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";



const RouteSwitch = () => {
  return (
    <>
    <Link to="/">The SHOP</Link>
    <Link to="/cart">Cart</Link>
    <Routes>
        <Route element={<Header />} />
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route element={<Footer />} />
    </Routes>
  </>
  )
}

export default RouteSwitch