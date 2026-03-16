const CategoryFilter = ({category, setCategory}) => {

    const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"]
    return ( 
        <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((cat)=>(
                <button
                key={cat}
                onClick={()=> setCategory(cat)}
                className={`px-4 py-2 border rounded-lg capitalize transition text-sm sm:px-4 sm:text-base   
                    ${category === cat 
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                    }
                
                `}>
                    {cat}

                </button>
            ))}
        </div>
     );
}
 
export default CategoryFilter;