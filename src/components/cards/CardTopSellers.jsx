import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";


const url = 'http://localhost:4000/usuarios/'
function CardTopSellers({seller}) {
let idItems = seller.id
const [items, setItems] = useState([])

useEffect(() => {
  axios({
      method: 'get',
      url: `${url}${idItems}/items`
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
    <>
      <div className="contain-card bg-cards p-4 d-flex justify-content-between rounded    ">
        <div className="contain-avatar-img img-80px d-flex align-items-center ">
          <img
            src="/src/img/c214985c332ace152aa28294d0ca77ba17fa2166-760x400.jpg"
            className="rounded-circle img-fluid img-author "
            alt=""
          />
          <div className="contain-nombre text-white mw-auto d-flex flex-column ps-3 ">
            <Link to={`/usuarios/${seller.id}`} className="text-decoration-none width-100px text-white mb-2">{seller.nombre} {seller.lastname}</Link>
            <span className="width-100px">2.65 ETH</span>
          </div>
        </div>
        <div className="contain-items text-white  px-2 text-center  ">
          <h4 className="m-0">
            <strong>{items.length}</strong>
          </h4>
          <span>Items</span>
        </div>
      </div>
    </>
  );
}

export default CardTopSellers;
