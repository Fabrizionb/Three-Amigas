import React, { useContext } from "react";
import PaymentListContainer from "../paymentListContainer/PaymentListContainer";
import CartItem from "../CartItem/CartItem";
import Form from "../Form/Form";
import { cartContext } from "../../Store/cartContext";

const date = () => {
  var myCurrentDate = new Date();
  var myFutureDate = new Date(myCurrentDate);
  myFutureDate.setDate(myFutureDate.getDate() + 10);
  return myFutureDate.toDateString();
};

const CartFull = () => {
  const { cart, subTotal, clear, totalPrice } = useContext(cartContext);

  return (
    <>
      <div className='container mt-5 mb-5'>
        <div className='row  d-flex justify-content-center my-4 mb-5'>
          <div className='col-md-8  mb-5'>
            <div className=' mb-4 '>
              <div className='card-header py-3'>
                <h5 className='mb-0'>
                  Cart - <strong id='cartS'> </strong>items
                </h5>
              </div>
              <div className='card-body'>
                {/* <!-- Single item --> */}

                {cart.map((item) => (
                  <CartItem
                    subTotal={subTotal}
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    category={item.category}
                    description={item.description}
                    count={item.count}
                    stock={item.stock}
                    quantity={item.quantity}
                    id={item.id}
                  />
                ))}

                {/* <!-- Single item --> */}
                <span className='emptyTitle'>
                  <h5 className='text-center ' onClick={clear}>
                    Empty Cart <i className='fas fa-trash mb-4'></i>
                  </h5>
                </span>
              </div>
            </div>
            <div className=' mb-4'>
              <div className='card-body p-3'>
                <p>
                  Deliver: <strong className='futureDate'>10 days</strong> after
                  making the purchase.
                </p>
                <p className='mb-0 date1' id='date1'>
                  Estimated Date if buy today:{" "}
                  <span className='futureDate'>{date()}</span>
                </p>
                <p className='mb-0 date2'>
                  <strong id='date2'></strong>
                </p>
              </div>
            </div>
          </div>

          <div className='col-md-4  '>
            <div className=' mb-1 '>
              <div className='card-header py-3 '>
                <h5 className=''>Your Order</h5>
              </div>
              <div className='card-body '>
                <ul className='list-group list-group-flush finder'>
                  {cart.map((item) => (
                    <li key={item.id}>
                      <p>
                        {item.name}: {item.price} x {item.quantity} ={" "}
                        <strong className='futureDate'>
                          {item.price * item.quantity}
                        </strong>
                      </p>
                    </li>
                  ))}
                  <li className='list-group-item d-flex justify-content-between align-items-center px-0'>
                    <p className='futureDate'>Free Shipping</p>
                  </li>

                  <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
                    <div>
                      <strong>Total: </strong>
                      <strong className='futureDate'>
                        {totalPrice()}
                        <p className='mb-0'>(Tax Inc.)</p>
                      </strong>
                    </div>
                    <span id='anchor_strong'> </span>
                  </li>
                  
                </ul>

                <Form />
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

export default CartFull;
