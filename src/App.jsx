import { useEffect, useState } from "react";
import { fetchProducts } from "./api-mock/products-api";
import ProductsList from "./ProductsList";
import ShoppingCart from "./ShoppingCart";
import { useQuery } from "react-query";

const App = () => {
  const [cart, setCart] = useState([]);
  const {
    data: products,
    isFetching,
    error,
  } = useQuery("get-products", () => fetchProducts());

  useEffect(() => {
    setCart([
      { productId: 1, quantity: 2 },
      { productId: 3, quantity: 1 },
      { productId: 5, quantity: 5 }
    ]);
  }, []);

  return (
    <div>
      <h1>Coffee shop</h1>
      {error && console.log(error)}
      {isFetching && <div>Loading products...</div>}
      {products && (
        <div style={{ display: "flex "}}>
          <div style={{ width: "70%", padding: "10px" }}>
            <ProductsList products={products} />
          </div>
          <div style={{ width: "30%", backgroundColor: "lightskyblue", padding: "10px" }}>
            <ShoppingCart cart={cart} products={products} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
