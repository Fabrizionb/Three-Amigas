import React, { useState, useContext } from "react";
import ItemCount from "../itemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { cartContext } from "../../Store/cartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mjeAdd = () => {
  toast("🦄 Product added to cart!", {
    position: "top-right",
    autoClose: 200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
function ItemDetail({
  name,
  price,
  image,
  imageTwo,
  imageThree,
  category,
  description,
  stock,
  id,
}) {
  const { addToCart } = useContext(cartContext);
  const [quantity, setQuantity] = useState(0);
  function handleAdd(quantity) {
    const itemToCart = {
      name,
      price,
      image,
      category,
      description,
      stock,
      id,
      quantity,
    };
    addToCart(itemToCart, quantity);
    setQuantity(quantity);
    mjeAdd();
  }
  return (
    <>
      <ToastContainer />
      <div className='col-md-6 d-flex align-items-center'>
        <div
          id='carouselExampleIndicators'
          className='carousel  carousel-dark slide'
          data-bs-ride='carousel'>
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='1'
              aria-label='Slide 2'></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='2'
              aria-label='Slide 3'></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src={image} className='d-block w-100 rounded' alt={id} />
            </div>
            <div className='carousel-item'>
              <img src={imageTwo} className='d-block w-100 rounded' alt={id} />
            </div>
            <div className='carousel-item'>
              <img
                src={imageThree}
                className='d-block w-100 rounded'
                alt={id}
              />
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='prev'>
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='next'>
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
      <div className='col-md-6 f'>
        <div className='product p-4'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <Link to={`/store/all`}>
                <i className='fa fa-long-arrow-left'></i>
                <span className='ml-1'>Back</span>
              </Link>
            </div>
          </div>
          <div className='mt-4 mb-3'>
            <span className='text-uppercase text-muted brand'>{category}</span>
            <h3 className='text-uppercase mt-2 mb-4'>{name}</h3>
            <p className='about mb-3'>{description}</p>
          </div>
          <div className='price d-flex flex-row align-items-center '>
            <h5>
              Price:
              <span className='act-price '> ${price}</span>
            </h5>
          </div>
          <div className='ml-2 text-center'>
            <p className='about'>
              <span>Stock: {stock}</span>
            </p>
            <i className='fa fa-heart text-muted '></i>
            <i className='fa fa-share-alt text-muted'></i>
          </div>
          <div className='cart mt-4 d-flex flex-row justify-content-center alig-items-center'>
            {quantity === 0 ? (
              <ItemCount onAdd={handleAdd} stock={stock} />
            ) : (
              <Link to={"/cart"}>
                <p className='goCart'>Go to Cart</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
