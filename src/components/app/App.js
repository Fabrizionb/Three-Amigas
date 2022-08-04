// Imports Css

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

// Imports Components
import NavBar from "../../components/navBar/NavBar";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";



import ItemListContainer from "../../components/IitemList/ItemListContainer";
import PaymentListContainer from "../../components/paymentListContainer/PaymentListContainer";

function App() {
    

  return (
    <div className='App'>
      <NavBar />

      <Banner />
      
      

      <PaymentListContainer  title="Payment Methods"/>

      <ItemListContainer title="Flash Sale"/>


      <Footer />
    </div>
  );
}

export default App;
