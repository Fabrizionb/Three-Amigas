import "../payment/Payment.css";

function Payment({ name, id, img, description }) {
  return (
    <>
      <div className='col-3 text-center'>
        <img className='img-payment' src={img} alt={description} />
        <h6 className={id}>{name}</h6>
      </div>
    </>
  );
}
export default Payment;
