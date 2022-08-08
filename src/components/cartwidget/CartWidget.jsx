import "./CartWidget.css";

function CartWidget(props) {
  const mask = { backgroundColor: "rgba(251, 251, 251, 0.15)" };

  return (
    <>
      <button
        onClick={() => alert("Click event")}
        className='btn btn-outline-dark navCart '
        id='btnCart'
        type='button'>
        <i className='fa-solid fa-cart-shopping'></i> Cart{" "}
        <span
          className='badge bg-dark text-white ms-1 rounded-pill cart'
          id='cart'>
          0
        </span>
      </button>
    </>
  );
}

export default CartWidget;
