import { formatPrice } from "./helpers";

const Product = ({ product }) => {

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div style={{ border: "1px solid lightgray", padding: "5px", margin: "5px"}}>
      <div>
      <p>{product.name}</p>
      <img src={`images/${product.image}`} width="200px" />
      </div>
      <p>{formatPrice(product.price)}</p>
      <button onClick={handleAdd}>Add to cart</button>
    </div>
  )
};

export default Product;
