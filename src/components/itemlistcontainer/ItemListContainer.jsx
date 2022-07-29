import React from "react";

function ItemListContainer(props) {
  return (
    <div className='d-flex align-items-center justify-content-center mt-4'>
      <h1>{props.data.greeting}</h1>
    </div>
  );
}
export default ItemListContainer;
