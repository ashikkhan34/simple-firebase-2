import React from 'react';

const Modal = () => {
    const handleSubmit = e => {
        e.preventDefault()
        console.log(e)
    }
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit} action="" className='space-y-3'>
                        <label className='text-black '>First Name : </label>
                        <input
                            type="text"
                            name='Fname'
                            placeholder="First Name"
                            className="input input-bordered input-secondary text-black w-full max-w-xs" />
                        <br />
                        <label className='text-black '>Last Name : </label>
                        <input
                            type="text"
                            name='Lname'
                            placeholder="Last Name "
                            className="input input-bordered input-secondary w-full max-w-xs" />
                        <br />
                        <label className='text-black '>Email : </label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Email"
                            className="input input-bordered input-secondary w-full max-w-xs" />
                        <br />
                        <label className='text-black '>Number : </label>
                        <input
                            type="number"
                            name='number'
                            placeholder="Number"
                            className="input input-bordered input-secondary w-full max-w-xs" />
                        <br />
                        <label className='text-black '> Date : </label>
                        <input
                            type="date"
                            name='date'
                            placeholder="Appointment Date"
                            className="input input-bordered input-secondary w-full max-w-xs" />
                        <br />
                        <label className='text-black '>Address : </label>
                        <input
                            type="text"
                            name='address'
                            placeholder="Address"
                            className="input input-bordered input-secondary w-full max-w-xs" />


                        <button type="submit" className='btn btn-primary'>Make Appointment</button>

                    </form>



                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;