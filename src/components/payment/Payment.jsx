import "../payment/Payment.css";
function Payment(props) {
  return (
    <>
      <div className='col-3 text-center'>
        <img
          className='img-payment'
          src={props.data.img}
          alt={props.data.description}
        />
        <h6>{props.data.name}</h6>
      </div>
    </>
  );
}
export default Payment;
