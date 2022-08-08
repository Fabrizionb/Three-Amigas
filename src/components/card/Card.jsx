import ItemCount from "../itemCount/ItemCount";
import "./Card.css";

function Card({
  name,
  price,
  image,
  category,
  description,
  stock,
  onAdd,
  count,
}) {
  return (
    <>
      {/*<!-- Card --> */}
      <div className='card card-ecommerce'>
        {/*<!-- Card image --> */}
        <div className='view overlay'>
          <img src={image} className='img-fluid img-car' alt={description} />
          <a>
            <div className='mask rgba-white-slight waves-effect waves-light'></div>
          </a>
        </div>
        {/*<!-- Card image --> */}
        {/* <!-- Card content --> */}
        <div className='card-body'>
          {/*<!-- Category & Title --> */}
          <h5 className='card-title mb-1'>
            <strong>
              <a href='' className='dark-grey-text'>
                {name}
              </a>
            </strong>
          </h5>
          <p>Category: {category}</p>
          <span className='badge badge-danger mb-2'>Stock: {stock}</span>
          <p>contador: {count}</p>
          {/*<!-- Rating --> */}
          <ul className='rating d-flex'>
            <p>Rating: </p>
            <li>
              <i className='fas fa-star blue-text'></i>
            </li>
            <li>
              <i className='fas fa-star blue-text'></i>
            </li>
            <li>
              <i className='fas fa-star blue-text'></i>
            </li>
            <li>
              <i className='fas fa-star blue-text'></i>
            </li>
            <li>
              <i className='fas fa-star grey-text'></i>
            </li>
          </ul>
          <p>Description: {description}</p>
          {/* <!-- Card footer --> */}
          <div className='card-footer pb-0 '>
            <div className='row mb-0 text-center ff'>
              <span className='float-left mb-1'>
                Price: <strong>{price}$</strong>
              </span>

              <ItemCount onAdd={onAdd} count={count} stock={stock} />
            </div>
          </div>
        </div>
        {/* <!-- Card content --> */}
      </div>
      {/*<!-- Card --> */}
    </>
  );
}

export default Card;
