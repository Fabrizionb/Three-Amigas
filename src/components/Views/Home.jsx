import React from "react";
import Banner from "../../components/banner/Banner";
import PaymentListContainer from "../../components/paymentListContainer/PaymentListContainer";
import BlogContainer from "../BlogContainer/BlogContainer";

const Home = () => {
  return (
    <>
    <Banner />
      <PaymentListContainer title='Payment Methods' />
      <BlogContainer title='Fashion Tips' />
    </>
  );
};

export default Home;
