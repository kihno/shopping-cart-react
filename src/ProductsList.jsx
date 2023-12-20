import Product from "./Product";

const ProductsList = ({ products, handleAdd }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => (
        <Product key={product.id} product={product} handleAdd={handleAdd} />
      ))}
    </div>
  )
};

export default ProductsList;
