import React from "react";

function ItemDetailFilter({description}) {
  return (
    <>
      <div className="contain-descriptions">
        <h3 className="text-white font-we-700 mt-3">Descriptions</h3>
        <p className="text-gris font-size-17">
          {description}
        </p>
      </div>
      <div className="grup-btns mb-4">
        <div
          className="p-0 bg-cards mw-grup-btn rounded d-flex justify-content-around "
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="btn2 text-gris
                                    "
          >
            Bids
          </button>
          <button
            type="button"
            className="btn2 text-gris
                                    "
          >
            History{" "}
          </button>
          <button
            type="button"
            className="btn2 text-gris
                                    "
          >
            Details
          </button>
        </div>
      </div>
      <div className="ofertas bg-cards p-3 d-flex align-items-center justify-content-start border-b">
        <div>
          <img
            src="/src/img/bid_avatar.jpg"
            className="rounded-circle"
            alt=""
          />
        </div>
        <p className="text-gris mw-grup-btn m-0 ps-3 ">
          {" "}
          Bid placed for <span className="text-white">14.20 ETH</span> 4 hours
          ago by <span className="text-white">@obaniya</span>
        </p>
      </div>

      <div className="text-start  pt-4  ">
        <button className="btn btn-danger rounded">
          <i className="bi bi-handbag"></i> Place a bit
        </button>
      </div>
    </>
  );
}

export default ItemDetailFilter;
