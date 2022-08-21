import React from "react";
import "../Form/Form.css";
import { useState, useContext } from "react";
import { cartContext } from "../Store/cartContext";
const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    telephone: "",
  });
  const { cart } = useContext(cartContext)
  function handleSubmit(e) {
      e.preventDefault();
      var myCurrentDate = new Date()
    console.log(userData,myCurrentDate,cart);
    setUserData({
      name: "",
      email: "",
      telephone: "",
    });
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
          {/* <button className='mt-2 btn-form' type='reset'>
            Cancel
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default Form;
