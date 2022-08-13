import "./CartWidget.css";
import { NavLink } from "react-router-dom";
function CartWidget(props) {
  let activeStyle = { color: "var(--first-color)" };
  return (
    <>
      <NavLink
        className='nav-link'
        to={"/cart"}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <button type='button' className='btn btn-primary'>
          Cart <span className='badge bg-secondary mx-1'>4</span>
          <i className='fa-solid fa-cart-shopping'></i>
        </button>
      </NavLink>
    </>
  );
}

export default CartWidget;
