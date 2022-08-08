import React from "react";

function ContactMain() {
  return (
    <>
      <section className="seccion-main bg-negro-claro py-5">
        <div className="container">
          <div className="row">
            <h5 className="text-primary-color text-center font-akshar font-weight-bold  pt-4 ">
              
              <u>Contact</u>
            </h5>
            <h3 className="text-white text-center font-akshar display-3 mb-5 ">
              Get In Touch
            </h3>
            <div className="col-12 col-md-8 col-lg-5 m-auto bg-cards p-md-5 border-card">
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
                    email *
                  </label>
                  <input
                    type="email"
                    className="form-control p-2 mb-3 bg-negro-claro border2"
                    name="email"
                    id="exampleFormControlInput2"
                  />

                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label text-white"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    className="form-control p-2 mb-3 bg-negro-claro border2"
                    name="texto"
                    id="exampleFormControlInput2"
                  />

                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label text-white"
                  >
                    Message *
                  </label>
                  <textarea
                    className="form-control bg-negro-claro border2 mb-4"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </form>
              <a
                href="/explore.html"
                className="btn btn-outline-secondary border-primary-color py-2 px-5 bg-primary-color"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactMain;
