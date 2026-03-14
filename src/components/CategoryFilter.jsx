const CategoryFilter = ({category, setCategory}) => {

    const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"]
    return ( 
        <div>
            {categories.map((cat)=>(
                <button
                key={cat}
                onClick={()=> setCategory(cat)}
                className={`mx-2 px-4 py-2 border rounded-lg capitalize transition   
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