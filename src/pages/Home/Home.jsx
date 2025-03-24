import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Home = () => {
    // const jobs = useLoaderData();
  const [jobs ,setJobs] =useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/jobs`)
    .then(res=>res.json())
    .then(data=>{
        setJobs(data)
    })
  },[])
    return (
        <div>
            <div className='my-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
            jobs.map(job=> <Card key={job._id} job={job}></Card>)
           }
            </div>
       
        </div>
    );
};

export default Home;