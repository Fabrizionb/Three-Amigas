
import CartItem from "../CartItem/CartItem";
import "../CartContainer/CartContainer.css";
import PaymentListContainer from "../paymentListContainer/PaymentListContainer";
import { cartContext } from "../Store/cartContext";
import React, { useContext } from "react";


const CartContainer = () => {
  
  console.log()
  return (
    <>
      {/* <!-- Cart Code Start--> */}

      <div className='container '>
        <div className='row  d-flex justify-content-center my-4'>
          <div className='col-md-8 '>
            <div className=' mb-4 ff'>
              <div className='card-header py-3'>
                <h5 className='mb-0'>
                  Cart - <strong id='cartS'> </strong>items
                </h5>
              </div>
              <div className='card-body'>
                {/* <!-- Single item --> */}

                <CartItem />
                


                {/* <!-- Single item --> */}
              </div>
            </div>
            <div className=' mb-4'>
              <div className='card-body p-3'>
                <p>
                  Deliver: <strong>10 days</strong> after making the purchase.
                </p>
                <p className='mb-0 date1' id='date1'>
                  Estimated Date:
                </p>
                <p className='mb-0 date2'>
                  <strong id='date2'></strong>
                </p>
              </div>
            </div>
          </div>

          <div className='col-md-4  '>
            <div className='w-100 mb-4 '>
              <div className='card-header py-3 '>
                <h5 className='mb-0'>Your Order</h5>
              </div>
              <div className='card-body'>
                <ul className='list-group list-group-flush finder'>
                  {/* <li
                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Productos
                                <span>$53.98</span>
                            </li>  */}
                  <li>
                    <p>Producto 1:</p>
                    <p className='text-end'>100</p>
                  </li>
                  <li>
                    <p>Producto 2: 400</p>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center px-0'>
                    <p>Free Shipping</p>
                  </li>

                  <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
                    <div>
                      <strong>Total</strong>
                      <strong>
                        : 500
                        <p className='mb-0'>(Tax Inc.)</p>
                      </strong>
                    </div>
                    <span id='anchor_strong'> </span>
                  </li>
                  <li>
                    <button
                      type='button'
                      id='checkOut'
                      className='checkOut btn btn-primary btn-lg btn-block'>
                      Checkout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=' mb-4 mb-lg-0'>
            <div className=''>
              <PaymentListContainer title='Payment Methods' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
