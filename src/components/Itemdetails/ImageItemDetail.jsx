import React from "react";

function ImageItemDetail({file}) {
  return (
    <>
      <div className="contain-img position-relative ">
        <img
          src="/src/img/306909.jpg"
          className="card-img-top  border-card-2 img-fluid img-1x1"
          alt="..."
        />
        <span className="bg-primary-color  text-white px-3 py-2  rounded position-absolute start-0 bottom-0 ms-3 mb-3 font-size-18 ">
          03 : 18 : 24
        </span>
        <div className="position-absolute end-0 top-0 font-size-39 me-4 mt-4 text-white">
          <i className="bi bi-heart"></i>
        </div>
      </div>
    </>
  );
}

export default ImageItemDetail;
