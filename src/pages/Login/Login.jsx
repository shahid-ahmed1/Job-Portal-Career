import React, { useContext, useEffect, useState } from 'react';
import loginAnimation  from '../../assets/animation/login.json';
import Lottie from 'lottie-react';
import AuthContext from '../../context/AuthContext';
import { data, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  // const [axios,setAxios]=useState();

    const [error ,setError] = useState({})
    const { signInUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const form = location.state || '/'
    const handlelogin=(e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target. password.value;
        signInUser(email,password)
        .then(result=>{
          
          // const user={email:result.user.email}
        //  const {data} = axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
        //  .then(res=>{
        //   console.log(res.data)
        //  })
            // navigate(form)
        })
        .catch(err =>console.log(err))
    }
    
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     <Lottie animationData={loginAnimation}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handlelogin}>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          {
            error && <label className="fieldset-label text-sm text-red-500">{error.password}</label>
          }
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <button className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
      </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;