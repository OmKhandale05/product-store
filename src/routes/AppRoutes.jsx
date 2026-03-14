import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
const AppRoutes = ({search}) => {
    return ( 
        <Routes>
            <Route path="/" element={<Home search={search}/>}/>

            <Route path="/product/:id" element={<ProductDetails />}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
     );
}
 
export default AppRoutes;