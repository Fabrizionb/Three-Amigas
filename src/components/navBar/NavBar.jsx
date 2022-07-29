import CartWidget from "../cartwidget/CartWidget";
import "../navBar/NavBar.css";

function NavBar() {
  return (
    <header className='container'>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            {" "}
            <img
              src='./img/small-logo.svg'
              alt='small logo'
              className='logoStyle'
            />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Store
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  Categories
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                    <img src='../img/002-male-clothes.png'/> Cloth
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                    <img src='../img/007-sneakers.png'/> Shoes
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                    <img src='../img/accesorios.png'/> Accessories
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                    <img src='../img/descuento.png'/> Outlet
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  Social Media
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      <img src='../img/004-instagram.png'/> Instagram
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                    <img src='../img/003-facebook.png'/> Facebook
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                    <img src='../img/005-tik-tok.png'/> Tik Tok
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                    <img src='../img/006-whatsapp.png'/> Whats App
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className='d-flex'>
              <CartWidget />
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
