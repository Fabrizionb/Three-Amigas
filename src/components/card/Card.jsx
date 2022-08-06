import ItemCount from "../itemCount/ItemCount";

import "./Card.css";

function Card({ name, price, image, category, description, stock, onAdd }) {
  return (
    <div className='col-lg-3 col-md-6 col-12 mb-3 d-flex align-items-stretch cardContainer'>
      <div className='card'>
        <img src={image} className='card-img-top' alt='Card Image' />
        <div className='card-body d-flex flex-column'>
          <h4 className='card-title'>{name}</h4>
          <p className='card-text mb-4 '>{description}</p>
          <p>Category: {category}</p>
          <p>Stock: {stock}</p>
          <h6 className='mb-1'>
            Price: $<strong>{price}</strong>
          </h6>
          <ItemCount onAdd={onAdd} stock={stock} />
        </div>
      </div>
    </div>
  );
}

export default Card;
