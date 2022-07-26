// Imports
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import firestoreDB from "../../services/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { Metronome } from "@uiball/loaders";

// Imports Css
import "./ItemListContainer.css";

// Imports Components
import ItemList from "../ItemList/ItemList";

function ItemListContainer(props) {
  const [data, setData] = useState([]);
  let { idCategory } = useParams(); // const idCategory = useParams().idCategory;
  const [title, setTitle] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      function getItemsFromDBbyIdCategory(idCategory) {
        return new Promise((resolve) => {
          const productosCollection = collection(firestoreDB, "products");
          const q = query(
            productosCollection,
            where("category", "==", idCategory)
          );
          const o = query(productosCollection, where("outlet", "==", true));
          const a = query(productosCollection, where("category", "!=", true));
          if (idCategory === "outlet") {
            getDocs(o).then((snapshot) => {
              const docsData = snapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
              });
              resolve(docsData);
              setTitle("Outlet products");
            });
          } else if (
            idCategory === "jeans" ||
            idCategory === "dresses" ||
            idCategory === "jackets" ||
            idCategory === "tops" ||
            idCategory === "accesories"
          ) {
            getDocs(q).then((snapshot) => {
              const docsData = snapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
              });
              resolve(docsData);
              setTitle(`Our ${idCategory}`);
            });
          } else if (idCategory === "all") {
            getDocs(a).then((snapshot) => {
              const docsData = snapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
              });
              resolve(docsData);
              setTitle(`All our products`);
            });
          }
        });
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  function getItemsFromDBbyIdCategory(idCategory) {
    return new Promise((resolve) => {
      const productosCollection = collection(firestoreDB, "products");
      const q = query(productosCollection, where("category", "==", idCategory));
      const o = query(productosCollection, where("outlet", "==", true));
      const a = query(productosCollection, where("category", "!=", true));
      if (idCategory === "outlet") {
        getDocs(o).then((snapshot) => {
          const docsData = snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          resolve(docsData);
          setTitle("Outlet products");
        });
      } else if (
        idCategory === "jeans" ||
        idCategory === "dresses" ||
        idCategory === "tops" ||
        idCategory === "jackets" ||
        idCategory === "accesories"
      ) {
        getDocs(q).then((snapshot) => {
          const docsData = snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          resolve(docsData);
          setTitle(`Our ${idCategory}`);
        });
      } else if (idCategory === "all") {
        getDocs(a).then((snapshot) => {
          const docsData = snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          resolve(docsData);
          setTitle(`All our products`);
        });
      }
    });
  }
  useEffect(() => {
    getItemsFromDBbyIdCategory(idCategory).then((response) => {
      setData(response);
    });
  }, [idCategory]);
  function sortMinus() {
    setData(
      [].concat(
        data.sort(function (a, b) {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          // a must be equal to b
          return 0;
        })
      )
    );
  }
  function sortPlus() {
    setData(
      [].concat(
        data.sort(function (a, b) {
          if (a.price < b.price) {
            return 1;
          }
          if (a.price > b.price) {
            return -1;
          }
          // a must be equal to b
          return 0;
        })
      )
    );
  }
  if (data.length === 0) {
    return (
      <>
        <div
          className='d-flex align-items-center justify-content-center
      container mx-auto mt-5'>
          <Metronome size={90} speed={1.6} color='#1c73bf' />
        </div>
        <div>
          <h4 className='text-center '>Loading...</h4>
        </div>
      </>
    );
  }
  return (
    <>
      <h4 className='text-center mt-5 paymentTitle'>{title}</h4>
      <ItemList data={data} sortMinus={sortMinus} sortPlus={sortPlus} />;
    </>
  );
}

export default ItemListContainer;
