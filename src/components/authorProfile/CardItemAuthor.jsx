import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";





function CardItemAuthor({item}) {
  const {item_price, description, } = item


  return (
    <>
      <div className="card border-card  p-3  bg-cards me-0  ">
        <div className="contain-img position-relative">
          <img
            src="/src/img/c214985c332ace152aa28294d0ca77ba17fa2166-760x400.jpg"
            className="card-img-top border-card "
            alt="..."
          />
          <span className="bg-primary-color  text-white p-1 rounded position-absolute start-0 bottom-0 ms-1 mb-1 ">
            03:18:24
          </span>
        </div>
        <div className="card-body px-0 pb-0 ">
          <div className="contain-title text-white d-flex  align-items-center">
            <div className="img-40px">
              <img
                src="/src/img/c214985c332ace152aa28294d0ca77ba17fa2166-760x400.jpg"
                className="rounded-circle img-fluid img-author "
                alt=""
              />
            </div>
            <h5 className="card-title">
              <Link
                className="text-decoration-none text-white ps-3"
                to={"/item-details"}
              >
                {description}
              </Link>
            </h5>
          </div>
          <div className="contain-price d-flex mt-3 justify-content-between bg-negro-claro p-2 rounded">
            <span className="text-gris">{item_price} ETH</span>
            <span className="text-gris">
              <i className="bi bi-heart"></i> 92
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItemAuthor;
