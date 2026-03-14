import { StarIcon } from "@heroicons/react/24/solid";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover-shadow-xl transition duration-300 flex flex-col h-full">
      <span className="text-xs bg-gray-200 px-2 py-1 rounded w-fit capitalize">
        {product.category}
      </span>
      <div className="h-48 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain"
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

        <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition">
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
