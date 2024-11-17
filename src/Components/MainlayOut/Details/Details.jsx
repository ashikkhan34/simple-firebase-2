import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../../modal/Modal';

const Details = () => {
    const singleData = useLoaderData()
    const { image, description, treatment, cost } = singleData
    return (
        <div>
            <div className="card bg-base-100 image-full shadow-xl w-[500px] ">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{treatment}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn btn-primary">Book Appointment</button>
                    </div>
                    <Modal></Modal>
                </div>
            </div>
        </div>
    );
};

export default Details;