import React from "react";
import ItemCount from "../itemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({name, price, image, category, description, stock, id, onAdd}) {
  return (
    <>
      <div className='col-md-6 s'>
        {/* <div className='images p-3'>
          <div className='text-center p-4'>
            <img id='main-image' src={image} width='250' alt={id} />
          </div>
          <div className='thumbnail text-center'>
            <img
              className='mb-2'
              src='https://cdn.mos.cms.futurecdn.net/CocLKJZdYRE9P39XpfDRuM.jpg'
              width='70'
            />
            <img
              className='mx-2 mb-2'
              src='https://cdn.mos.cms.futurecdn.net/CocLKJZdYRE9P39XpfDRuM.jpg'
              width='70'
            />
            <img
              className='mb-2'
              src='https://cdn.mos.cms.futurecdn.net/CocLKJZdYRE9P39XpfDRuM.jpg'
              width='70'
            />
          </div>
        </div> */}

<div id="carouselExampleIndicators" className="carousel  carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image} className="d-block w-100 rounded" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image} className="d-block w-100 rounded" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image} className="d-block w-100 rounded" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      </div>

      <div className='col-md-6 f'>
        <div className='product p-4'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <i className='fa fa-long-arrow-left'></i>
              <span className='ml-1'>Back</span>
            </div>
            
          </div>

          <div className='mt-4 mb-3'>
            <span className='text-uppercase text-muted brand'>{category}</span>
            <h3 className='text-uppercase mt-2 mb-4'>{name}</h3>

            <p className='about mb-3'>{description}</p>
          </div>

          <div className='price d-flex flex-row align-items-center '>
            <h5>
              {" "}
              Price:
              <span className='act-price '> ${price}</span>
            </h5>
          </div>
          <div className='ml-2'>
            <p className='about'>
              <span>Stock: {stock}</span>
            </p>
          </div>

          <div className='cart mt-4 align-items-center d-flex'>
             <ItemCount onAdd={onAdd} stock={stock} />
            <i className='fa fa-heart text-muted'></i>
            <i className='fa fa-share-alt text-muted'></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
