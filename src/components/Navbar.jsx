import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";


const Navbar = () => {
    const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

    return ( 
        <nav className="flex justify-between items-center px-8 py-4 border-b">

      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        FakeStore
      </Link>

      {/* Cart */}
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