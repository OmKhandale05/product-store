import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
const AppRoutes = ({search}) => {
    return ( 
        <Routes>
            <Route path="/" element={<Home search={search}/>}/>

            <Route path="/product/:id" element={<ProductDetails />}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/> 
        </Routes>
     );
}
 
export default AppRoutes;