import React, { useEffect, useState } from "react";
import itemsData from "../../src/data/data.js";
import ItemList from "../IitemList/ItemList";

function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(itemsData), 500);
  });
}

function ItemListContainer({ props }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProductos().then((respuesta) => {
      setData(respuesta);
    });
  }, []);

  return (
    <>
      <ItemList title={"Outlet Sale"} data={data} />
    </>
  );
}

export default ItemListContainer;
