import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaMapMarkerAlt, FaBriefcase, FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router-dom';
const CardDetails = () => {
    const job = useLoaderData();
    return (
        <div className='my-10'>
              <div className="max-w-lg mx-auto p-6 bg-white shadow-xl border border-gray-200 rounded-2xl hover:shadow-2xl transition duration-300">
      <div className="flex items-center gap-4 border-b pb-4 mb-4">
        <img
          src={job.company_logo}
          alt={job.company}
          className="w-16 h-16 rounded-full object-cover border-4 border-blue-500"
        />
        <div>
          <h2 className="text-2xl font-bold text-blue-700">{job.title}</h2>
          <p className="text-gray-600 font-medium text-sm">{job.company}</p>
        </div>
      </div>
      <div className="space-y-3">
        <p className="flex items-center gap-2 text-gray-700 font-medium">
          <FaMapMarkerAlt className="text-red-500" /> {job.location}
        </p>
        <p className="flex items-center gap-2 text-gray-700 font-medium">
          <FaBriefcase className="text-green-500" /> {job.jobType}
        </p>
        <p className="flex items-center gap-2 text-gray-700 font-medium">
          <FaDollarSign className="text-yellow-500" /> {job.salaryRange?.min} - {job.salaryRange?.max} BDT
        </p>
        <p className="flex items-center gap-2 text-gray-700 font-medium">
          <FaCalendarAlt className="text-purple-500" /> Apply before: {job.applicationDeadline}
        </p>
        <p className="text-gray-700 leading-relaxed text-sm border-t pt-3">{job.description}</p>
      </div>
      <div className="mt-5 flex flex-col gap-3">
       <Link to={`/jobsApply/${job._id}`}>
       <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">Apply Now</button></Link>
      
      </div>
    </div>
        </div>
    );
};

export default CardDetails;