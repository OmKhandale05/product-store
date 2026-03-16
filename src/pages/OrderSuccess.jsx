import { Link } from "react-router-dom";

const OrderSuccess = () => {
    return ( 
        <div className="flex flex-col items-center justify-center text-center px-4 min-h-[60vh]">
            <img 
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="success"
            className="w-32 mb-6"
            />

            <h1 className="text-3xl font-semibold mb-3">
                Order Placed Successfully!
            </h1>
            <p className="text-gray-500 mb-6 text-lg">
                Thank you for your purchase.
            </p>
            <Link
            to="/"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
            >
                Continue Shopping
            
            </Link>
        </div>
     );
}
 
export default OrderSuccess;