import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const VIewApplication = () => {
  const [application, setApplication] = useState([]);

  const { job_id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/job-applications/jobs/${job_id}`)
      .then((res) => res.json())
      .then((data) => {
        setApplication(data);
      });
  }, [job_id]);
 const handleUpdateStatus=(e,id)=>{
console.log(e.target.value,id)
const data ={
    status:e.target.value
}
 fetch(`http://localhost:5000/job-applications/${id}`,{
      method:"PATCH",
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(data)
     })
     .then(res=> res.json())
     .then(data=>{
      console.log(data)
       if(data.modifiedCount){
              Swal.fire({
                title: " Status has updated !",
                icon: "success",
                draggable: true
              });
             }
     })
     .catch(error=>console.log(error.message))
 }
  return (
    <div>
      <h1>application for this job ({application.length}) </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Status</th>
              <th>Updated Status </th>
            </tr>
          </thead>
          <tbody>
            {application.map((job, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{job.appliEmail}</td>
                <td>{job.linkedin}</td>
                <td> <select
                onChange={(e)=>handleUpdateStatus(e,job._id)}
                  defaultValue={job.status || 'Change Status' }
                  className="select select-primary"
                >
                  <option disabled={true}>Change Status</option>
                  <option>Under Review</option>
                  <option>Set Review</option>
                  <option>Hired</option>
                  <option>Rejacted</option>
                
                </select></td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VIewApplication;
