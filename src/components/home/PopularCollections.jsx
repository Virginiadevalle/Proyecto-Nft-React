import React from "react";
import CardPopularCollections from "../CardPopularCollections";

function PopularCollections() {
  return (
    <section className="seccion-popular-collections bg-negro py-5">
      <div className="container">
        <div className="row">
          <div className="contain-texto pb-4">
            <h5 className="text-primary-color font-akshar font-weight-bold  pt-4 ">
              <u>Browse by Category</u>
            </h5>
            <h3 className="text-white  font-akshar display-3">
              Popular Collections
            </h3>
          </div>

          <CardPopularCollections />
        </div>
      </div>
    </section>
  );
}

export default PopularCollections;
