import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const url = 'http://localhost:4000/usuarios'
function CardExplore({item}) {

  const [user, setUser] = useState([]);
  useEffect(() => {
      let usuario_id = item.usuarioId
        axios({
          method: 'get',
          url: `${url}/${usuario_id}`,
        })
  
        .then(({data}) => {
          setUser(data)
        })
        
        .catch(error => {
          console.log(error);
        });
  
   
  }, [])


  return (
    <>
      <div className="card p-3 bg-cards me-0  ">
        <div className="contain-img position-relative">
          <img
            src="/src/img/c214985c332ace152aa28294d0ca77ba17fa2166-760x400.jpg"
            className="card-img-top "
            alt="..."
          />
          <span className="bg-primary-color  text-white p-1 rounded position-absolute start-0 bottom-0 ms-1 mb-1 ">
            03:18:24
          </span>
        </div>
        <div className="card-body px-0 pb-0 ">
          <div className="contain-title text-white d-flex justify-content-between ">
            <h5 className="card-title">
            <Link
                className="text-decoration-none text-white"
                to={`/item-details/${item.id}`}
              >
                {item.item_name}
              </Link>
            </h5>
            <div className="text-gris">
              <i className="bi bi-heart pe-1"></i>
              <span>92</span>
            </div>
          </div>
          <div className="contain-avatar d-flex align-items-center justify-content-evely  pb-2 ">
            <div className=" d-flex">
              <div className="avatares1">
                <img src="/src/img/avataresJuntos.png" alt="" />
              </div>
              <div className="avatares2">
                <img src="/src/img/avataresJuntos.png" alt="" />
              </div>
              <div className="avatares3">
                <img src="/src/img/avataresJuntos.png" alt="" />
              </div>
            </div>
            <div>
              <span className="text-gris ps-1">9+ People place bit</span>
            </div>
          </div>
          <div className="contain-autions pt-2 d-flex justify-content-between align-items-center ">
            <div className="d-flex">
              <span className="text-gris">Owned By</span>
              <h5 className="text-white ps-1 m-0">{user.nombre}</h5>
            </div>
            <span className="text-white">
              <i className="bi bi-arrow-up-short text-danger"></i>5.4 ETH
            </span>
          </div>
          <div className="text-center">
            <img src="/src/img/Line.png" className="img-fluid" alt="" />
          </div>
          <div className="contain-price mt-2  d-flex justify-content-center  bg-negro-claro p-2 rounded ">
            <strong>
              <a href="#" className="text-white text-decoration-none">
                <i className="bi bi-handbag"></i> Place a bit
              </a>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardExplore;
