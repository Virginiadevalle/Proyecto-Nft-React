import React from "react";
import ContactMain from "../components/contact/ContactMain";
import Footer from "../components/Footer";
import HeaderGeneral from "../components/HeaderGeneral";

function Contact() {
  return (
    <>
      <HeaderGeneral
        title="Contact"
        before="Home"
        after="Pages"
        after2="Contact"
      />
      <main>
        <ContactMain />
      </main>
      <Footer />
    </>
  );
}

export default Contact;
