import React, { useEffect, useState } from "react";
import data from "../../data/data.js";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 500);
  });
}

function ItemListContainer() {
  const [data, setData] = useState([]);
  const idCategory = useParams().idCategory;

  useEffect(() => {
    getProductos().then((respuesta) => {
      let filters = respuesta.filter(
        (element) => element.category == idCategory
      );
      let outlet = respuesta.filter(
        (element) => element.outlet == true
      );


      if (idCategory === undefined) {
        setData(respuesta);
      } else if (idCategory == "outlet"){
        setData(outlet);
      }else {
        setData(filters);
      }
    });
  }, []);

  return (
    <>
      <ItemList data={data} />;
    </>
  );
}

export default ItemListContainer;
