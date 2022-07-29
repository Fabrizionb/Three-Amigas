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
      <h2>{props.data.name}</h2>
      <p>{props.data.description}</p>
      <h3>$ {props.data.price}</h3>
      {/* <Button text="Ver más"/>         */}
      <ItemCount />
    </div>
  </div>
  );
}

export default Card;
