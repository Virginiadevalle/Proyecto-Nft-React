import React from 'react'

function ActivityFilter() {
  return (
    <>
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
          </>
  )
}

export default ActivityFilter