import React, { useState } from "react";
import "./body.css";
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useFormik,ErrorMessageProps } from "formik";
import * as yup from "yup";
import "yup-phone-lite";
 

const Body = () => {   

  

   const [firstname,setFirstName] = useState('')
   const [lastname,setLastName] = useState('')
   const [email,setEmail]= useState('')
   const[mobile,setMobile] = useState('') 
   const [password,setPassword] = useState('')
   const [confirmPassword,setConfirmPassword] = useState('')
  
 
   

   const registeruser=(event)=>
   {
    event.preventDefault()

    var users = JSON.parse(localStorage.getItem('users') || "[]")

    var newuser = {
      firstName : firstname ,
      lastName : lastname,
      email: email,
      mobile : mobile,
      password : password,
      confirmPassword : confirmPassword
    }

    users.push(newuser)      

    localStorage.setItem('users',JSON.stringify(users))

    alert('msg');
   }
  
   
  return (
    <div>
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
          onSubmit={registeruser}
          className="Form_body">

          <input type='text' name = "firstName" placeholder="First Name" className="form-control" onChange={(e)=>{setFirstName(e.target.value)}} />
          
          <br/>

          <input type='text' name = "lastName" placeholder="Last Name" className="form-control" onChange={(e)=>{setLastName(e.target.value)}} />
           
          <br/>

          <input type='text' name="email" placeholder="Email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}}/>
           
          <br/>

          <input type='text' name="mobile" placeholder="Phone Number" className="form-control" onChange={(e)=>{setMobile(e.target.value)}}/>
           
          <br/>

          <input type='text' name="password" placeholder="Password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}}/>
                    
          <br/>

          <input type='text' name="confirmPassword" placeholder="ConfirmPassword" className="form-control" onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
           
          <br/>

          <button type="submit" className="btn btn-primary">  Sign Up </button>
          
          </form>
        </div>
</div>
</div>
  );
};

export default Body;

