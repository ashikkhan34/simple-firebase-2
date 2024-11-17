import React from 'react';

const Feedback = ({ feedbackData }) => {
    return (
        <div className='grid md:grid-cols-3'>
            {
                feedbackData.map(feed =>
                    <div className='mt-10 flex'>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <div className='flex gap-3 items-center'>
                                    <img src={feed.userImg} className='w-14 h-14 rounded-full' alt="" />
                                    <h1 className='text-2xl font-semibold'>{feed.name}</h1>
                                    <p className='ml-5'>{new Date().toLocaleDateString()}</p>
                                </div>
                                <p>{feed.review}</p>
                                <div className="card-actions justify-between">
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input
                                            type="radio"
                                            name="rating-2"
                                            className="mask mask-star-2 bg-orange-400"
                                            defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Feedback;