import "../CartContainer/CartContainer.css";
import React, { useContext } from "react";
import { cartContext } from "../../Store/cartContext";
import { Link } from "react-router-dom";

const CartItem = (product) => {
  const { removeItem } = useContext(cartContext);

  return (
    <>
      <div className='row rowItem'>
        <div className='col-lg-3 col-md-3  col-sm-3  col-xs-3 mb-4 mb-lg-0 mb-5'>
          {/* <!-- Image --> */}
          <div
            className='bg-image hover-overlay hover-zoom ripple rounded mt-3 ms-4 '
            data-mdb-ripple-color='light'>
            <img src={product.image} className='w-100' alt='' />
            <a href='#!'>
              <div className='mask'></div>
            </a>
          </div>
          {/* <!-- Image --> */}
        </div>
        <div className='col-lg-5 col-md-6 mb-4 mb-lg-0 mt-3'>
          {/* <!-- Data --> */}
          <h3 className='cartInfo mb-4'>
            <strong>{product.name}</strong>
          </h3>
          <p className='mb-4'>Description: {product.description}</p>
          <p>
            Price: <strong className='cartInfo'>$ {product.price}</strong>
          </p>
          <h5>
            stock:
            <span className='act-price '>{product.stock}</span>
          </h5>
          <p>
            Quantity in cart:{" "}
            <strong className='cartInfo'>{product.quantity}</strong>
          </p>
          <Link to={`/detalle/${product.id}`}>
            <p className='text-muted mutedCart'>Modify amount here</p>
          </Link>
          <p>
            Subtotal:{" "}
            <strong className='cartInfo'>
              $ {product.quantity * product.price}
            </strong>
          </p>
          <i
            onClick={() => removeItem(product.id)}
            title='Delete Item'
            className='fas fa-trash deleteItem'></i>
          {/* <!-- Data --> */}
        </div>
        <hr className='my-4' />
      </div>
    </>
  );
};

export default CartItem;
