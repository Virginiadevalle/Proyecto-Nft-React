import React from "react";
import CreateFormulario from "../components/create/CreateFormulario";
import CreateUser from "../components/create/CreateUser";
import Footer from "../components/Footer";
import HeaderGeneral from "../components/HeaderGeneral";

function Create() {
  return (
    <>
      <HeaderGeneral
        title="Create"
        before="Home"
        after="Pages"
        after2="Create"
      />
      <main>
        <section className="seccion-main bg-negro-claro py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3  ">
                <CreateUser />
              </div>
              <div className="col-12 col-lg-8 mt-5 mt-lg-0">
                <CreateFormulario />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Create;
