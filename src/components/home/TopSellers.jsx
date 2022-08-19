import React from "react";
import CardTopSellers from "../cards/CardTopSellers";
import axios from 'axios'
import {useState, useEffect} from 'react'


const url = 'http://localhost:4000/usuarios'
function TopSellers() {
  const [sellers, setSellers] = useState([])

  useEffect(() => {
    axios({
      method: 'get',
      url: `${url}?_page=1&_limit=10`
    })
    .then(({data}) =>{
      // console.log(data);
      setSellers(data)
    })
    .catch(() => {
      console.log('error')
    })
  }, [])
  


  return (
    <section className="seccion-top-sellers bg-negro py-5">
      <div className="container">
        <div className="row">
          <div className="contain-texto pb-4">
            <h5 className="text-primary-color font-akshar font-weight-bold  pt-4 ">
              <u> Creators</u>
            </h5>
            <h3 className="text-white  font-akshar display-3">Top Sellers</h3>
          </div>
          {sellers.map((seller)=>(
            <div key={seller.id} className="col-12 col-md-6 col-lg-4 pb-4 ">
              <CardTopSellers
              seller={seller}
              />
          </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}

export default TopSellers;
