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

  const addToCart = (product) => {
    const isProductInCart = Boolean(
      cart.find((item) => item.productId === product.id)
    );

    if (isProductInCart) {
      setCart(
        cart.map((item) => {
          if (item.productId === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        })
      );
    } else {
      setCart([...cart, { productId: product.id, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h1>Coffee shop</h1>
      {error && console.log(error)}
      {isFetching && <div>Loading products...</div>}
      {products && (
        <div style={{ display: "flex "}}>
          <div style={{ width: "70%", padding: "10px" }}>
            <ProductsList products={products} handleAdd={addToCart} />
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
