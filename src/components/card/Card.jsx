import '../card/Card.css'
import ItemCount from "../itemCount/ItemCount";
function Card(props) {
  const mask = { backgroundColor: "rgba(251, 251, 251, 0.15)" };

  return (
    <div className="card">
    <div className="card-img">
      <img src={props.data.image} alt={props.data.description} />
    </div>
    <div className="card-detail card-body">
      <h4>{props.data.name}</h4>
      <p>{props.data.description}</p>
      <p>Category: {props.data.category}</p>
      <h3>$ {props.data.price}</h3>
      {/* <Button text="Ver más"/>         */}
      <ItemCount initial={1} stock={30} />
    </div>
  </div>
  );
}

export default Card;
