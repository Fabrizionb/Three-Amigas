import React from "react";
import "../CartContainer/CartContainer.css";
import ItemCount from "../itemCount/ItemCount";

const CartItem = (product) => {
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
          <p>
            <strong>{product.name}</strong>
          </p>
          <p>Description: {product.description}</p>
          <p>
            Price: <strong>$ {product.price}</strong>
          </p>
          <p>
            Subtotal: <strong>$ {product.price * product.quantity}</strong>
          </p>

          <i className='fas fa-trash'></i>
          {/* <!-- Data --> */}
        </div>

        <div className='col-lg-4 col-md-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center'>
          {/* <!-- Quantity --> */}
          <div className=' mb-4 '>
            <ItemCount onAdd={product.handleAdd} stock={product.stock}/>
          </div>
          {/* <!-- Quantity --> */}
        </div>
        <hr className='my-4' />
      </div>
    </>
  );
};

export default CartItem;
