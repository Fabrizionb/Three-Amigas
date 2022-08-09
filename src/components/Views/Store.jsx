import React from "react";
import Banner from "../../components/banner/Banner";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import PaymentListContainer from "../../components/paymentListContainer/PaymentListContainer";
import StoreContainer from "../storeContainer/StoreContainer";

const Store = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <PaymentListContainer title='Payment Methods' />
      <StoreContainer />
      <Footer />
    </>
  );
};

export default Store;
