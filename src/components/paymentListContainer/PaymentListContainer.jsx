import React from "react";
import paymentArray from "../../data/paymentMethod.js";
import Payment from "../payment/Payment";

function PaymentListContainer(props) {
  return (
    <>
      <h4 className='text-center mt-5 paymentTitle'>{props.title}</h4>
      <div div className='row payment-data-container container mt-3'>
        <div className='row payment'>
          {paymentArray.map((item) => (
            <Payment
              key={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
              category={item.category}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PaymentListContainer;
