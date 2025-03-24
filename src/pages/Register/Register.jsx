import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registerAnimation from '../../assets/animation/register.json'
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import { data } from 'react-router-dom';
const Register = () => {
  const [error ,setError] = useState({})
  const {createUser} = useContext(AuthContext)
  const handleRegister =(e)=>{
  e.preventDefault()
  const email = e.target.email.value;
  const password = e.target.password.value;

  const passwordValidation = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  if(!passwordValidation.test(password)){
    setError({password:'Password at least one upperCase ,one lowerCase,and 6 charecter or long'});
    return
  }
  console.log(email,password);
  createUser(email,password)
  .then(result=>{
    // const user ={email:email}
    // axios.post('http://localhost:3000/jwt',user)
    // .then(data=>console.log(data.data))
  })

  }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
         <Lottie animationData={registerAnimation}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl font-bold">Register Now !</h1>
          <form onSubmit={handleRegister}>
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a>
                {
            error.password && <label className="fieldset-label text-sm text-red-500">{error.password}</label>
          }
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;