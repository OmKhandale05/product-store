import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    toast.success("Order placed successfully..");
    clearCart();
  };
  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full border p-3 rounded-lg"
          />
        </div>
      </div>

      <div className="border rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-3">
            <span>
              {item.title} x {item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <hr className="my-4" />
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button
          onClick={handleOrder}
          className="w-full bg-black text-white rounded-lg hover:bg-gray-800 py-3 cursor-pointer"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
