import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";

const Navbar = ({ search, setSearch }) => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const location = useLocation();

  const hideSearch =
    location.pathname === "/cart" ||
    location.pathname === "/checkout" ||
    location.pathname === "/order-success";

  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b">
      <Link to="/" className="text-xl font-bold">
        ProductStore
      </Link>
      {!hideSearch && <SearchBar search={search} setSearch={setSearch} />}

      <Link to="/cart" className="relative flex items-center">
        <ShoppingCartIcon className="h-7 w-7" />

        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  );
};
export default Navbar;
