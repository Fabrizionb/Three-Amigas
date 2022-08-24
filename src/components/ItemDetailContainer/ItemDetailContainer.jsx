import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";
import firestoreDB from "../../services/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

function getProductById(id) {
  return new Promise((resolve, reject) => {
    const productsCollection = collection(firestoreDB, "products");
    const docRef = doc(productsCollection, id);

    getDoc(docRef).then((snapshot) => {
      resolve({ ...snapshot.data(), id: snapshot.id });
      
    });
    
  });
  
}

function ItemDetailContainer() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getProductById(id).then((response) => {
      setData(response);
    });
  }, []);

  function onAdd(count) {
    console.log(`You add ${count} products`);
  }

  return (
    <>
      <h4 className='text-center mt-5 flashTitle'>Product Detail</h4>
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
