import React from "react";

function CreateMain() {
  return (
    <>
      <section className="seccion-main bg-negro-claro py-5">
        <div className="container">
          <div className="row">
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
            <div className="col-12 col-lg-8 ">
              <h5 className="text-primary-color font-akshar font-weight-bold ">
                {" "}
                <u>Create</u>{" "}
              </h5>
              <h3 className="text-white  mb-5 font-akshar display-3">
                Create Item
              </h3>

              <div className="bg-cards p-md-5 border-card">
                <form action="">
                  <div className=" ">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label text-white"
                    >
                      Choose file *
                    </label>
                    <input
                      type="email"
                      className="form-control bg-negro-claro border2   mb-3"
                      id="exampleFormControlInput1"
                    />

                    <label
                      for="exampleFormControlInput1"
                      className="form-label text-white"
                    >
                      Item Name *
                    </label>
                    <input
                      type="item"
                      className="form-control bg-negro-claro border2 "
                      id="exampleFormControlInput2"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label text-white"
                    >
                      Description *
                    </label>
                    <textarea
                      className="form-control bg-negro-claro border2"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className=" d-flex mb-3 ">
                    <div>
                      <label
                        for="exampleFormControlInput1"
                        className="form-label text-white"
                      >
                        Item Price *
                      </label>
                    </div>
                    <input
                      type="email"
                      className="form-control mw-50porciento bg-negro-claro border2  "
                      id="exampleFormControlInput1"
                    />
                    <div>
                      <label
                        for="exampleFormControlInput1"
                        className="form-label text-white"
                      >
                        Royality *
                      </label>
                    </div>
                    <input
                      type="email"
                      className="form-control mw-50porciento bg-negro-claro border2 "
                      id="exampleFormControlInput1"
                    />
                  </div>
                  <div className=" d-flex mb-3 ">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label text-white"
                    >
                      Size *
                    </label>
                    <input
                      type="email"
                      className="form-control bg-negro-claro border2  "
                      id="exampleFormControlInput1"
                    />

                    <label
                      for="exampleFormControlInput1"
                      className="form-label text-white"
                    >
                      No of Copies *
                    </label>
                    <input
                      type="email"
                      className="form-control bg-negro-claro border2 "
                      id="exampleFormControlInput1"
                    />
                  </div>
                </form>
                <a
                  href="/explore.html"
                  className="btn btn-outline-secondary border-primary-color bg-primary-color"
                >
                  Create Item
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateMain;
