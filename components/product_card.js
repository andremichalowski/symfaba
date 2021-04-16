import Link from 'next/link'
// import ProductPartsBreakdown from './product_parts_breakdown'


const ProductCard = (props) => {
  console.log(props)
  return (
    <div>
      <h1> {props.name}</h1>
      <div style={{"display": "flex", "height": "200px"}}>
          <img src={props.image} alt="product image" />
      </div>
      <p> {props.description}</p>
      {/* <p> Components: {props.product.components}</p> */}
      {/* <p> Price: {props.product.price}</p> */}
    </div>
  );
}
export default ProductCard;