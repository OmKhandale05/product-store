import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
const AppRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/product/:id" element={<ProductDetails />}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
     );
}
 
export default AppRoutes;