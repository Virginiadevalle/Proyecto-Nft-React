import React from 'react'

function Footer() {
  return (
    <footer className="bg-negro ">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="contain-texto py-4 ">
                        <div>
                            <img src="/src/img/logo.png" alt=""/>
                        </div>
                        <p className="text-gris pt-3"> Lorem ipsum dolor sitamet,consectetuer adipiscing elit, sed diam
                            nonummy nibh tincidunt ut laoreet dolore
                            magna. </p>
                        <ul className="d-flex p-0 m-0 ">
                            <li className="list-unstyled me-2 p-2 icons-footer"><a href="#"
                                    className="text-decoration-none text-white"><i className="bi bi-facebook"></i></a></li>
                            <li className="list-unstyled me-2 p-2 icons-footer"><a href="#"
                                    className="text-decoration-none text-white"><i className="bi bi-twitter"></i></a></li>
                            <li className="list-unstyled me-2 p-2 icons-footer"><a href="#"
                                    className="text-decoration-none text-white"><i className="bi bi-instagram"></i></a></li>
                            <li className="list-unstyled me-2 p-2 icons-footer"><a href="#"
                                    className="text-decoration-none text-white"><i className="bi bi-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-8 py-5 ">
                    <div className="row">
                        <div className="col-12 col-md-3 d-flex flex-column text-start  mb-3 mb-md-0  ">

                            <h6 className="text-white after mb-4 ">Marketplace</h6>
                            <a href="#" className="text-decoration-none text-gris">All NFTs</a>
                            <a href="#" className="text-decoration-none text-gris">How it works</a>
                            <a href="#" className="text-decoration-none text-gris">Create</a>
                            <a href="#" className="text-decoration-none text-gris">Explore</a>
                            <a href="#" className="text-decoration-none text-gris">Privacy & terms</a>
                        </div>

                        <div className="col-12 col-md-3 d-flex flex-column text-start  mb-3 mb-md-0">
                            <h6 className="text-white after  mb-4">Community</h6>
                            <a href="#" className="text-decoration-none text-gris">Help center</a>
                            <a href="#" className="text-decoration-none text-gris">Newsletter</a>
                            <a href="#" className="text-decoration-none text-gris">Partners</a>
                            <a href="#" className="text-decoration-none text-gris">Suggestions</a>
                            <a href="#" className="text-decoration-none text-gris">Blog</a>
                        </div>
                        <div className="col-12 col-md-6   text-start  d-flex  flex-column align-items-center ">
                            <h6 className="text-white afterr mb-4 ">Join Newsletter</h6>
                            <p className="text-gris">Signup for our newsletter to get the latest news in your inbox.</p>
                            <form action="">
                                <div className="contain-formularion mw-260 position-relative ">
                                    <input type="email" className="input  " name="email" id="email"
                                        placeholder="Email Address"/>
                                    <button type="button" className="btn btn-warning position-absolute end-5 top-4 "><i
                                            className="bi bi-send"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid bg-negro-claro p-4 text-center">
            <div className="containe text-gris  ">
                Copyright &copy; 2021 ib-themes. All right reserved.
            </div>
        </div>
    </footer>
  )
}

export default Footer