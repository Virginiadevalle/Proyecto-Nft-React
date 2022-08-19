import React from "react";
import ActivityFilter from "../components/activity/ActivityFilter";
import ActivityOptions from "../components/activity/ActivityOptions";
import Footer from "../components/Footer";
import HeaderGeneral from "../components/HeaderGeneral";

function Activity() {
  return (
    <div>
      <HeaderGeneral
        title="Activity"
        before="Home"
        after="Pages"
        after2="Activity"
      />
      <main>
        <section className="seccion-main-activity bg-negro-claro py-5">
          <div className="container">
            <div className="row">
              <div className="contain-texto pb-4">
                <h5 className="text-primary-color font-akshar font-weight-bold pt-4">
                  <u>Creative</u>
                </h5>
                <h3 className="text-white font-akshar display-3">Explore</h3>
              </div>
              <div className="col-12 col-lg-7">
                <ActivityFilter />
              </div>
              <div className="col-12 col-lg-5">
                <ActivityOptions />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Activity;
