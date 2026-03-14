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
      <div className="text-sm text-semibold text-yellow-600 mt-1">
        {product.rating.rate} ({product.rating.count})
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
