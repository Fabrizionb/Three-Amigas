import "../footer/Footer.css";
function Footer() {
  return (
    <footer className='text-center text-white gradient-custom footer mt-auto container'>
      {/* <!-- Grid container --> */}
      <div className='container pt-4'>
        {/* <!-- Section: Social media --> */}
        <section className='mb-4'>
          {/* <!-- Google --> */}
          <a
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            href='mailto: fabrizionbertolo@gmail.com'
            role='button'
            data-mdb-ripple-color='dark'
            target='_blank'>
            <i className='fab fa-google'></i>
          </a>

          {/* <!-- Linkedin --> */}
          <a
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            href='https://www.linkedin.com/in/fabrizio-bertolo/'
            role='button'
            data-mdb-ripple-color='dark'
            target='_blank'>
            <i className='fab fa-linkedin'></i>
          </a>

          {/* <!-- Github --> */}
          <a
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            href='https://github.com/Fabrizionb'
            role='button'
            data-mdb-ripple-color='dark'
            target='_blank'>
            <i className='fab fa-github'></i>
          </a>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div className='text-center text-light p-3 footerBar'>
        © 2022 Copyright:
        <a className='text-light' href='#'>
          {" "}
          13ReasonToBuy
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}

export default Footer;
