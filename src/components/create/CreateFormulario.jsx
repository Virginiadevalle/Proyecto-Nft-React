import React from "react";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import AlertaError from "../AlertaError";

function CreateFormulario() {
  const [item, setItem] = useState([]);

  const formik = useFormik({
    initialValues: {
      file: "",
      item_name: "",
      description: "",
      item_price: "",
      size: "",
      royality: "",
      no_of_copies: "",
    },

    onSubmit: (values) => {
      let nuevoItem = values
      setItem([...item, nuevoItem]);
    },

    validationSchema: Yup.object().shape({
      file: Yup.mixed().required('A file is required'),
      item_name: Yup.string().required("Name is Required"),
      description: Yup.string("").required("Description is Required"),
      item_price: Yup.number()
      .required("Item Price is Required")
        .integer("Número no es Válido")
        .positive("Número no es Válido")
        .typeError("El Número no es Válido"),
      size: Yup.number()
      .required("Size is Required")
        .integer("Número no es Válido")
        .positive("Número no es Válido")
        .typeError("El Número no es Válido"),
      royality: Yup.number()
      .required("Royality is Required")
        .integer("Número no es Válido")
        .positive("Número no es Válido")
        .typeError("El Número no es Válido"),
      no_of_copies: Yup.number()
      .required("No of Copies is Required")
        .integer("Número no es Válido")
        .positive("Número no es Válido")
        .typeError("El Número no es Válido"),
    }),
  });

  return (
    <>
      <div className="col-12 col-lg-8  mt-5 mt-lg-0">
        <h5 className="text-primary-color font-akshar font-weight-bold ">
          <u>Create</u>
        </h5>
        <h3 className="text-white  mb-5 font-akshar display-3">Create Item</h3>

        <div className="bg-cards p-md-5 border-card">
          <form onSubmit={formik.handleSubmit}>
            <div className=" ">
              <label htmlFor="file" className="form-label text-white">
                Choose file *
              </label>
              <input
                type="file"
                className="form-control bg-negro-claro border2   mb-3"
                id="file"
                name="file"
                value={formik.values.file}
                onChange={formik.handleChange}
              />
              {formik.errors.file && formik.touched.file ? (
                <AlertaError>{formik.errors.file}</AlertaError>
              ) : null}

              <label htmlFor="item_name" className="form-label text-white">
                Item Name *
              </label>
              <input
                type="text"
                className="form-control bg-negro-claro border2 "
                id="item_name"
                name="item_name"
                value={formik.values.item_name}
                onChange={formik.handleChange}
              />
              {formik.errors.item_name && formik.touched.item_name ? (
                <AlertaError>{formik.errors.item_name}</AlertaError>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label text-white">
                Description *
              </label>
              <textarea
                className="form-control bg-negro-claro border2"
                id="description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                rows="3"
              ></textarea>

              {formik.errors.description && formik.touched.description ? (
                <AlertaError>{formik.errors.description}</AlertaError>
              ) : null}
            </div>

            <div className="d-flex justify-content-between">
              <div className="w-100 mb-3 me-2 ">
                <label htmlFor="item_price" className="form-label text-white">
                  Item Price *
                </label>

                <input
                  type="number"
                  className="form-control w-100 bg-negro-claro border2  "
                  id="item_price"
                  name="item_price"
                  value={formik.values.item_price}
                  onChange={formik.handleChange}
                />
                 {formik.errors.item_price && formik.touched.item_price ? (
                <AlertaError>{formik.errors.item_price}</AlertaError>
              ) : null}

                <label htmlFor="size" className="form-label text-white">
                  Size *
                </label>

                <input
                  type="number"
                  className="form-control  w-100 bg-negro-claro border2  "
                  id="size"
                  name="size"
                  value={formik.values.size}
                  onChange={formik.handleChange}
                />
                {formik.errors.size && formik.touched.size ? (
                <AlertaError>{formik.errors.size}</AlertaError>
              ) : null}
              </div>
              <div className="w-100 mb-3 ms-2">
                <div>
                  <label htmlFor="royality" className="form-label text-white">
                    Royality *
                  </label>
                </div>
                <input
                  type="number"
                  className="form-control w-100 bg-negro-claro border2 "
                  id="royality"
                  name="royality"
                  value={formik.values.royality}
                  onChange={formik.handleChange}
                />
                 {formik.errors.royality && formik.touched.royality ? (
                <AlertaError>{formik.errors.royality}</AlertaError>
              ) : null}
                <label htmlFor="no_of_copies" className="form-label text-white">
                  No of Copies *
                </label>
                <input
                  type="number"
                  className="form-control  w-100 bg-negro-claro border2 "
                  id="no_of_copies"
                  name="no_of_copies"
                  value={formik.values.no_of_copies}
                  onChange={formik.handleChange}
                />
                {formik.errors.no_of_copies && formik.touched.no_of_copies ? (
                <AlertaError>{formik.errors.no_of_copies}</AlertaError>
              ) : null}
              </div>
            </div>

            <input
              value="Create Item"
              type="submit"
              className="btn btn-outline-secondary border-primary-color bg-primary-color"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateFormulario;
