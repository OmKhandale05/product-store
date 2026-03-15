const SortFilter = ({ sort, setSort}) => {
    return ( 
        <div className="flex items-center gap-2">
            <label className=" font">Sort By:</label>
            <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-10 px-3 border rounded-lg text-sm outline-none"
        
            >
                <option value="">Select</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="rating">Rating</option>
            </select>
        </div>
    );
}

export default SortFilter;