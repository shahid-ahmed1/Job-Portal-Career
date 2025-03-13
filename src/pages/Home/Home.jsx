import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Home = () => {
    const jobs = useLoaderData();
  
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