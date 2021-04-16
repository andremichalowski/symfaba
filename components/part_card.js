

const PartCard = (props) => {
  console.log(props)
  return (
    <div>

      <h1> {props.name}</h1>
      <p > {props.description}</p>
      <div style={{"display": "flex", "height": "75px"}}>
        <img src={props.image} alt="product image" />
      </div>
      
      
      {/* <p> Price: {props.product.price}</p> */}
    </div>
  );
}
export default PartCard;