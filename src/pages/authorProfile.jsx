import axios from "axios";
import React, { useEffect, useState } from "react";
import  { useParams } from "react-router-dom";
import CardItemAuthor from "../components/authorProfile/CardItemAuthor";
import CreateUser from "../components/create/CreateUser";
import Footer from "../components/Footer";
import HeaderGeneral from "../components/HeaderGeneral";
import MenuFilter from "../components/MenuFilter";

const url = "http://localhost:4000/usuarios";
function AuthorProfile() {
  const {id} =useParams()
  console.log(id);
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${url}/${id}/items`,
    })
      .then(({data}) => {
        // console.log(data);
        setItems( data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <HeaderGeneral
        title="Author Profile"
        before="Home"
        after="Pages"
        after2="Author"
      />
      <main> 
        <section className="seccion-main bg-negro-claro py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 ">
                <CreateUser id={id}/>
              </div>
              <div className="col-12 col-lg-9 my-3 my-lg-0">
                <MenuFilter />
            <div className="row mt-4 mt-lg-0">
              {items.map((item) => (
                <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4">
                  <CardItemAuthor item={item} />
                </div>
              ))}
            </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AuthorProfile;
