import React from 'react'

function CardPopularCollections() {
  return (
    <div className="col-12 col-md-4 mb-4 ">
            <div className="card  bg-cards me-0 border-card  ">
              <div className="contain-img">
                <img
                  src="/src/img/imageCardMediana.png"
                  className="card-img-top border-top-top"
                  alt="..."
                />
              </div>
              <div className="card-body py-2  d-flex justify-content-between align-items-center align-content-center ">
                <span className="card-title text-white m-0">Trading cards</span>
                <span className="text-gris">ERC-248</span>
              </div>
            </div>
          </div>
  )
}

export default CardPopularCollections