import React from "react";
import "../CartContainer/CartContainer.css";
import ItemCount from "../itemCount/ItemCount";
const CartItem = (producto) => {
  return (
    <>
      <div className='row rowItem'>
        <div className='col-lg-3 col-md-3  col-sm-3  col-xs-3 mb-4 mb-lg-0 mb-5'>
          {/* <!-- Image --> */}
          <div
            className='bg-image hover-overlay hover-zoom ripple rounded mt-3 ms-4 '
            data-mdb-ripple-color='light'>
            <img src='https://picsum.photos/200/300' className='w-100' alt='' />
            <a href='#!'>
              <div className='mask'></div>
            </a>
          </div>
          {/* <!-- Image --> */}
        </div>

        <div className='col-lg-5 col-md-6 mb-4 mb-lg-0 mt-3'>
          {/* <!-- Data --> */}
          <p>
            <strong>Product Name</strong>
          </p>
          <p>Description: Product Description</p>
          <p>
            Price: <strong>$ Product Price</strong>
          </p>
          <p>
            Subtotal: <strong>$ Subtotal</strong>
          </p>

          <i className='fas fa-trash'></i>
          {/* <!-- Data --> */}
        </div>

        <div className='col-lg-4 col-md-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center'>
          {/* <!-- Quantity --> */}
          <div className=' mb-4 '>
            <ItemCount />
          </div>
          {/* <!-- Quantity --> */}
        </div>
        <hr className='my-4' />
      </div>
    </>
  );
};

export default CartItem;
