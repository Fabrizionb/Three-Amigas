import ItemCount from "../itemCount/ItemCount";

import "./Card.css";

function Card({ name, price, image, category, description, init, stock }) {
  return (
    <div className='col-lg-3 mb-3 d-flex align-items-stretch'>
      <div className='card'>
        <img src={image} className='card-img-top' alt='Card Image' />
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text mb-4'>{description}</p>
          <p>Category: {category}</p>
          <h3>$ {price}</h3>
          <ItemCount initial={init} stock={stock} onAdd={onAdd}/>
        </div>
      </div>
    </div>
  );
}

export default Card;
