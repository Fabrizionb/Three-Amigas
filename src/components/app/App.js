// Imports Css
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";

import Footer from "../../components/footer/Footer";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

// Imports Components

import Home from "../Views/Home";
import Store from "../Views/Store";
import Cart from "../Views/Cart";
import Form from "../Form/Form";

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
            <Route path='/form' element={<Form />} />
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
