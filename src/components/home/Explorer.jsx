import React, { useState } from "react";
import CardExplore from "../CardExplore";


const tabs = [
  {
    tab: 'ALL NFTs',
    label: 'ALL NFTs',
  },
  {
    tab: 'Art',
    label: 'Art',
  },
  {
    tab: 'Collectibles',
    label: 'Collectibles',
  },
  {
    tab: 'Virtual worlds',
    label: 'Virtual worlds',
  },
  {
    tab: 'Tranding cards',
    label: 'Tranding cards',
  },
]


function Explorer() {
  const [tab, setTab] = useState("ALL NFTs");

  return (
    <section className="seccion-explore bg-negro-claro py-5">
      <div className="container">
        <div className="row">
          <div className="contain-texto pb-4">
            <h5 className="text-primary-color font-akshar font-weight-bold  pt-4">
              <u>Exclusive Assets</u>
            </h5>
            <div className="contain-titulo-menu d-flex flex-column flex-lg-row justify-content-between">
              <h3 className="text-white  font-akshar display-3">Explore</h3>
              <div className="menu-explore d-flex flex-column flex-md-row align-items-center align-content-center p-0 ">
                {tabs.map((item) => (
                  <button
                    key={item.tab}
                    onClick={() => setTab(item.tab)}
                    className={`${
                      tab === item.tab ? "active" : ""
                    } list-unstyled mb-3 mb-lg-0 btn py-1 btn-outline-secondary px-2 me-3 text-gris font-size-14`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <CardExplore  />
          <div className="text-center  pt-4 pb-5 ">
            <a href="#" className="btn btn-danger">
              Load More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explorer;
