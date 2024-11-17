import React from 'react';
import Banner from '../Banner/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../servicecard/ServiceCard';
import Feedback from '../feedback/Feedback';

const Home = () => {
    const serviceDataPack = useLoaderData()
    const {serviceData,feedbackData} = serviceDataPack;
     return (
        <div className='mb-10'>
            <Banner></Banner>
            <div className='grid md:grid-cols-4 gap-4'>
                {
                    serviceData.slice(0,4).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            <button className='btn btn-success block mx-auto mt-5 w-40 '>
            <NavLink to='/allTreatments' >Show More</NavLink>
            </button>

            <Feedback feedbackData={feedbackData}></Feedback>
        </div>
    );
};

export default Home;