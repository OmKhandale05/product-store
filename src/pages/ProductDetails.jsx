import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

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
    <div className="p-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
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
        <button className="bg-black text-white px-6 py-3 rounded-lg">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
