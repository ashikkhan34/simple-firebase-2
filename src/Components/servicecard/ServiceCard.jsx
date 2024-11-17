import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {treatment,image,description,cost,id} = service
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {treatment}
                        <div className="badge w-20 badge-secondary">{cost} $</div>
                    </h2>
                    <p title={description}>{description.slice(0,100)}...</p>
                    <div className="card-actions justify-end">
                        <NavLink to={`/details/${id}`}>
                        <button className='btn btn-primary w-full'>CheckOut More</button >
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;