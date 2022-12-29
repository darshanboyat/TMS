import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Google from '../Google/LoginButton';
import axios from 'axios'
import './Signup.css'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FingerprintIcon from '@mui/icons-material/Fingerprint';



const Item = styled(Paper)(({ theme }) => ({
}));

export default function BasicGrid() {
    const [passwordToggle, setPasswordToggle] = useState(true)
    const [message, setMessage] = useState(null)
    var { register, reset, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const onSubmit = async (data) => {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/signup`, data,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => {
                console.log("User Sigup: ", res)
                navigate('/auth/signin')
            }).catch(err => { console.log("Error: ", err) })

        console.log("User: ", data)
    }
    const passwordVisiblity = () => {
        passwordToggle ? setPasswordToggle(false) : setPasswordToggle(true)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={6} className="signin-main-container signup-main-container">
                    <Item className="signin-container signup-container">
                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                            <Typography variant='h4' sx={{ textDecoration: 'none', color: 'black' }}><FingerprintIcon sx={{ color: 'black' }} />TMS</Typography>
                        </Link>
                        <Box className='signin-form-container signup-form-container'>
                            <Typography variant="h6" className="auth-header">Sign Up</Typography>
                            <form action="" className='signin-form' onSubmit={handleSubmit(onSubmit)}>
                                <Box className="input-wrapper signup-field">
                                    <label htmlFor="">Enter Your Name</label>
                                    <input type="text" name="" id="" className='signin-input-field signup-input-field' placeholder='Enter your email address' {...register("name", { required: true })} />
                                    {errors.name && <p className='error' style={{ color: 'red', fontSize: '30px !important', opacity: '.6' }}>Field is required</p>}
                                </Box>
                                <Box className="input-wrapper signup-field">
                                    <label htmlFor="">Email Address</label>
                                    <input type="email" name="" id="" className='signin-input-field signup-input-field' placeholder='Enter your email address' {...register("email", { required: true })} />
                                    {errors.email && <p className='error' style={{ color: 'red', fontSize: '30px !important', opacity: '.6' }}>Field is required</p>}
                                </Box>
                                <Box className="input-wrapper signup-field">
                                    <label htmlFor="">Contact Number</label>
                                    <input type="tele" name="" id="" className='signin-input-field signup-input-field' placeholder='Enter your email address' {...register("number", { required: true, minLength: 10, maxLength: 10})} />
                                    {errors.number && <p className='error' style={{ color: 'red', fontSize: '30px !important', opacity: '.6' }}>Field is required</p>}
                                </Box>
                                <Box className="input-wrapper signup-field">
                                    <label htmlFor="">Password</label>
                                    <input type="password" name="" id="" className='signin-input-field password' placeholder='Enter your password' {...register("password", { required: true, minLength: 6})} />
                                    {errors.password && <p className='error' style={{ color: 'red', fontSize: '30px !important', opacity: '.6' }}>Field is required and min length must be greater than 5</p>}
                                </Box>
                                <button type="submit" className='signin-btn'>Let me in</button>
                                <Typography variant='p' className='login-option-text'>or</Typography>
                                <Google className="google-login-btn" />
                                <Typography variant="p" className='signin-link'>Already have an account ? &nbsp;<Link to='/auth/signin'>Sign In</Link></Typography>
                            </form>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={6} className="signing-blank" >
                    <Item className="signing-blank" />
                </Grid>
            </Grid>
        </Box>
    );
}
