import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../servicecard/ServiceCard';

const AllTreatments = () => {
    const serviceData = useLoaderData()
    return (
        <div className='grid md:grid-cols-4 gap-4 mt-5 mb-6'>
                {
                    serviceData.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
    );
};

export default AllTreatments;