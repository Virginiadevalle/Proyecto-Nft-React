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
        <div className="contain-avatar-img d-flex align-items-center ">
          <img
            src="/src/img/avatarCardS.jpg"
            className="img-topsellers  rounded-circle"
            alt=""
          />
          <div className="contain-nombre text-white d-flex flex-column ps-3 ">
            <Link to={`/usuarios/${seller.id}`} className="text-decoration-none text-white mb-2">{seller.nombre} {seller.lastname}</Link>
            <span>2.65 ETH</span>
          </div>
        </div>
        <div className="contain-items text-white px-2 text-center  ">
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
