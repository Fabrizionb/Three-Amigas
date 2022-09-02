import React from "react";
import "../Form/Form.css";
import { useState, useContext } from "react";
import { cartContext } from "../../Store/cartContext";
import firestoreDB from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2'

const Form = () => {
  const { cart, setCart } = useContext(cartContext);
    const [userData, setUserData] = useState({
    name: "",
    email: "",
    telephone: "",
  });
  let navigate = useNavigate();
  const [orderFirebase, setOrderFirebase] = useState({
    id: "",
    complete: false,
  });
  // Read total from cart data
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  // Order maker
  const ordenDeCompra = {
    buyer: { ...userData },
    items: [...cart],
    total: total,
    date: new Date(),
  };
  async function handleSubmit(e) {
    e.preventDefault();

    const collectionRef = collection(firestoreDB, "orders");
    const order = await addDoc(collectionRef, ordenDeCompra);
    setOrderFirebase({ id: order.id, complete: true });
    Swal.fire({
      title: `Order Id ${order.id}`,
      text: `Save your order id for track your purchase`,
      imageUrl: 'https://res.cloudinary.com/dm01fzgtk/image/upload/v1661621605/thank-you-for-your-purchase-message-1_nwxsjm.png',
      imageWidth: 600,
      imageHeight: 420,
      imageAlt: 'Custom image',
    })
    navigate("/");
    setCart([]);
  }
  function inputChangeHandler(e) {
    const input = e.target;
    const value = input.value;
    const inputName = input.name;
    let copyUserData = { ...userData };
    copyUserData[inputName] = value;
    setUserData(copyUserData);
  }
  function handleReset(e) {
    setUserData({
      name: "",
      email: "",
      telephone: "",
    });
  }
  return (
    <div className='form-container container d-flex align-items-center justify-content-center'>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className='form-item mt-1'>
          <label className='' htmlFor='name'>
            Name:
          </label>
          <input
            onChange={inputChangeHandler}
            value={userData.name}
            name='name'
            type='text'
            placeholder='Name'></input>
        </div>
        <div className='form-item mt-1'>
          <label htmlFor='telephone'>Telephone: </label>
          <input
            onChange={inputChangeHandler}
            value={userData.telephone}
            name='telephone'
            type='text'
            placeholder='Telephone'></input>
        </div>
        <div className='form-item mt-1'>
          <label htmlFor='email'>Email: </label>
          <input
            onChange={inputChangeHandler}
            value={userData.email}
            name='email'
            type='text'
            placeholder='Email'></input>
        </div>
        <div>
          <button className='mt-2 btn-form' type='submit'>
            Checkout
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
