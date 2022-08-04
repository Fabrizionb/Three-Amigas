import React, { useEffect, useState } from "react";
import itemsData from "../../data/data.js";
import Card from "../card/Card";

function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(itemsData), 500);
  });
}

function ItemListContainer(props) {
  const [data, setData] = useState([{}]);

  function onAdd(count) {
    alert("onAdd")
    console.log(`You add ${count} products`);
  }

  useEffect(() => {
    getProductos().then((respuesta) => {
      setData(respuesta);
    });
  }, []);
  <h1>Products</h1>;

  const outlet = data.filter((obj) => {
    return obj.outlet === true;
  });

  return (
    <>
      <h4 className='text-center mt-5 flashTitle'>{props.title}</h4>
      <div className='container d-flex align-items-center justify-content-center mt-3'>
        <div className='row text-center  align-items-stretch'>
          {
            outlet.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                category={item.category}
                description={item.description}
                stock={item.stock}
                onAdd={props.onAdd}
              />
            ))

            // data.map(item => <Card key={item.id} name={item.name} price={item.price} image={item.image} category={item.category} description={item.description}/>)
          }
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
