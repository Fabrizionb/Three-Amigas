import React from "react";
import Card from "../card/Card";

function StoreList({ data }) {
  function onAdd(count) {
    console.log(`You add ${count} products`);
  }

  return (
    <>
      <div className='container '>
        <div className='row  d-flex mt-5 d-flex flex-wrap align-items-start '>
          <div className='col-md-2 '>
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
                //   checked
                />
                <label
                  htmlFor='radio100'
                  className='form-check-label dark-grey-text'>
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
                />{" "}
                <label
                  htmlFor='radio101'
                  className='form-check-label dark-grey-text'>
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
                <label
                  htmlFor='radio102'
                  className='form-check-label dark-grey-text'>
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
                <label
                  htmlFor='radio103'
                  className='form-check-label dark-grey-text'>
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
                <label
                  htmlFor='radio103'
                  className='form-check-label dark-grey-text'>
                  Outlet
                </label>{" "}
              </div>

              {/* <!-- Radio group --> */}
            </div>
          </div>

          <div className='col-md-10  row 
'>
            {
              data.map((item) => (
                <Card
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  category={item.category}
                  description={item.description}
                  count={item.count}
                  stock={item.stock}
                  onAdd={onAdd}
                />
              ))
              
            }

            {/*<!-- Grid column --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default StoreList;
