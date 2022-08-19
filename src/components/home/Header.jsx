import React from "react";
import { Link } from "react-router-dom";
import NavHeader from "../NavHeader";

const Header = () => {
  return (
    <header>
      <div className="container-fluid img-H-I mh-500 pb-3 cover-bg">
        <NavHeader />

        <div className="container  px-0 my-5">
          <div className="mw-600 m-auto text-center">
            <div>
              <h2 className="text-white font-besley font-size-39">
                Discover, collect,and sell extraordinary
              </h2>
              <h2 className="text-nfts-color font-besley font-size-39">NFTs</h2>
              <p className="text-gris px-md-5 font-size-14">
                find exclusive digital artwork. collect digital artwork made by
                amazing people. make money by doing something you passionate.
              </p>
            </div>
            <div>
              <Link to={"/explore"} className="btn btn-danger me-1">
                Explore
              </Link>
              <Link to={"/create"} className="btn btn-outline-secondary">
                Create
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
