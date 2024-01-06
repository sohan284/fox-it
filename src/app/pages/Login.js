import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Navigation from '../components/Home/Navigation';
import Footer1 from '../components/shared/Footer';
import { HashLoader } from 'react-spinners';
import { Button } from '@mui/material';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let from = location.state?.from?.pathname || "/";

    const handleSignup = () => {
        navigate('/signup');

    }
    if (user) {
        navigate(from, { replace: true });

    }
    if (error) {
        errorMessage = <p className='text-[red] my-3 font-semibold text-xs'>Email or password you've entered is incorrect.</p>
    }
    if (loading) {
        return <div className='flex justify-center h-screen items-center'>
            <HashLoader
                color="#F0EDCC"
                size={100}
            />
        </div>
    }

    return (
        <div>
            <Navigation />
            <div className='flex justify-center my-24 text-start'>
                <div className=''>
                    <div className='border rounded-lg p-8 mt-5 shadow-lg bg-primary'>
                        <div>
                            <h1 className='text-3xl font-bold mb-7'>Log-In</h1>

                            <h6 className='text-sm font-semibold '>Your Email</h6>
                            <input className='w-72 rounded-lg p-2'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                            />

                            <h6 className='text-sm font-semibold mt-10'>Password</h6>
                            <input className='w-72 rounded-lg p-2'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password' />
                            <br />
                            <button onClick={() => signInWithEmailAndPassword(email, password)} className='w-72 text-white font-bold bg-secondary hover:text-accent hover:border-accent text-primary rounded p-1 mt-10'> Login</button>

                        </div>
                        {errorMessage}
                    </div>
                    <div className="divider my-8 text-primary" ><small>New to Fox IT ?</small></div>
                    <button onClick={handleSignup} className=' shadow-lg bg-primary hover:bg-accent w-full p-1 rounded'>Create Your account</button>
                </div>
            </div>
            <Footer1/>
        </div>
    );
};

export default Login;