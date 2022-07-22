function  NavBar() {
    const logoStyle = { width:"75px", marginLeft:"2vh"}
    const button = {marginRight:"2vh", marginLeft:"2vh"}
    return (
        
        <header> 
        <nav className="navbar navbar-expand-lg bg-light " role="navigation">
                <div className="container-fluid d-flex navbar">
                    <a className="navbar-brand" href="../index.html">
                        <img src="/img/small-logo.png" style={logoStyle} alt="" className="d-inline-block align-text-top" />
                    </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={button}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="">GetFit</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">App</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Store</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Flash Sale</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar