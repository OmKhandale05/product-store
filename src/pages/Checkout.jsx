import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

const Checkout = () => {
    const { cartItems, clearCart} = useCart();

    const handleOrder = () => {
        toast.success("Order placed successfully..")
        clearCart();
    }
    return ( 
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">
                Checkout
            </h1>
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
                <button
                onClick={handleOrder}
                className="w-full bg-black text-white rounded-lg hover:bg-gray-800 py-3 cursor-pointer"
                
                >
            
                    Place Order
                </button>
            </div>
        </div>
     );
}
 
export default Checkout;