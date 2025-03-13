import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import Swal from 'sweetalert2';

const Application = () => {
    const { user} = useContext(AuthContext)
    const {id} = useParams();
    const navigate = useNavigate()
    const applicatonHand =(e)=>{
        e.preventDefault()
        const linkedin = e.target.linkedin.value;
        const github = e.target.github.value;
        const resumeWeb = e.target.resumeWeb.value;
        const jobId = id;
        const appliEmail = user.email
      const application ={jobId,appliEmail,linkedin,github,resumeWeb};
      fetch(`http://localhost:3000/job-applications`,{
        method:"POST",
        headers:{
          'content-type':'application/json'
        }
        ,
        body:JSON.stringify(application)
      })
      .then(res => res.json())
      .then(data => {
       if(data.insertedId){
        Swal.fire({
          title: "Application Success !",
          icon: "success",
          draggable: true
        });
       }
       navigate('/my-application')
      })

    }
    return (
        <div className="max-w-lg my-10 mx-auto p-6 bg-white shadow-lg rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Enter Your Social Links</h2>
        <form onSubmit={applicatonHand} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">LinkedIn URL</label>
            <input
              type="url"
              name="linkedin"
              placeholder="https://linkedin.com/in/your-profile"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">GitHub URL</label>
            <input
              type="url"
              name="github"
              placeholder="https://github.com/your-username"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Resume Website URL</label>
            <input
              type="url"
              name="resumeWeb"
              placeholder="https://your-website.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required

            />
           <button className="w-full mt-5 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">Submit Now</button>
          </div>
        </form>
      </div>
    );
};

export default Application;