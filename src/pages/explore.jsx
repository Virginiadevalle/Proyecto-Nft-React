import React from "react";
import Footer from "../components/Footer";
import HeaderGeneral from "../components/HeaderGeneral";
import Explorer from "../components/home/Explorer";
import Header from "../components/home/Header";


function Explore() {
  return (
    <div>
      <HeaderGeneral title='Explore' before='Home' after='Explore' after2=''  />
        <main>
        <Explorer />
        </main>
      <Footer />
    </div>
  );
}

export default Explore;
