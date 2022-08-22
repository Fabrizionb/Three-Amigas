// Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Imports Css
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

// Imports Components
import NavBar from "../../components/navBar/NavBar";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import Home from "../Views/Home";
import Store from "../Views/Store";
import Cart from "../Views/Cart";
import About from "../About/About";
import Footer from "../../components/footer/Footer";
import { CartProvider } from "../Store/cartContext";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detalle' element={<ItemDetailContainer />} />
            <Route path='/detalle/:id' element={<ItemDetailContainer />} />
            <Route path='/store' element={<Store />} />
            <Route path='/store/:idCategory' element={<Store />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<About />} />
            <Route
              path='*'
              element={
                <h1 className='text-center mt-5 mb-5'>Product not found</h1>
              }
            />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
