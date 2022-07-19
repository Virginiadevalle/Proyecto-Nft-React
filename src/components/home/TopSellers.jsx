import React from "react";
import CardTopSellers from "../CardTopSellers";

function TopSellers() {
  return (
    <section className="seccion-top-sellers bg-negro py-5">
      <div className="container">
        <div className="row">
          <div className="contain-texto pb-4">
            <h5 className="text-primary-color font-akshar font-weight-bold  pt-4 ">
              <u> Creators</u>
            </h5>
            <h3 className="text-white  font-akshar display-3">Top Sellers</h3>
          </div>
          <CardTopSellers />
        </div>
      </div>
    </section>
  );
}

export default TopSellers;
