import React from 'react'

function AuthorProfileMain() {
  return (
    <>
    <section className="seccion-main bg-negro-claro py-5">
    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-3 bg-cards p-3 pt-5 border-card mh-370 ">
                <div className="text-center">
                    <img src="/src/img/avatar-author-profile.jpg" className="rounded-circle img-author " alt=""/>
                </div>
                <div className="contain-title text-center ">
                    <h5 className="card-title my-3"><a className="text-decoration-none text-white  " href="/items-details.html">Einstein Bariya</a></h5>

                    <a href="#" className="text-white">Einstein Bariya011.com</a>

                    <ul className="d-flex justify-content-center p-3 m-0 ">
                        <li className="list-unstyled me-2 p-2 icons-footer"><a href="#" className="text-decoration-none text-white"><i className="bi bi-facebook"></i></a></li>
                        <li className="list-unstyled me-2 p-2 icons-footer"><a href="#" className="text-decoration-none text-white"><i className="bi bi-twitter"></i></a></li>
                        <li className="list-unstyled me-2 p-2 icons-footer"><a href="#" className="text-decoration-none text-white"><i className="bi bi-instagram"></i></a></li>
                        <li className="list-unstyled me-2 p-2 icons-footer"><a href="#" className="text-decoration-none text-white"><i className="bi bi-linkedin"></i></a></li> 
                    </ul>
                    <div className="contain-btn d-flex justify-content-center  p-1 pb-3 rounded">
                        <button className="list-unstyled mb-lg-0 btn py-2 btn-outline-secondary px-4  text-white font-size-14">Follow</button>
                    </div>
                </div>
            </div> 
            <div className="col-12 col-lg-9  ">
                <div className="contain-titulo-menu ps-3 d-flex flex-column flex-lg-row justify-content-start"> 
                    
                    <ul className="menu-explore d-flex flex-column flex-lg-row align-items-center align-content-center p-0 ">
                        <li className="list-unstyled mb-3 mb-lg-0 btn py-1 btn-outline-secondary px-2 me-3 text-gris font-size-14">All NFTs </li>

                        <li className="list-unstyled  mb-3 mb-lg-0 btn py-1 btn-outline-secondary px-2 me-3 text-gris font-size-14">Art</li>

                        <li className="list-unstyled mb-3 mb-lg-0 btn py-1 btn-outline-secondary px-2 me-3 text-gris font-size-14">Collectibles</li>

                        <li className="list-unstyled mb-3 mb-lg-0 btn py-1 btn-outline-secondary px-2 me-3 text-gris font-size-14 ">Virtual worlds</li>

                        <li className="list-unstyled mb-3 mb-lg-0 btn py-1  btn-outline-secondary px-2 me-3 text-gris font-size-14 ">Tranding cards</li> 
                    </ul>   
                </div>
                <div className="row">
                    
                <div className="col-12 col-md-6  col-lg-4 mb-4  ">
                    <div className="card border-card  p-3  bg-cards me-0  " >
                        <div className="contain-img position-relative">
                            <img src="/src/img/imagen-autor-details.jpg" className="card-img-top border-card " alt="..."/>
                            <span className="bg-primary-color  text-white p-1 rounded position-absolute start-0 bottom-0 ms-1 mb-1 ">03:18:24</span>
                        </div>
                        <div className="card-body px-0 pb-0 ">
                                 
                            <div className="contain-title text-white d-flex  align-items-center">
                                <div>
                                    <img src="/src/img/avatar.jpg" className="rounded-circle img-author " alt=""/>
                                </div>
                                <h5 className="card-title"><a className="text-decoration-none text-white ps-3" href="/items-details.html">Masniya Hug</a></h5>
                            </div> 
                           
                            <div className="contain-price d-flex mt-3 justify-content-between bg-negro-claro p-2 rounded">
                                <span className="text-gris">5.4 ETH</span>
                                <span className="text-gris"><i className="bi bi-heart"></i>  92</span>
                            </div>
                        </div>
                    </div>
                </div>
            
             
            
                </div>
            </div> 
        </div>
    </div>
</section>
    </>
  )
}

export default AuthorProfileMain