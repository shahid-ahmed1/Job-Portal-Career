import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const axiosInstance =axios.create({
baseURL:'http://localhost:5000',
withCredentials:true
})
const useAxousSequre = () => {
    const navigate = useNavigate()
     const {signOutUser}= useContext(AuthContext)
useEffect(()=>{
    axiosInstance.interceptors.response.use((reaponse)=>{
        return reaponse
    },(error)=>{
        console.log(error)
     if(error.status === 401 || error.status === 403){
        console.log('need to logout the user')
        signOutUser()
        .then((result)=>{
            console.log('logged out user')
            navigate('/login')
        })
        .catch(error=>console.log(error.message))
        
     }

        return Promise.reject(error)
    })
},[])

    return axiosInstance
};

export default useAxousSequre;