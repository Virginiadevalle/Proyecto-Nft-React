import React from "react";
import NavHeader from "./NavHeader";

function HeaderGeneral(props) {
  const { title, before, after, after2 } = props;


  return (
    <header>
      <div className="container-fluid img-H-E mh-500 pb-3 cover-bg">
      <NavHeader />
        <div className="container  px-0 my-5">
          <div class="mw-600 m-auto text-center">
            <h2 className="text-white font-size-70  mb-3">{title}</h2>
            <nav
              style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
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
