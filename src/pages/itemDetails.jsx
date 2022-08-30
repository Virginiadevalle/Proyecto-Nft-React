import React from "react";
import Footer from "../components/Footer";
import HeaderGeneral from "../components/HeaderGeneral";
import CarrouselExplore from "../components/Itemdetails/CarrouselExplore";
import ImageItemDetail from "../components/Itemdetails/ImageItemDetail";
import ItemDetailFilter from "../components/Itemdetails/ItemDetailFilter";
import ItemsDetailDescription from "../components/Itemdetails/itemsDetailDescription";
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState} from 'react'



const url = 'http://localhost:4000/items'
function ItemDetails() {
  const [itemsDetail, setItemDetail] = useState([])
  const {id} = useParams()
  
  useEffect(() => {
    axios({
      method: 'get',
      url: `${url}/${id}`
    })
    .then(({data})=> {
      // console.log(data)
      setItemDetail(data)
    })
    .catch(()=>{
      console.log('error');
    })
  }, [])
  
  


  return (
    <>
      <HeaderGeneral
        title="Item Details"
        before="Home"
        after="Explore"
        after2="Item Details"
      />
      <main>
        <section className="single-items-details py-5 bg-negro-claro">
          <div className="container pb-5">
            <div className="container pb-5">
              <div className="row">
                <div className="col-12 col-lg-5">
                  <ImageItemDetail file={itemsDetail.file} />
                </div>
                <div className="col-12 col-lg-7">
                  <ItemsDetailDescription  />
                  <div className="row">
                    <div className="col-12 col-md-9">
                      <ItemDetailFilter description={itemsDetail.description}/>
                    </div>
                  </div>
                </div>
                <CarrouselExplore/>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ItemDetails;
