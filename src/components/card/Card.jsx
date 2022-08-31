import "./Card.css";
import { Link } from "react-router-dom";

function Card({ name, price, image, category, description, stock, onAdd, id }) {
  return (
    <>
      {/*<!-- Card --> */}
      <div className='card card-ecommerce  text-center col-12 col-md-6 col-lg-3 '>
        <Link to={`/detalle/${id}`}>
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
                <h6 href='' className='dark-grey-text name'>
                  {name}
                </h6>
              </strong>
            </h5>
            <p className='h6 category'>Category: {category}</p>
            <p className='category badge-danger mb-1'>Stock: {stock}</p>
            {/*<!-- Rating --> */}
            {/* <p>Description: {description}</p> */}
            {/* <!-- Card footer --> */}
            <div className='card-footer pb-0 '>
              <div className='row mb-0 text-center mx-auto'>
                <span className='float-left mb-1'>
                  <p className='h5'>
                    Price: <strong>{price}$</strong>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </Link>
        {/* <!-- Card content --> */}
      </div>
      {/*<!-- Card --> */}
    </>
  );
}

export default Card;
