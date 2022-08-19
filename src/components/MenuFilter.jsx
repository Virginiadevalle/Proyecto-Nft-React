import React from "react";

function MenuFilter() {
  return (
    <>
      <div className="contain-titulo-menu ps-3 d-flex flex-column flex-lg-row justify-content-start">
        <ul className="menu-explore d-flex flex-column flex-md-row align-items-center align-content-center p-0 ">
          <li className="list-unstyled mb-3 mb-lg-0 btn py-1 btn-outline-secondary px-2 me-3 text-gris font-size-14">
            All NFTs{" "}
          </li>

          <li className="list-unstyled  mb-3 mb-lg-0 btn py-1 btn-outline-secondary px-2 me-3 text-gris font-size-14">
            Art
          </li>

          <li className="list-unstyled mb-3 mb-lg-0 btn py-1 btn-outline-secondary px-2 me-3 text-gris font-size-14">
            Collectibles
          </li>

          <li className="list-unstyled mb-3 mb-lg-0 btn py-1 btn-outline-secondary px-2 me-3 text-gris font-size-14 ">
            Virtual worlds
          </li>

          <li className="list-unstyled mb-3 mb-lg-0 btn py-1  btn-outline-secondary px-2 me-3 text-gris font-size-14 ">
            Tranding cards
          </li>
        </ul>
      </div>
    </>
  );
}

export default MenuFilter;
