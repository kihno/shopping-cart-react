import { formatPrice } from "./helpers";

const Product = ({ product, handleAdd }) => {
  return (
    <div style={{ border: "1px solid lightgray", padding: "5px", margin: "5px"}}>
      <div>
      <p>{product.name}</p>
      <img src={`images/${product.image}`} width="200px" />
      </div>
      <div>{formatPrice(product.price)}</div>
      <button onClick={() => handleAdd(product)}>Add to cart</button>
    </div>
  )
};

export default Product;
