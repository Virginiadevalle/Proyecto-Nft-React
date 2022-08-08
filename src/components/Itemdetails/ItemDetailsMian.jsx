import React from 'react'
import CarrouselExplore from './CarrouselExplore'

function ItemDetailsMian() {
  return (
    <>
    <section className="single-items-details py-5 bg-negro-claro">
        <div className="container pb-5">
            <div className="row">
                <div className="col-12 col-lg-5">
                        <div className="card bg-cards me-0  mb-3 mb-md-0" >
                            <div className="contain-img position-relative">
                             <img src="/src/img/image-items-details.jpg" className="card-img-top border-card-2  " alt="..."/>
                                <span className="bg-primary-color  text-white px-3 py-2  rounded position-absolute start-0 bottom-0 ms-3 mb-3 font-size-18 ">03 : 18 : 24</span>
                                <div className="position-absolute end-0 top-0 font-size-39 me-4 mt-4 text-white">
                                <i className="bi bi-heart"></i>
                                </div>
                            </div>  
                        </div>
                </div>
                <div className="col-12 col-lg-7">
                    <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center">
                        <div className="d-flex mb-3 mb-md-0">
                            <div>
                                <img src="/src/img/avatarCardS.jpg" className="rounded-circle img-topsellers" alt=""/>
                            </div>
                            <div className="d-flex flex-column justify-content-center ps-2">
                                <h5 className="text-white mb-1 ">Rosei Binchy</h5>
                                <span className="text-gris">Item Owner</span>
                            </div>
                        </div>
                        <div className=" bg-cards d-flex justify-content-between align-items-center px-2  py-2  price rounded ">
                            <span className="text-gris pe-3 ">Highest Bid               </span>
                            <div className="d-flex align-items-center">
                                <span className="text-white pe-2">68.2 ETH</span>
                                <img src="/src/img/fire.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-9">
                            <div className="contain-descriptions">
                                <h3 className="text-white font-we-700 mt-3">Descriptions</h3>
                                <p className="text-gris font-size-17">There are a few things worth doing before creating your first NFTs. pencil icon in the top right. creating your NFTs.</p> 
                            </div>
                            <div className="grup-btns mb-4"> 
                                <div className="p-0 bg-cards mw-grup-btn rounded d-flex justify-content-around "      role="group" aria-label="Basic example">
                                    <button type="button" className="btn2 text-gris
                                    ">Bids</button>
                                    <button type="button" className="btn2 text-gris
                                    ">History </button>
                                    <button type="button" className="btn2 text-gris
                                    ">Details</button> 
                                </div>
                            </div>
                            <div className="ofertas bg-cards p-3 d-flex align-items-center justify-content-start border-b">
                                    <div>
                                    <img src="/src/img/bid_avatar.jpg" className="rounded-circle" alt=""/>
                                    </div>
                                    <p className="text-gris mw-grup-btn m-0 ps-3 "> Bid placed for  <span className="text-white">14.20 ETH</span>  4 hours ago by <span className="text-white">@obaniya</span></p> 
                            </div>
                           
                                <div className="text-start  pt-4  ">
                                    <button className="btn btn-danger rounded"><i className="bi bi-handbag"></i> Place a bit</button> 
                                </div>  
                        </div>
                    </div>
                </div>

            <CarrouselExplore/>
            

            </div>  
        </div>
    </section>

    </>
  )
}

export default ItemDetailsMian