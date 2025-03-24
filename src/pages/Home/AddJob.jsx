import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddJob = () => {
    const { user} = useContext(AuthContext)
    const handleAddJob=(e)=>{ 
      e.preventDefault();
      const fromData = new FormData(e.target);
      const initaialData = Object.fromEntries(fromData.entries());
      const {salaryMin,salaryMax,currency,...newJob}=initaialData ;
      newJob.salaryRange={salaryMin,salaryMax,currency};
      newJob.requirements = newJob.requirements.split('\n');
      newJob.responsibilities = newJob.responsibilities.split('\n');
      console.log(newJob)
     
     fetch('http://localhost:5000/jobs',{
      method:"POST",
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(newJob)
     })
     .then(res=> res.json())
     .then(data=>{
      console.log(data)
       if(data.insertedId){
              Swal.fire({
                title: "Jobs Added Success !",
                icon: "success",
                draggable: true
              });
             }
     })
     .catch(error=>console.log(error.message))

    }
    return (
        <div className='my-10'>
          <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Job Application Form</h2>
      <form onSubmit={handleAddJob} className="space-y-4">
        <input name="title" placeholder="Job Title" className="w-full p-2 border rounded" />
        <input name="location" placeholder="Location" className="w-full p-2 border rounded" />
        <input name="jobType" placeholder="Job Type" className="w-full p-2 border rounded" />
        
        {/* Category Dropdown */}
        <select name="category" className="w-full p-2 border rounded">
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
          <option value="HR">HR</option>
        </select>
        
        <input name="applicationDeadline" type="date" className="w-full p-2 border rounded" />
        
        {/* Salary Section */}
        <div className="grid grid-cols-3 gap-2">
          <input name="salaryMin" placeholder="Min Salary" className="p-2 border rounded" />
          <input name="salaryMax" placeholder="Max Salary" className="p-2 border rounded" />
          <select name="currency" className="p-2 border rounded">
            <option value="USD">USD</option>
            <option value="BDT">BDT</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
          </select>
        </div>
        
        <textarea name="description" placeholder="Job Description" className="w-full p-2 border rounded"></textarea>
        <input name="company" placeholder="Company Name" className="w-full p-2 border rounded" />
        <textarea name="requirements"  placeholder="Requirements (comma separated)" className="w-full p-2 border rounded" ></textarea>
        <textarea name="responsibilities" placeholder="Responsibilities (comma separated)" className="w-full p-2 border rounded" ></textarea>
        <input name="hr_email" type="email" readOnly value={user.email} className="w-full p-2 border rounded" />
        <input name="hr_name" placeholder="HR Name" className="w-full p-2 border rounded" />
        <input name="company_logo" placeholder="Company Logo URL" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
      </form>
    </div>
        </div>
    );
};

export default AddJob;