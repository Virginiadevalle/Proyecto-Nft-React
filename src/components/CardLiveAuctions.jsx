import React from "react";

function CardLiveAuctions() {
  return (
    <div className="col-12 col-md-6  col-lg-3 mb-4  ">
      <div className="card border-card  p-3  bg-cards me-0  ">
        <div className="contain-img position-relative">
          <img
            src="/src/img/imageCards.png"
            className="card-img-top"
            alt="live actions"
          />
          <span className="bg-difuminado  text-white p-1 rounded position-absolute start-0 bottom-0 ms-1 mb-1 ">
            03:18:24
          </span>
        </div>
        <div className="card-body px-0 pb-0 ">
          <div className="contain-title text-white d-flex justify-content-between ">
            <h5 className="card-title">
              <a
                className="text-decoration-none text-white"
                href="/items-details.html"
              >
                Domain Names
              </a>
            </h5>
            <div className="text-gris">
              <i className="bi bi-heart pe-1"></i>
              <span>92</span>
            </div>
          </div>
          <div className="contain-avatar d-flex align-items-center pb-3 ">
            <div>
              <img src="img/avatarCards.png" alt="" />
            </div>
            <span className="text-gris ps-1">@banuri</span>
          </div>
          <div className="contain-price d-flex justify-content-between bg-negro-claro p-1 rounded">
            <span className="text-gris">Price</span>
            <span className="text-white">5.4 ETH</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLiveAuctions;
