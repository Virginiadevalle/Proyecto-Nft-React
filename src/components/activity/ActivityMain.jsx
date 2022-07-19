import React, { useState } from "react";

const tabs = [
  {
    tab: 'Sales',
    label: 'Sales',
  },
  {
    tab: 'Likes',
    label: 'Likes',
  },
  {
    tab: 'Purchase',
    label: 'Purchase',
  },
  {
    tab: 'Bids',
    label: 'Bids',
  },
  {
    tab: 'Burns',
    label: 'Burns',
  },
  {
    tab: 'Transfer',
    label: 'Transfer',
  },
  {
    tab: 'Followings',
    label: 'Followings',
  },
]


function ActivityMain() {
  
  const [tab, setTab] = useState("");




  return (
    <section className="seccion-main-activity bg-negro-claro py-5">
      <div className="container">
        <div className="row">
          <div className="contain-texto pb-4">
            <h5 className="text-primary-color font-akshar font-weight-bold pt-4">
              <u>Creative</u>
            </h5>
            <h3 className="text-white font-akshar display-3">Explore</h3>
          </div>
          <div className="col-12 col-lg-7">
            <div className="grup-btns mb-4">
              <div
                className="p-0 bg-cards mw-grup-btn rounded d-flex justify-content-around"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn2 text-gris">
                  All
                </button>
                <button type="button" className="btn2 text-gris">
                  Recent
                </button>
                <button type="button" className="btn2 text-gris">
                  Purchase
                </button>
              </div>
            </div>

            <div className="col-12 ">
              <div className="ofertas bg-cards p-3 d-flex align-items-center justify-content-start border-b">
                <div>
                  <img
                    src="/src/img/bid_avatar.jpg"
                    className="rounded-circle"
                    alt=""
                  />
                </div>
                <div className="d-flex flex-column">
                  <h5 className="text-white ps-3 m-0">Collectibles</h5>
                  <p className="text-gris mw-grup-btn m-0 ps-3">
                    Bid placed for <span className="text-white">14.20 ETH</span>{" "}
                    4 hours ago by <span className="text-white">@obaniya</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="contain-titulo-menu d-flex flex-column justify-content-center mw-300 m-auto ">
              <h3 className="text-white after mb-4 mt-5 mt-lg-0">Filters</h3>
              <div className="menu-explore flex-wrap d-flex flex-lg-row  text-justify p-0 ">
              {tabs.map((item) => (
                  <button
                    key={item.tab}
                    onClick={() => setTab(item.tab)}
                    className={`${
                      tab === item.tab ? "active" : ""
                    } mb-3  btn py-1 btn-outline-secondary text-gris  px-3 me-2`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActivityMain;
