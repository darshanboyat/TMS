import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Google from '../Google/LoginButton';
import axios from 'axios'
import './Signin.css'
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
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, data,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => {
                console.log("User Signin: ", res.data.token)
                setMessage(res.data.message)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('auth', true)
                if(res.data.succes)
                {
                    navigate('/view/projects')
                }
            }).catch(err => { console.log("Error: ", err) })
        console.log(data)
    }
    const passwordVisiblity = () => {
        passwordToggle ? setPasswordToggle(false) : setPasswordToggle(true)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={6} className="signin-main-container">
                    <Item className="signin-container">
                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                            <Typography variant='h4' sx={{ textDecoration: 'none', color: 'black' }}><FingerprintIcon sx={{ color: 'black' }} />TMS</Typography>
                        </Link>
                        <Box className='signin-form-container'>
                            <Typography variant="h6" className="auth-header">Sign In</Typography>
                            <form action="" className='signin-form' onSubmit={handleSubmit(onSubmit)}>
                                <Box>
                                    {message !== null && <Typography variant="p" sx={{color: 'red'}}>{message}</Typography> }
                                </Box>
                                <Box className="input-wrapper">
                                    <label htmlFor="">Email Address</label>
                                    <input type="text" name="" id="" className='signin-input-field' placeholder='Enter your email address' {...register("email", { required: true })}/>
                                    {errors.email && <p className='error' style={{ color: 'red', fontSize: '30px !important', opacity: '.6' }}>Field is required</p>}
                                </Box>
                                <Box className="input-wrapper">
                                    <label htmlFor="">Password</label>
                                    <input type="password" name="" id="" className='signin-input-field password' placeholder='Enter your password' {...register("password", { required: true, minLength: 6})}/>
                                    {errors.password && <p className='error' style={{ color: 'red', fontSize: '30px !important', opacity: '.6' }}>Field is required and min length must be greater than 5</p>}
                                    <Typography variant="p" className='forgot-password'>Forgot Your Password ?</Typography>
                                </Box>
                                <button type="submit" className='signin-btn'>Let me in</button>
                                <Typography variant='p' className='login-option-text'>or</Typography>
                                <Google className="google-login-btn" />
                                <Typography variant="p" className='signup-link'>Don't have an account ? &nbsp;<Link to='/auth/signup'>Sign Up</Link></Typography>
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
