import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?=\S+$).{6,}$/;
    const [error,setError] = useState('')
    const {handleRegister,manageProfile} = useContext(authContext)
    const handleSubmit = e =>{
        e.preventDefault()
        setError('')
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (regex.test(password)) {
            setError(<p className='text-green-500'>"Registration successful"</p>)
        } else {
            setError('must be 1 uppercase 1 lowercase ,1 number and  special character and more then 6 character')
        }
        const conPassword = e.target.conPassword.value;
        if(password !== conPassword){
            setError("password didn't match")
            return;
        }

        // console.log(name,image,email,password,conPassword)
        handleRegister(email,password)
        .then(res =>{
            manageProfile(name,image)
        })

    }
    return (
        <div className=' justify-center flex py-6'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">ImageURL</span>
                        </label>
                        <input type="text" name='image' placeholder="Image URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name='conPassword' placeholder="Confirm password" className="input input-bordered" required />
                    </div>
                    {error  && <p className='text-red-600'>{error}</p> }
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                <p>Already have an account ? Please <Link className='text-red-500 underline font-semibold' to='/login'>Login</Link></p>

                </form>
                
            </div>
        </div>
    );
};

export default Register;