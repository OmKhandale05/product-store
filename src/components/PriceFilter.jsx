const PriceFilter = ({ priceRange, setPriceRange }) => {
    return (
        <div className="flex items-center gap-2">
            <label className=" font">Price:</label>
        <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        className="h-10 px-3 border rounded-lg text-sm outline-none"
        
        >
            <option value="">All Prices</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-500">$100 - $500</option>
            <option value="500+">$500+</option>


        </select>

        </div>
        
     );
}
 
export default PriceFilter;