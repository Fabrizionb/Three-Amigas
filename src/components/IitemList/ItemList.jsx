import React from "react";
import Card from "../card/Card";

function ItemList({ data }) {
  const outlet = data.filter((obj) => {
    return obj.outlet === true;
  });

  return (
    <>
      <h4 className='text-center mt-5 flashTitle'>Outlet Sale</h4>
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
                count={item.count}
                badge={item.badge}
                onAdd={item.onAdd}
              />
            ))

            // data.map((item) => (
            //   <Card
            //     onAdd={onAdd}
            //     key={item.id}
            //     count={item.count}
            //     name={item.name}
            //     price={item.price}
            //     image={item.image}
            //     stock={item.stock}
            //     category={item.category}
            //     description={item.description}
            //   />
            // ))
          }
        </div>
      </div>
    </>
  );
}

export default ItemList;
