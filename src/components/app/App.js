// Imports Css

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

// Imports Components
import NavBar from "../../components/navBar/NavBar";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";

import ItemListContainer from "../../components/IitemList/ItemListContainer";
import StoreContainer from "../../components/storeContainer/StoreContainer";
import PaymentListContainer from "../../components/paymentListContainer/PaymentListContainer";
import ItemDetailContainer from "../itemDetail/ItemDetailContainer";

function App() {
  return (
    <div className='App'>
      <NavBar />

      <Banner />

      <PaymentListContainer title='Payment Methods' />

      <ItemListContainer title='Outlet Sale' />

      <ItemDetailContainer  itemid={2} /> 

      <Footer />

      {/* <StoreContainer /> */}
      
    </div>
  );
}

export default App;
