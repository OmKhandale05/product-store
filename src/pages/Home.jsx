import { useEffect, useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import api from "../services/api";
import ProductSkeleton from "../components/ProductSkeleton";
import SortFilter from "../components/SortFilter";
import PriceFilter from "../components/PriceFilter";

const Home = ({ search }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [priceRange, setPriceRange] = useState("");
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

  let priceFilteredProducts = [...filteredProduct];

  if (priceRange === "0-50") {
    priceFilteredProducts = priceFilteredProducts.filter(
      (product) => product.price <= 50
    );
  }

  if (priceRange === "50-100") {
    priceFilteredProducts = priceFilteredProducts.filter(
      (product) => product.price > 50 && product.price <= 100
    );
  }

  if (priceRange === "100-500") {
    priceFilteredProducts = priceFilteredProducts.filter(
      (product) => product.price > 100 && product.price <= 500
    );
  }

  if (priceRange === "500+") {
    priceFilteredProducts = priceFilteredProducts.filter(
      (product) => product.price > 500
    );
  }

  let sortedProducts = [...priceFilteredProducts];

  if (sort === "priceLow") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "priceHigh") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-center sm:justify-between gap-4  mb-6">
        <CategoryFilter category={category} setCategory={setCategory} />
        <div className="flex flex-wrap gap-3">
          <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
          <SortFilter sort={sort} setSort={setSort} />
        </div>
        
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
