const Product = ({ product }) => {
  return (
    <div style={{ border: "1px solid lightgray", padding: "5px", margin: "5px"}}>
      <div>
      <p>
        {product.name} ( price: ${product.price})
      </p>
      <img src={`images/${product.image}`} width="200px" />
      </div>
      <button>Add to cart</button>
    </div>
  )
};

export default Product;
