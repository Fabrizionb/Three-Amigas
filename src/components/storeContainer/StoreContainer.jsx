import React from "react";

import "./StoreContainer.css";

const StoreContainer = () => {
  return (
    <div className='container '>
      <div className='row justify-content-center d-flex align-items-center justify-content-center'>
        <div className='col-md-3 '>
          <div className='col-md-6 col-lg-12 mb-5'>
            {/* <!-- Panel --> */}
            <h5 className='font-weight-bold dark-grey-text'>
              <strong>Order By</strong>
            </h5>
            <div className='divider'></div>
            <p className='blue-text'>
              <a>Default</a>
            </p>
            <p className='dark-grey-text'>
              <a>Price: low to high</a>
            </p>
            <p className='dark-grey-text'>
              <a>Price: high to low</a>
            </p>
          </div>

          {/* <!-- Filter by category --> */}
          <div className='col-md-6 col-lg-12 mb-5'>
            <h5 className='font-weight-bold dark-grey-text'>
              <strong>Categories</strong>
            </h5>
            <div className='divider'></div>
            {/* <!-- Radio group --> */}
            <div className='form-group '>
              {" "}
              <input
                className='form-check-input'
                name='group100'
                type='radio'
                id='radio100'
                defaultChecked={this}
              />
              <label for='radio100' className='form-check-label dark-grey-text'>
                All
              </label>{" "}
            </div>
            <div className='form-group'>
              {" "}
              <input
                className='form-check-input'
                name='group100'
                type='radio'
                id='radio101'
                checked
              />{" "}
              <label for='radio101' className='form-check-label dark-grey-text'>
                Clothes
              </label>{" "}
            </div>
            <div className='form-group'>
              {" "}
              <input
                className='form-check-input'
                name='group100'
                type='radio'
                id='radio102'
              />
              <label for='radio102' className='form-check-label dark-grey-text'>
                Shoes
              </label>{" "}
            </div>
            <div className='form-group'>
              {" "}
              <input
                className='form-check-input'
                name='group100'
                type='radio'
                id='radio103'
              />
              <label for='radio103' className='form-check-label dark-grey-text'>
                Accesories
              </label>{" "}
            </div>
            <div className='form-group'>
              {" "}
              <input
                className='form-check-input'
                name='group100'
                type='radio'
                id='radio104'
              />
              <label for='radio103' className='form-check-label dark-grey-text'>
                Outlet
              </label>{" "}
            </div>

            {/* <!-- Radio group --> */}
          </div>
        </div>

        <div className='col-md-9 d-flex mt-5 d-grid  row ada'>
          {/*<!-- Grid column --> */}
          <div className='col-lg-4 col-md-12 mb-3 ide'>
            {/*<!-- Card --> */}
            <div className='card card-ecommerce'>
              {/*<!-- Card image --> */}
              <div className='view overlay'>
                <img
                  src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/6.jpg'
                  className='img-fluid'
                  alt=''
                />
                <a>
                  <div className='mask rgba-white-slight waves-effect waves-light'></div>
                </a>
              </div>
              {/*<!-- Card image --> */}
              {/* <!-- Card content --> */}
              <div className='card-body'>
                {/*<!-- Category & Title --> */}
                <h5 className='card-title mb-1'>
                  <strong>
                    <a href='' className='dark-grey-text'>
                      Headphones
                    </a>
                  </strong>
                </h5>
                <span className='badge badge-danger mb-2'>bestseller</span>
                {/*<!-- Rating --> */}
                <ul className='rating d-flex'>
                  <p>Rating: </p>
                  <li>
                    <i className='fas fa-star blue-text'></i>
                  </li>
                  <li>
                    <i className='fas fa-star blue-text'></i>
                  </li>
                  <li>
                    <i className='fas fa-star blue-text'></i>
                  </li>
                  <li>
                    <i className='fas fa-star blue-text'></i>
                  </li>
                  <li>
                    <i className='fas fa-star grey-text'></i>
                  </li>
                </ul>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adip</p>
                {/* <!-- Card footer --> */}
                <div className='card-footer pb-0 '>
                  <div className='row mb-0 text-center'>
                    <span className='float-left mb-1'>
                      Price: <strong>1439$</strong>
                    </span>
                    <span className='float-right'>
                      <a
                        className=''
                        data-toggle='tooltip'
                        data-placement='top'
                        title=''
                        data-original-title='Add to Cart'>
                        <i className='fas fa-shopping-cart ml-3'></i>Add to Cart
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Card content --> */}
            </div>
            {/*<!-- Card --> */}
          </div>
          {/*<!-- Grid column --> */}
        </div>
      </div>
    </div>
  );
};

export default StoreContainer;
