import React, { useEffect, useState } from "react";
import data from "../../data/data.js";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import useForceUpdate from "use-force-update";

function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 100);
  });
}

function ItemListContainer(props) {
  const [data, setData] = useState([]);
  let { idCategory } = useParams();
  // const idCategory = useParams().idCategory;
  const [title, setTitle] = useState("");

  function sortMinus() {
    
    data.sort(function (a, b) {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    console.log("Minus prev setData", data);
    setData(data);
    console.log("Minus post setData", data);
  }

  function sortPlus() {
    
    data.sort(function (a, b) {
      if (a.price < b.price) {
        return 1;
      }
      if (a.price > b.price) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    console.log("Plus prev setData", data);
    setData(data);
    console.log("Plus post setData", data);
  }

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
        setTitle("Our " + filters[0].category + " " + "Products");
      }
    });
  }, [[idCategory], [JSON.stringify(data)]]);

  return (
    <>
      <h4 className='text-center mt-5 paymentTitle'>{title}</h4>
      <ItemList data={data} sortMinus={sortMinus} sortPlus={sortPlus} />;
    </>
  );
}

export default ItemListContainer;
