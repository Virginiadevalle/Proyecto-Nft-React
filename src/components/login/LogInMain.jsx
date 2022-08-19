import React from "react";

function LogInMain() {
  return (
    <>
      <section className="seccion-main bg-negro-claro py-5">
        <div className="container">
          <div className="row">
            <h5 className="text-primary-color text-center font-akshar font-weight-bold  pt-4 ">
              
              <u>Login</u>
            </h5>
            <h3 className="text-white text-center font-akshar display-3 mb-5 ">
              Log in
            </h3>
            <div className="col-12 col-md-8 col-lg-5 m-auto bg-cards p-md-5 border-card">
              <h6 className="text-white  font-size-30">Log In</h6>
              <p className="text-gris mw-300">
                Login using an existing account or create a new account here.
              </p>
              <form action="">
                <div className=" ">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label text-white"
                  >
                    Username *
                  </label>
                  <input
                    type="usuario"
                    className="form-control p-2 bg-negro-claro border2   mb-3"
                    id="exampleFormControlInput1"
                  />

                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label text-white"
                  >
                    Password *
                  </label>
                  <input
                    type="password"
                    className="form-control p-2 mb-5 bg-negro-claro border2"
                    name="password"
                    id="exampleFormControlInput2"
                  />
                </div>
              </form>
              <div className=" d-flex justify-content-between">
              <a
                href="/explore.html"
                className="btn btn-outline-secondary border-primary-color bg-primary-color"
              >
                Submit
              </a>
              <a
                href="/explore.html"
                className="btn btn-outline-secondary border-primary-color bg-primary-color ms-3"
              >
                Create a new account
              </a>


              </div>
              <span className="mt-4 text-gris d-flex">
                Login with :
                <a
                  href="#"
                  className="text-decoration-none text-primary-color ms-2"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-primary-color  ms-2"
                >
                  Google
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LogInMain;
