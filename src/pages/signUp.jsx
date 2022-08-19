import React from "react";
import Footer from "../components/Footer";
import HeaderGeneral from "../components/HeaderGeneral";
import SignUpFormulario from "../components/signUp/SignUpFormulario";

function SignUp() {
  return (
    <>
      <HeaderGeneral
       title="Sign Up"
       before="Home"
       after="Explore"
       after2="" />
      <main>
        <section className="seccion-main bg-negro-claro py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 col-lg-5 m-auto bg-cards p-md-5 border-card">
                <SignUpFormulario />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SignUp;
