import React from 'react'

function AuthorsMain() {
  return (
     <section className="seccion-live-auctions bg-negro-claro py-5">
    <div className="container">
        <div className="row">
            <div className="contain-texto pb-4">
                <h5 className="text-primary-color font-akshar font-weight-bold  pt-4 ">
                    <u > Explore Authors</u>
                </h5>
                <h3 className="text-white  font-akshar display-3">Our Authors</h3>
            </div>

            
                <div className="col-12 col-md-6  col-lg-3 mb-4  ">
                    <div className="card border-card  p-3  bg-cards me-0  " >
                        <div className="contain-img position-relative">
                            <img src="/src/img/imagen-card.jpg"  className="card-img-top border-card" alt="..."/>
                            <div className="contain-avatar-author d-flex justify-content-center align-items-center  ">
                                    <img src="/src/img/avatarAuthor.jpg" className="rounded-circle img-author" alt=""/>
                            </div>
                        </div>
                        <div className="card-body p-0 pt-2 ">
                            <div className="contain-title text-white text-center ">
                                <h5 className="card-title"><a className="text-decoration-none text-white" href="/author-profile.html">Masniya hug</a></h5>
                            </div> 
                            <div className="contain-btn d-flex justify-content-center  p-1 pb-3 rounded">
                                <button className="list-unstyled mb-lg-0 btn py-2 btn-outline-secondary px-4  text-white font-size-14">Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
            
               
            
            <div className="text-center  pt-4 pb-4 ">
                <a href="#" className="btn btn-danger">Explore More</a>
            </div>
        </div>
    </div>
</section>
  )
}

export default AuthorsMain