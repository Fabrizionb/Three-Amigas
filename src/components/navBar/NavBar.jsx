import CartWidget from "../cartwidget/CartWidget";
import "../navBar/NavBar.css";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const menu = [
    { url: "/", title: "Home", id: 1 },
    { url: "/store", title: "Store", id: 2 },
  ];
  const dropDown = [
    {
      url: "https://www.instagram.com/",
      title: "Instagram",
      id: 1,
      image:
        "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660145470/proyecto%20coderhouse%20react/004-instagram_qonsfr.png",
    },
    {
      url: "https://www.tiktok.com/",
      title: "TikTok",
      id: 2,
      image:
        "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660145470/proyecto%20coderhouse%20react/005-tik-tok_u6a6b3.png",
    },
    {
      url: "https://www.facebook.com/",
      title: "Facebook",
      id: 3,
      image:
        "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660145470/proyecto%20coderhouse%20react/003-facebook_bipt8b.png",
    },
    {
      url: "https://web.whatsapp.com/",
      title: "WhatsApp",
      id: 4,
      image:
        "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660145717/proyecto%20coderhouse%20react/006-whatsapp_wldsrd.png",
    },
  ];
  let activeStyle = { color: "var(--first-color)" };
  return (
    <header className='container sticky-top'>
      <nav className='navbar navbar-expand-lg bg-light '>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            <img
              src='https://res.cloudinary.com/dm01fzgtk/image/upload/v1660145469/proyecto%20coderhouse%20react/small-logo_s940bb.svg'
              alt='small logo'
              className='logoStyle'
            />
          </Link>

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
              {menu.map((link) => (
                <li className='nav-item' key={link.id}>
                  <NavLink
                    className='nav-link'
                    to={link.url}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }>
                    {link.title}
                  </NavLink>
                </li>
              ))}

              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='/#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  Social Media
                </a>

                <ul className='dropdown-menu'>
                  {dropDown.map((link) => (
                    <li key={link.id}>
                      <a
                        className='dropdown-item'
                        target='_blank'
                        rel='noopener noreferrer'
                        href={link.url}>
                        <img src={link.image} alt="link"/> {link.title}
                      </a>
                    </li>
                  ))}
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
