import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import SearchBar from "./SearchBar";


const Navbar = ({search, setSearch}) => {
    const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

    return ( 
        <nav className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 border-b">

      
      <Link to="/" className="text-xl font-bold">
        ProductStore
      </Link>

      <SearchBar search={search} setSearch={setSearch}/>
      <Link
        to="/cart"
        className="relative flex items-center"
      >

        <ShoppingCartIcon className="h-7 w-7" />

        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {totalItems}
          </span>
        )}

      </Link>

    </nav>
  );
}
export default Navbar;