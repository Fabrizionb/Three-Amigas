import React, { useEffect, useState } from "react";
import itemsData from "../../data/data.js";
import StoreList from "../StoreList/StoreList";
import "./StoreContainer.css";


function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(itemsData), 500);
  });
}

function StoreContainer({ props }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProductos().then((respuesta) => {
      setData(respuesta);
    });
  }, []);

  return (
    <>
     <StoreList title={"Outlet Sale"} data={data} />;
    </>
  );
}

export default StoreContainer;
