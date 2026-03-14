const ProductCard = ({ product}) => {
    return ( 
        <div className="border p-4 rounded-lg shadow hover-shadow-lg transition">
            <img 
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto object-contain"
            />
            <h2 className="font-semibold text-sm mt-3 line-clamp-2">{product.title}</h2>
            <p className="text-green-600 font-bold mt-2">${product.price}</p>
        </div>
     );
}
 
export default ProductCard;