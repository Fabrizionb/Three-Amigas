import React from "react";
import Card from "../card/Card";
import { NavLink } from "react-router-dom";
import "./ItemList.css";

function ItemList({ data, sortMinus, sortPlus }) {
  function onAdd(count) {
    console.log(`You add ${count} products`);
  }
  const radioGroup = [
    { name: "All", route: "/store/all",id:0 },
    { name: "Jeans", route: "/store/jeans",id:1 },
    { name: "Jackets", route: "/store/jackets",id:2 },
    { name: "Dresses", route: "/store/dresses",id:3 },
    { name: "Tops", route: "/store/tops",id:4 },
    { name: "Accesories", route: "/store/accesories",id:5 },
    { name: "Outlet", route: "/store/outlet",id:6 },
  ];
  let activeStyle = { color: "var(--first-color)" };
  return (
    <>
      <div className='container d-flex align-items-center justify-content-center'>
        <div className='row  d-flex mt-1 d-flex flex-wrap align-items-start '>
          <div className='col-md-2 '>
            <div className='col-md-6 col-lg-12 mb-5'>
              {/* <!-- Panel --> */}
              <h5 className='font-weight-bold dark-grey-text'>
                <strong>Order By</strong>
              </h5>
              <div className='divider'></div>
              <p onClick={() => sortMinus()} className='dark-grey-text sort'>
                Price: low to high
              </p>
              <p onClick={() => sortPlus()} className='dark-grey-text sort'>
                Price: high to low
              </p>
            </div>
            {/* <!-- Filter by category --> */}
            <div className='col-md-6 col-lg-12 mb-5'>
              <h5 className='font-weight-bold dark-grey-text'>
                <strong>Categories</strong>
              </h5>
              {/* <!-- Radio group --> */}
              <ul>
                {radioGroup.map((item) => (
                  <li className='nav-item' key={item.id}>
                    <NavLink
                      className='nav-link'
                      to={item.route}
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              {/* <!-- Radio group --> */}
            </div>
          </div>
          <div className='container col-10 d-flex align-items-center justify-content-center'>
            <div className=''>
              <div className='row d-flex align-items-center justify-content-center'>
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
        </div>
      </div>
    </>
  );
}

export default ItemList;
