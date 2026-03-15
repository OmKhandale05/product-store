import { useEffect, useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import api from "../services/api";
import SearchBar from "../components/SearchBar";
import ProductSkeleton from "../components/ProductSkeleton";



const Home = ({search}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  // const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);

    const url =
      category === "all" ? "/products" : `/products/category/${category}`;
    api
      .get(url)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8">
        {[...Array(8)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  const filteredProduct = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()) 
  
  );
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        
      </div>
      <CategoryFilter category={category} setCategory={setCategory} />
      <div className="p-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProduct.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
