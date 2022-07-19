import React from "react";
import NavHeader from "./NavHeader";

function HeaderGeneral(props) {
  const { title, before, after, after2 } = props;


  return (
    <header>
      <div className="container-fluid img-H-E mh-500 pb-3 cover-bg">
      <NavHeader />
        <div className="container  px-0 my-5">
          <div className="mw-600 m-auto text-center">
            <h2 className="text-white font-size-70  mb-3">{title}</h2>
            <nav
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb d-flex justify-content-center">
                <li className="breadcrumb-item">
                  <a
                    href="/index.html"
                    className="text-decoration-none text-gris"
                  >
                    {before}
                  </a>
                </li>
                <li
                  className="breadcrumb-item active text-white"
                  aria-current="page"
                >
                  {after}
                </li>
                <li
                  className="breadcrumb-item active text-white"
                  aria-current="page"
                >
                  {after2}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderGeneral;
