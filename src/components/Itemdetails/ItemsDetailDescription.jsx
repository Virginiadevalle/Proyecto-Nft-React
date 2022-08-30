import React from "react";

function ItemsDetailDescription({description}) {
  return (
   <>
    <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center">
      <div className="d-flex mb-3 mb-md-0">
        <div>
          <img
            src="/src/img/avatarCardS.jpg"
            className="rounded-circle img-topsellers"
            alt=""
          />
        </div>
        <div className="d-flex flex-column justify-content-center ps-2">
          <h5 className="text-white mb-1 ">Rosei Binchy</h5>
          <span className="text-gris">Item Owner</span>
        </div>
      </div>
      <div className=" bg-cards d-flex justify-content-between align-items-center px-2  py-2  price rounded ">
        <span className="text-gris pe-3 ">Highest Bid </span>
        <div className="d-flex align-items-center">
          <span className="text-white pe-2">68.2 ETH</span>
          <img src="/src/img/fire.png" alt="" />
        </div>
      </div>
      
    </div>
    
   
   </>
  );
}

export default ItemsDetailDescription;
