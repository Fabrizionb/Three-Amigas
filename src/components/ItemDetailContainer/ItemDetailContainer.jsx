import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.js";
import ItemDetail from "../itemDetail/ItemDetail";

function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 500);
  });
}

function ItemDetailContainer() {
  const idUrl = useParams().id;
  const [data, setData] = useState([]);

  useEffect(() => {
    getProductos().then((respuesta) => {
      let find = respuesta.find((element) => element.id == idUrl);

      if (find !== undefined) {
        setData(find);
      } else {
        alert("Product not found");
      }
    });
  }, []);

  function onAdd(count) {
    console.log(`You add ${count} products`);
  }

  return (
    <>
      <h4 className='text-center mt-5 flashTitle'></h4>
      <div className='container mt-5 mb-5'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-10'>
            <div className='card-detail'>
              <div className='row'>
                {
                  <ItemDetail
                    name={data.name}
                    price={data.price}
                    description={data.description}
                    image={data.image}
                    imageTwo={data.imageTwo}
                    imageThree={data.imageThree}
                    category={data.category}
                    stock={data.stock}
                    id={data.id}
                    onAdd={onAdd}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetailContainer;
