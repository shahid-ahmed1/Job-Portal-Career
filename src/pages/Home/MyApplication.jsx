import React, { useContext, useEffect, useState } from 'react';
import { data, useLoaderData } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import useAxousSequre from '../../hooks/UseAxousSequre';

const MyApplication = () => {
    const { user} = useContext(AuthContext)
    const [users ,setUsers]= useState([])

    const axiosSecure= useAxousSequre();
useEffect(()=>{

  axiosSecure.get(`/job-application?email=${user?.email}`)
  .then(res=> setUsers(res.data))
  // axios.get(`http://localhost:5000/job-application?email=${user?.email}`,{withCredentials:true})
  // .then(res=> {
  //   setUsers(res.data)
  //   console.log(res.data)
  // })
  // fetch(`http://localhost:5000/job-application?email=${user?.email}`)
  // .then(res=>res.json())
  // .then(data=>{
  //   setUsers(data)
  // })
},[user])
    return (
        <div>
        {
            users.map(job => 
            <div key={job._id} className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                     
                      <th>Name</th>
                      <th>Job</th>
                      <th>Favorite Color</th>
                 
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                     
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={job?.
                                  company_logo}
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{job.title}</div>
                            <div className="text-sm opacity-50">{job.location}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        Zemlak, Daniel and Leannon
                        <br />
                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                      </td>
                      <td>Purple</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">delate</button>
                      </th>
                    </tr>
                   
                   
                    
                  </tbody>
                 
                </table>
              </div>)
        }
        </div>
    );
};

export default MyApplication;