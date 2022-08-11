import React from "react";
import Card from "../card/Card";
import { Link, NavLink } from "react-router-dom";

function ItemList({ data }) {
  function onAdd(count) {
    console.log(`You add ${count} products`);
  }
  let activeStyle = { color: "var(--first-color)" };
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

              {/* <!-- Radio group --> */}

              <ul>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    to={"/store"}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }>
                    All
                  </NavLink>
                </li>

                <li className='nav-item'>
                  <NavLink 
                    className='nav-link'
                    to={"/store/jeans/"}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }>
                    Jeans
                  </NavLink>
                </li>

                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    to={"/store/dresses"}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }>
                    Dresses
                  </NavLink>
                </li>

                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    to={"/store/tops"}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }>
                    Tops
                  </NavLink>
                </li>

                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    to={"/store/outlet"}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }>
                    Outlet
                  </NavLink>
                </li>
              </ul>

              {/* <!-- Radio group --> */}
            </div>
          </div>
          <div className='col-md-10 row'>
            {data.map((item) => (
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
                id={item.id}
              />
            ))}
            {/*<!-- Grid column --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemList;
