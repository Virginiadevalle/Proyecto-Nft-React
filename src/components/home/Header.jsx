import React from "react";
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
              <a href="/explore.html" className="btn btn-danger me-1">
                Explore
              </a>
              <a href="/create.html" className="btn btn-outline-secondary">
                Create
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
