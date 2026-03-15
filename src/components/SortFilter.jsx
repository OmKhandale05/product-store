const SortFilter = ({ sort, setSort}) => {
    return ( 
        <div>
            <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border px-4 py-2 rounded-lg"
        
            >
                <option value="">Sort By</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="rating">Rating</option>
            </select>
        </div>
    );
}
 
export default SortFilter;