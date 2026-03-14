import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import api from "../services/api";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {console.log(err);
      setLoading(false);
      });
  }, []);

  if(loading) {
    return (
        <div className="text-center mt-20 text-xl font-semibold">
            Loading products...
        </div>
    )
  }
  return (
    <div className="p-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default Home;
