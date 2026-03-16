import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <div className="text-center mt-20 text-xl">Your cart is empty</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-[1fr_auto_auto] items-center border p-4 rounded-lg mb-4 gap-6 "
        >
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.title} className="h-16" />

            <div className="max-w-sm">
              <h2 className="font-semibold line-clamp-2">{item.title}</h2>

              <p className="text-green-600 font-bold">${item.price}</p>

              <p className="text-sm text-gray-500">
                ${item.price} × {item.quantity} ={" "}
                <span className="font-semibold text-black">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="px-3 py-1 border rounded"
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => addToCart(item)}
              className="px-3 py-1 border rounded"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 cursor-pointer"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
        <Link
        to="/checkout"
        className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
