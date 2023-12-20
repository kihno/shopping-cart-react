import { useEffect, useState } from "react";
import { fetchProducts } from "./api-mock/products-api";
import ProductsList from "./ProductsList";
import ShoppingCart from "./ShoppingCart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts().then((products) => {
      console.log("Fetched the products", products);
      setProducts(products);
    });
    setCart([
      { productId: 1, quantity: 2 },
      { productId: 3, quantity: 1 },
      { productId: 5, quantity: 5 }
    ]);
  }, []);

  return (
    <div>
      <h1>Coffee shop</h1>
      <div style={{ display: "flex "}}>
        <div style={{ width: "70%", padding: "10px" }}>
          <ProductsList products={products} />
        </div>
        <div style={{ width: "30%", backgroundColor: "lightskyblue", padding: "10px" }}>
          <ShoppingCart cart={cart} products={products} />
        </div>
      </div>
    </div>
  );
};

export default App;
