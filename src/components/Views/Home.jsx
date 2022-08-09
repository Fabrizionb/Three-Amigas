import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import PaymentListContainer from "../../components/paymentListContainer/PaymentListContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <>
      <NavBar />

      <Banner />

      <PaymentListContainer title='Payment Methods' />

      <ItemListContainer title='Outlet Sale' />

      <Footer />
    </>
  );
};

export default Home;
