import { StarIcon } from "@heroicons/react/24/solid";
import { EyeIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white p-4 rounded-xl shadow-md hover-shadow-xl transition duration-300 flex flex-col h-full">
      <span className="text-xs bg-gray-200 px-2 py-1 rounded w-fit capitalize">
        {product.category}
      </span>
      <div className="h-48 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h2 className="font-semibold text-sm mt-4 line-clamp-2">
        {product.title}
      </h2>
      <div className="flex items-center gap-1 text-yellow-500 mt-1">
        <StarIcon className="h-4 w-4" />
        <span className="text-sm text-gray-700">
          {product.rating.rate} ({product.rating.count})
        </span>
      </div>

      <div className="mt-auto">
        <p className="text-lg text-green-600 font-bold mt-2">
          ${product.price}
        </p>

        <div className="flex gap-2 mt-3">
          <Link
            to={`/product/${product.id}`}
            className="flex items-center justify-center gap-1 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-600 transition"
          >
            <EyeIcon className="h-5 w-5" />
            See Product
          </Link>
          <button className="flex items-center justify-center gap-1 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-200 transition">
            <ShoppingCartIcon className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
