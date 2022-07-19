import React from "react";
import CardLiveAuctions from "../CardLiveAuctions";

function LiveAuctions() {
  return (
    <section className="seccion-live-auctions bg-negro-claro py-5">
      <div className="container">
        <div className="row">
          <div className="contain-texto pb-4">
            <h5 className="text-primary-color font-akshar font-weight-bold  pt-4 ">
              <u> Auctions</u>
            </h5>
            <h3 className="text-white  font-akshar display-3">Live Auctions</h3>
          </div>
          <CardLiveAuctions />
          <div className="text-center  pt-4 pb-5 ">
            <a href="#" className="btn btn-danger">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveAuctions;
