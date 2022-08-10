import React from 'react'

function CreateUser() {
  return (

    <div className="col-12 col-lg-3 bg-cards p-3 pt-5 border-card mh-370 me-2 ">
              <div className="text-center">
                <img
                  src="/src/img/avatar-author-profile.jpg"
                  className="rounded-circle img-author "
                  alt=""
                />
              </div>
              <div className="contain-title text-center ">
                <h5 className="card-title my-3">
                  <a
                    className="text-decoration-none text-white  "
                    href="/items-details.html"
                  >
                    Einstein Bariya
                  </a>
                </h5>

                <a href="#" className="text-white">
                  Einstein Bariya011.com
                </a>

                <ul className="d-flex justify-content-center p-3 m-0 ">
                  <li className="list-unstyled me-2 p-2 icons-footer">
                    <a href="#" className="text-decoration-none text-white">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li className="list-unstyled me-2 p-2 icons-footer">
                    <a href="#" className="text-decoration-none text-white">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </li>
                  <li className="list-unstyled me-2 p-2 icons-footer">
                    <a href="#" className="text-decoration-none text-white">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li className="list-unstyled me-2 p-2 icons-footer">
                    <a href="#" className="text-decoration-none text-white">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </li>
                </ul>
                <div className="contain-btn d-flex justify-content-center  p-1 pb-3 rounded">
                  <button className="list-unstyled mb-lg-0 btn py-2 btn-outline-secondary px-4  text-white font-size-14">
                    Follow
                  </button>
                </div>
              </div>
            </div>

  )
}

export default CreateUser