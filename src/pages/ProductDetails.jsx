import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart} = useCart();

  useEffect(() => {
    api.get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <div className="text-center mt-20">Loading product...</div>;
  }
  return (
    <div className="p-10 max-w-5xl mx-auto ">
        <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 border px-4 py-2 rounded-lg hover:bg-gray-100"
        >
            <ArrowLeftIcon className="w-5 h-5"/>
            Back
        </button>

      <div className="grid md:grid-cols-2 gap-10">

    </div>  
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 object-contain"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold-mt-4">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-green-600 text-2xl font-bold mb-6">${product.price}</p>
        <button onClick={()=> addToCart(product)} className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition cursor-pointer">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
