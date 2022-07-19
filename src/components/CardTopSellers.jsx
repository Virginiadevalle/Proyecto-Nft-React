import React from "react";

function CardTopSellers() {
  return (
    <div className="col-12 col-md-6 col-lg-4 pb-4  ">
      <div className="contain-card bg-cards p-4 d-flex justify-content-between rounded    ">
        <div className="contain-avatar-img d-flex align-items-center ">
          <img
            src="/src/img/avatarCardS.jpg"
            className="img-topsellers  rounded-circle"
            alt=""
          />
          <div className="contain-nombre text-white d-flex flex-column ps-3 ">
            <span className="mb-2">James Tonny</span>
            <span>2.65 ETH</span>
          </div>
        </div>
        <div className="contain-items text-white px-2 text-center  ">
          <h4 className="m-0">
            <strong>62</strong>
          </h4>
          <span>Items</span>
        </div>
      </div>
    </div>
  );
}

export default CardTopSellers;
