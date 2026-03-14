import { useEffect, useState } from "react";
import api from "../services/api";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="p-10 grid grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg">
          <img src={product.image} className="h-40 mx-auto"/>
          <h2 className="font-bold mt-2 text-sm">{product.title}</h2>
          <p className="text-green-600 font-semibold">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
