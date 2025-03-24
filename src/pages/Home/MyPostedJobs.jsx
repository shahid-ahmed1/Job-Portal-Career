import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const [jobs,setJobs]=useState([]);
    const { user} = useContext(AuthContext)
    useEffect(()=>{
        fetch(`https://job-portal-server-for-recruiter-part3-sand.vercel.app/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
       setJobs(data)
        })
    },[user.email])
    return (
        <div>  
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>dedline</th>
        <th>View application</th>
      </tr>
    </thead>
<tbody>
   {
    jobs.map((job,idx)=>(
        <tr key={idx}>
        <th>{idx+1}</th>
        <td>{job.title}</td>
        <td>{job.company}</td>
        <td>{job.
applicationDeadline}</td>
        
        <td><Link to={`/application/${job._id}`}><button className='btn btn-accent'>Application</button></Link></td>
      </tr>
    ))
   }
</tbody>
  </table>
</div>
        </div>
    );
};

export default MyPostedJobs;