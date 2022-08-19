import React from "react";
import CardLiveAuctions from "../cards/CardLiveAuctions";
import {useState, useEffect } from 'react'
import axios from "axios";



const url = 'http://localhost:4000/items'
function LiveAuctions() {
const [items, setItems] = useState([])

useEffect(() => {
  axios({
      method: 'get',
      url: `${url}?_page=1&_limit=10`
  })
  .then(({data}) => {
    // console.log(data)
    setItems(data)

  })


  .catch(()=> {
    console.log('error')
  })
  
}, [])



  return (
    <section className="seccion-live-auctions bg-negro-claro py-5">
      <div className="container">
        <div className="row">
          <div className="contain-texto pb-4">
            <h5 className="text-primary-color font-akshar font-weight-bold  pt-4 ">
              <u> Auctions</u>
            </h5>
            <h3 className="text-white  font-akshar display-3">Live Auctions</h3>
          </div>

          {items.map((item)=> (
            <div key={item.id} className="col-12 col-md-6 col-lg-3 mb-4  ">
              <CardLiveAuctions item={item}/>
          </div>
          ))}
          
          <div className="text-center  pt-4 pb-5 ">
            <a href="#" className="btn btn-danger">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveAuctions;
