import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import NavBar from "../../components/navBar/NavBar";
import Payment from "../../components/payment/Payment";
// import FlashSale from "../FlashSale/FlashSale";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import ItemListContainer from "../../components/itemlistcontainer/ItemListContainer";



function App() {
  let products = [
    {
      id: 0,
      name: "Shiny Glasses",
      price: 1000,
      description: "Cool glasses",
      promotion: "Free Shipping",
      image: "https://picsum.photos/200/",
      category: "Accesories",
      outlet: true,
    },
    {
      id: 0,
      name: "Cool Dress",
      price: 1000,
      description: "Jean Dress",
      promotion: "Free Shipping",
      image: "https://picsum.photos/200/",
      category: "Cloth",
      outlet: true,
    },
    {
      id: 0,
      name: "Leather Jacket",
      price: 1000,
      description: "Leather Jacket",
      promotion: "Free Shipping",
      image: "https://picsum.photos/200/",
      category: "Cloths",
      outlet: false,
    },
    {
      id: 0,
      name: "Soft Scarf",
      price: 1000,
      description: "Whool Scarf",
      promotion: "Free Shipping",
      image: "https://picsum.photos/200/",
      category: "Accesories",
      outlet: true,
    },
  ];

  const payment = [
    {
      name: "Visa",
      img: "https://img.icons8.com/color/48/undefined/visa.png",
      description: "Visa Logo",
    },
    {
      name: "Bank Transfer",
      img: "https://img.icons8.com/fluency/48/undefined/money-transfer.png",
      description: "Bank Transfer Logo",
    },
    {
      name: "PayPal",
      img: "https://img.icons8.com/color/48/undefined/paypal.png",
      description: "PayPal Logo",
    },
    {
      name: "MercadoPago",
      img: "https://img.icons8.com/color/48/undefined/mercado-pago.png",
      description: "MercadoPago Logo",
    },
  ];
const greeting = [{greeting:"Este es un Greeting"}]
  const banner = [
    {
      img: "../../img/banner.png",
    },
  ];

  return (
    <div className='App'>
      {/* NavBar Start*/}
      <NavBar />
      {/* NavBar End*/}

      {/* Banner Start*/}
      <Banner data={banner[0]} />
      {/* Banner End*/}

      {/* Payment Method Start*/}
      <>
        <h4 className='text-center mt-5 paymentTitle'>Payments Method</h4>
        <div div className='row payment-data-container container mt-3'>
          <div className='row payment'>
            <Payment data={payment[0]} />
            <Payment data={payment[1]} />
            <Payment data={payment[2]} />
            <Payment data={payment[3]} />
          </div>
        </div>
      </>
      {/* Payment Method End*/}

      <ItemListContainer data={greeting[0]} />

      {/* Card Start*/}
      <h4 className='text-center mt-5 flashTitle'>Flash Sales</h4>
      <div className='container d-flex align-items-center justify-content-center mt-3'>
        <div className='row text-center'>
          <Card data={products[0]} />
          <Card data={products[1]} />
          <Card data={products[2]} />
          <Card data={products[3]} />
        </div>
      </div>

      {/* Card End*/}

      {/* Footer Start*/}
      <Footer />
      {/* Footer End*/}
    </div>
  );
}

export default App;
