import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


const url = 'http://localhost:4000/usuarios'
function CreateUser({id}) {
  const [user, setUser] = useState({});
useEffect(() => {
    let usuario_id = id
      axios({
        method: 'get',
        url: `${url}/${usuario_id}`,
      })

      .then(resp => {
        setUser(resp.data)
      })
      
      .catch(error => {
        console.log(error);
      });

 
}, [])

     
      
  return (

    <div className='d-flex flex-column align-items-center bg-cards py-5 px-3  border-card   me-2'>
              <div className="text-center img-80px">
                <img
                  src='/src/img/c214985c332ace152aa28294d0ca77ba17fa2166-760x400.jpg'
                  className="rounded-circle img-fluid img-author "
                  alt=""
                />
              </div>
              <div className="contain-title text-center ">
                <h5 className="card-title  my-3">
                  <Link
                    className="text-decoration-none text-white  "
                    to={"/author-profile"}
                  >
                    {user.nombre} {user.lastname}
                  </Link>
                </h5>

                <a href="#" className="text-white">
                  {user.correo}
                </a>

                <ul className="d-flex justify-content-center p-3 m-0 ">
                  <li className="list-unstyled me-2 p-2 icons-footer">
                    <a href="#" className="text-decoration-none text-white">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li className="list-unstyled me-2 p-2 icons-footer">
                    <a href="#" className="text-decoration-none text-white">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </li>
                  <li className="list-unstyled me-2 p-2 icons-footer">
                    <a href="#" className="text-decoration-none text-white">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li className="list-unstyled me-2 p-2 icons-footer">
                    <a href="#" className="text-decoration-none text-white">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </li>
                </ul>
                <div className="contain-btn d-flex justify-content-center  p-1 pb-3 rounded">
                  <button className="list-unstyled mb-lg-0 btn py-2 btn-outline-secondary px-4  text-white font-size-14">
                    Follow
                  </button>
                </div>
              </div>
            </div>

  )
}

export default CreateUser