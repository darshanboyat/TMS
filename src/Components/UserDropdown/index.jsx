import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logout = () => {
        setAnchorEl(null);
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
        navigate('/auth/signin');
    };

    const [user, setUser] = useState(null)
    useEffect(() => {
        var token = 'Bearer ' + localStorage.getItem('token')
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/data`,
            {
                headers: {
                    'Authorization': token
                }
            }).then((res) => {
                console.log("User Signin: ", res.data.user)
                setUser(res.data.user)
            }).catch(err => { console.log("Error: ", err) })
    }, [])

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ fontSize: 40, color: 'black', mt: '-10%', textTransform: 'capitalize'}}
            >
                <AccountCircleIcon sx={{ fontSize: 40 }} />&nbsp;
                <Typography variant="h6">
                    Hi, {user !== null && user.name}
                </Typography>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Link to="/view/profile" className='link-style'><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
