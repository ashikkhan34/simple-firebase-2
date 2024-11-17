import React, { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import Register from '../Register/Register';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [error,setError] = useState('')
    const { handleGoogleLogin,handleLogin } = useContext(authContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const handleSubmit = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(name,image,email,password,conPassword)
        handleLogin(email,password)
        .then(res =>{
            navigate(location.state? location.state : '/')
            setError(<p className='text-green-500'>Login Successful</p>)
        })
        .catch(error =>{
            setError(<p className='text-red-600'>Login felid</p>)
        })
    }
    const googleLogin = ()=>{
        handleGoogleLogin()
        .then(res =>{
            navigate(location.state)
        })
    }
    return (
        <div className=' justify-center flex py-6'>
            {/* <button onClick={handleGoogleLogin}>google</button> */}
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        {error && <p>{error}</p>}
                        <div>
                            <p>Continue with 
                            <button className='ml-2 underline text-blue-500 ' onClick={googleLogin}>Google</button>
                            </p>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Don't have an account ? Please <NavLink className='text-red-500 underline font-semibold'  to='/register'>Register</NavLink></p>
                </form>

            </div>
        </div>
    );
};

export default Login;