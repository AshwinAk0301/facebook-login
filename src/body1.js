import React, { useState } from "react";
import "./body.css";
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useFormik,ErrorMessageProps } from "formik";
import * as yup from "yup";
import "yup-phone-lite";
 

const Body1 = () => {   

  // const [FirstName,setFirstName] = useState('')
  // const [lastName,setLastName] = useState('')
  // const [email,setEmail] = useState('')
  // const [phoneNumber,setPhoneNumber] = useState('')
  // const [password,setPassword] = useState('')
  // const [confirmPassword,setConfirmPassword] = useState('')

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },

  validateYupSchema : yup.object({
    firstName: yup.string()
        .required("Name is required")
        .min(5, "Minimum 5 Characters is required ")
        .max(15, "Maximum 15 Characters only allowed"),

        lastName: yup.string()
        .required("Name is required")
        .min(2, "Minimum 5 Characters is required ")
        .max(15, "Maximum 15 Characters only allowed"),

      email: yup.string()
      .email()
      .required("Email is required"),

      mobile:yup.string()
      .phone("IND", "Please enter a valid phone number")
      
      .required("This field is Required"),       

      password: yup.string()
      .required("Password is required"),

      confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required("confirmPassword is required"),
    }),

    onSubmit: (userInputData) => {
      console.log(userInputData);
    },
  })
  

 
  return (
    <div className="form__box">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img
            className="fblogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
          />
        </div>
        <div className="col-md-4">
          <h1> Register </h1>
          <form 
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className="Form_body">

          <input type='text' name = "firstName" placeholder="First Name" className="form-control" onChange={formik.handleChange} />
         
          {formik.errors.firstName ? (
              <div className="text-danger">{formik.errors.firstName} </div>
            ) : null}

          <br/>
          <input type='text' name = "lastName" placeholder="Last Name" className="form-control" onChange={formik.handleChange} />
          {formik.errors.lastName ? (
              <div className="text-danger">{formik.errors.lastName} </div>
            ) : null}
          <br/>
          <input type='text' name="email" placeholder="Email" className="form-control" onChange={formik.handleChange}/>
          {formik.errors.email ? (
              <div className="text-danger">{formik.errors.email} </div>
            ) : null}<br/>
          <input type='text' name="mobile" placeholder="Phone Number" className="form-control" onChange={formik.handleChange}/>
          {formik.errors.mobile ? (
              <div className="text-danger">{formik.errors.mobile} </div>
            ) : null}
            <br/>
          <input type='text' name="password" placeholder="Password" className="form-control" onChange={formik.handleChange}/>
          
          {formik.errors.password ? (
              <div className="text-danger">{formik.errors.password} </div>
            ) : null}
            <br/>
          <input type='text' name="confirmPassword" placeholder="ConfirmPassword" className="form-control" onChange={formik.handleChange}/>
          {formik.errors.confirmPassword ? (
              <div className="text-danger">{formik.errors.confirmPassword} </div>
            ) : null}
            <br/>
          <button type="submit" className="btn btn-primary"> Register </button>
          </form>
        </div>
</div>
</div>
  );
};

export default Body1;
