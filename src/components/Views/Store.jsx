import React from "react";
import "../card/Card.css";
import Banner from "../../components/banner/Banner";
import PaymentListContainer from "../../components/paymentListContainer/PaymentListContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

function Store() {
  return (
    <>
      <Banner />
      <PaymentListContainer title='Payment Methods' />
      <ItemListContainer title='Payment Methods' />
    </>
  );
}

export default Store;
