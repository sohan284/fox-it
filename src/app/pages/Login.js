import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Navigation from '../components/Home/Navigation';
import Footer1 from '../components/shared/Footer';
import { Button } from '@mui/material';
import Loader from '../components/shared/Loader';
import Footer2 from '../components/shared/Footer2';


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
            <Loader />
        </div>
    }

    return (
        <div>
            <Navigation />
            <div className='flex container shadow-lg mx-auto justify-center my-24 text-start'>
                <img className=" w-auto hidden lg:block loginImg" src="https://i.ibb.co/jkpNbZm/loginpage.jpg" alt="FoxIt" border="0" />
                <div className='bg-primary'>
                    <div className=' p-8 bg-primary'>
                        <div>
                            <h1 className='text-3xl font-bold mb-7'>Log-In</h1>
                            <h6 className='text-sm font-semibold '>Your Email</h6>
                            <input className='w-72 rounded-sm p-1'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                            />

                            <h6 className='text-sm font-semibold mt-5'>Password</h6>
                            <input className='w-72 rounded-sm p-1'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password' />
                            <br />
                            <Button
                                onClick={() => signInWithEmailAndPassword(email, password)}
                                style=
                                {{
                                    width: "288px",
                                    marginTop: '20px',
                                    backgroundColor: '#355E3B',
                                    color: 'whitesmoke',
                                    fontWeight: '700'
                                }}>
                                Login</Button>
                        </div>
                        {errorMessage}
                    </div>
                    <div className="text-secondary text-center bg-primary my-5" ><small>New to Fox IT? <span onClick={handleSignup} className='font-semibold text-[#355E3B] cursor-pointer' > Sign-Up</span></small> </div>
                    <div className='flex justify-center'>
                        <Button
                            onClick={handleSignup}
                            style=
                            {{
                                width: "288px",

                                justifyContent: 'center',
                                margin: '10px',
                                backgroundColor: '#001f00',
                                color: 'whitesmoke',
                                fontWeight: '700'
                            }}>
                            Create New Account</Button>
                    </div>
                </div>

            </div>
            <Footer2 />
        </div>
    );
};

export default Login;