import "./Card.css";
import { Link } from "react-router-dom";

function Card({ name, price, image, category, description, stock, onAdd, id }) {
  return (
    <>
      {/*<!-- Card --> */}
      <div className='card card-ecommerce f col-3 text-center'>
        {/*<!-- Card image --> */}
        <div className='view overlay'>
          <img src={image} className='img-fluid img-car' alt={description} />
          <div className='mask rgba-white-slight waves-effect waves-light'></div>
        </div>
        {/*<!-- Card image --> */}
        {/* <!-- Card content --> */}
        <div className='card-body'>
          {/*<!-- Category & Title --> */}
          <h5 className='card-title mb-1'>
            <strong>
              <h4 href='' className='dark-grey-text'>
                {name}
              </h4>
            </strong>
          </h5>
          <p>Category: {category}</p>
          <span className='badge badge-danger mb-1'>Stock: {stock}</span>
          {/*<!-- Rating --> */}
          {/* <p>Description: {description}</p> */}
          {/* <!-- Card footer --> */}
          <div className='card-footer pb-0 '>
            <div className='row mb-0 text-center mx-auto'>
              <span className='float-left mb-1'>
                Price: <strong>{price}$</strong>
              </span>
              <Link to={`/detalle/${id}`}>
                <p>View More Details</p>
              </Link>
              {/* <ItemCount onAdd={onAdd} stock={stock} /> */}
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
