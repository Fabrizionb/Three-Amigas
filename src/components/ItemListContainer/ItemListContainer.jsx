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

function ItemListContainer(props) {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const idCategory = useParams().idCategory;
  
  useEffect(() => {
    getProductos().then((respuesta) => {
      let filters = respuesta.filter(
        (element) => element.category == idCategory
      );
      let outlet = respuesta.filter((element) => element.outlet == true);

      if (idCategory === undefined) {
        setData(respuesta);
        setTitle("All our Products");
        
      } else if (idCategory == "outlet") {
        setData(outlet);
        setTitle("Our Outlet Products");
        
      } else {
        setData(filters);
        
        setTitle("Our " + filters[0].category + " " + "Products")
      }
    });
  }, []);

  return (
    <>
      <h4 className='text-center mt-5 paymentTitle'>{title}</h4>
      <ItemList data={data} />;
    </>
  );
}

export default ItemListContainer;
