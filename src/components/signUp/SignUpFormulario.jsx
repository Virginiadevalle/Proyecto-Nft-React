import React from "react";
import { useFormik,  } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import AlertaError from "../utilities/AlertaError";
import axios from "axios";

function SignUpFormulario() {
  const [user, setUser] = useState([]);

    const formik = useFormik({

      initialValues:{
        photo:'',
        nombre: '',
        lastname:'',
        correo:'',
        password:'',
      },
      onSubmit: (values, {resetForm}) => {
        // let newUser = values
        // setUser([...user, newUser])
        axios({
          method: 'post',
          url: 'http://localhost:4000/usuarios',
          data: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(resp => {
          console.log(resp.data);
      }).catch(error => {
          console.log(error);
      });
        
        resetForm()
        
      },
      validationSchema: Yup.object().shape({
        photo: Yup.mixed().required('A file is required'),
        nombre: Yup.string().required('Name is required'),
        lastname: Yup.string().required('Name is required'),
        correo: Yup.string().email('Invalidate email format').required('E-mail is required'),
        password: Yup.string().required('Please Enter your password')
        // .matches(
        //   "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        // )

      })
  
    })
  return (
    <>
    <h3 className="text-white text-center font-akshar display-3 mb-3 ">
              Sign Up
              </h3>
      <h6 className="text-white  font-size-30">Create a New Account</h6>
      <p className="text-gris mw-300">
      Sign up create a new account here.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className=" ">
        <label htmlFor="photo" className="form-label text-white">
                Choose Photo Profile *
              </label>
              <input
                type="file"
                className="form-control bg-negro-claro border2   mb-3"
                id="photo"
                name="photo"
                value={formik.values.photo}
                onChange={formik.handleChange}
              />
              {formik.errors.photo && formik.touched.photo ? (
                <AlertaError>{formik.errors.photo}</AlertaError>
              ) : null}


          <label
            htmlFor="nombre"
            className="form-label text-white"
          >
            Name *
          </label>
          <input
            type="name"
            className="form-control p-2 bg-negro-claro border2   mb-3"
            id="nombre"
            name="nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            
          />
          {formik.errors.nombre && formik.touched.nombre ? (
                <AlertaError>{formik.errors.nombre}</AlertaError>
              ) : null}
          <label
            htmlFor="lastname"
            className="form-label text-white"
          >
            Last Name *
          </label>
          <input
            type="name"
            className="form-control p-2 bg-negro-claro border2   mb-3"
            id="lastname"
            name="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
          />
          {formik.errors.lastname && formik.touched.lastname ? (
                <AlertaError>{formik.errors.lastname}</AlertaError>
              ) : null}
          <label
            htmlFor="correo"
            className="form-label text-white"
          >
            Email*
          </label>
          <input
            type="email"
            className="form-control p-2 bg-negro-claro border2   mb-3"
            id="correo"
            name="correo"
            value={formik.values.correo}
            onChange={formik.handleChange}
          />
          {formik.errors.correo && formik.touched.correo ? (
                <AlertaError>{formik.errors.correo}</AlertaError>
              ) : null}

          <label
            htmlFor="password"
            className="form-label text-white"
          >
            Password *
          </label>
          <input
            type="password"
            className="form-control p-2 mb-5 bg-negro-claro border2"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password ? (
                <AlertaError>{formik.errors.password}</AlertaError>
              ) : null}
        </div>
      <div className=" d-flex justify-content-start">
        <button
          type="submit"
          className="btn btn-outline-secondary border-primary-color bg-primary-color"
        >
          Submit
        </button>
        <button
          className="btn btn-outline-secondary border-primary-color bg-primary-color ms-3"
        >
          Back
        </button>
      </div>
      </form>
      <span className="mt-4 text-gris d-flex">
        Login with :
        <a href="#" className="text-decoration-none text-primary-color ms-2">
          Facebook
        </a>
        <a href="#" className="text-decoration-none text-primary-color  ms-2">
          Google
        </a>
      </span>
    </>
  );
}

export default SignUpFormulario;
