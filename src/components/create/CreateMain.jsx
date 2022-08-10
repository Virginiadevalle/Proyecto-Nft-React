import React from "react";
import CreateFormulario from "./CreateFormulario";
import CreateUser from "./CreateUser";


function CreateMain() {
  return (
    <>
      <section className="seccion-main bg-negro-claro py-5">
        <div className="container">
          <div className="row">
            <CreateUser/>
            <CreateFormulario/>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateMain;
