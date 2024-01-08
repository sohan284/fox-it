import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Navigation from '../components/Home/Navigation';
import { Button } from '@mui/material';
import Loader from '../components/shared/Loader';
import Footer2 from '../components/shared/Footer2';

const SignUp = () => {
    const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    let errorMessage;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    console.log(gUser);

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');

    }
    console.log(user);

    const handleSingUp = () => {
        if (/@g(oogle)?mail\.com$/.test(email) && password === cPassword) {
            createUserWithEmailAndPassword(email, password)
        }
    }


    if (error) {
        errorMessage = <p className='text-[red] font-semibold my-3 text-sm w-full'>{`${error?.message}`}</p>
    }
    if (loading) {
        return <div className='flex justify-center h-screen items-center'>
            <Loader />
        </div>
    }
    return (
        <div>
            <Navigation />
            <div className='flex justify-center mt-24'>
                <div className='bg-primary p-5 px-12'>
                    <div className='w-[100%] text-start bg-primary '>
                        <form>
                            <h1 className='text-3xl  font-bold mb-5'>Create Account</h1>
                            <h6 className='text-sm font-semibold '>Your Name</h6>
                            <input className='w-72 p-1 rounded-sm'
                                type="text"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Name' />

                            <h6 className='text-sm font-semibold mt-2'>Email</h6>
                            <input className='w-72 p-1 rounded-sm'
                                type="text"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email' />

                            <h6 className='text-sm font-semibold mt-2'>Password</h6>
                            <input required className='w-72 p-1 rounded-sm'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password' />

                            <h6 className='text-sm font-semibold mt-2'>Re-enter Password</h6>

                            <input className='w-72 p-1 rounded-sm' type="password"
                                value={cPassword}
                                required
                                onChange={(e) => setCPassword(e.target.value)}
                                placeholder='Re-password' />
                            <br />
                            <Button
                                onClick={handleSingUp}
                                style=
                                {{
                                    width: "288px",
                                    marginTop: '20px',
                                    backgroundColor: '#355E3B',
                                    color: 'whitesmoke',
                                    fontWeight: '700'
                                }}>
                                SignUp</Button>
                            {errorMessage}
                        </form>
                        <div className=" mt-5" ><small>Already have an account? <span onClick={handleLogin} className='font-semibold text-[#355E3B] cursor-pointer' > Log-In</span></small> </div>

                    </div>

                    <div className=" text-secondary my-1 font-serif" ><small>----- OR -----</small></div>
                    <div className='flex justify-center'>
                        <Button
                            onClick={() => signInWithGoogle()}
                            style=
                            {{
                                width: "288px",
                                justifyContent: 'center',
                                marginBottom: '5px',
                                backgroundColor: '#001f00',
                                color: 'whitesmoke',
                                fontWeight: '700'
                            }}>
                            <div><img className='w-8' src="https://i.ibb.co/Qj5082F/images-removebg-preview.png" alt="" /></div> Continue With Google</Button>
                    </div>
                </div>
                <img className=" w-auto hidden lg:block signupImg" src="https://i.ibb.co/jkpNbZm/loginpage.jpg" alt="FoxIt" border="0" />


            </div>
            <Footer2 />
        </div>

    );
};

export default SignUp;