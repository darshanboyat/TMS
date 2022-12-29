import React from 'react'
import { Box } from '@mui/system'
import Graph from '../Graph'
import Sidebar from '../Sidebar/Sidebar'
import AccessBar from '../Accessbar/Accessbar.jsx'
import { Link, useNavigate } from 'react-router-dom'
import LoginedNavbar from '../LoginedNavbar'
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Role from './Role'
import './AddMembers.css'

function Dashboard() {
    const navigate = new useNavigate()
    const names = ["Task Manager", "Employee"]

    return (
        <>
            <div className="link-list">
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Sidebar />
                    <AccessBar />
                </Box>
                <Box className="logined-nav" sx={{ display: { xs: 'block', md: 'none' } }}>
                    <LoginedNavbar />
                </Box>
                <Box className="add-member-container" sx={{ ml: { xs: 1, md: 60 }, width: {xs: '96%', md: '50%'}}}>
                    <Typography variant="h4">Add Member</Typography>
                    <form action="" className='d-flex flex-column'>
                        <TextField id="outlined-basic" label="Enter Name" variant="outlined" /> <br />
                        <TextField id="outlined-basic" label="Enter Email" variant="outlined" /> <br />
                        <TextField id="outlined-basic" label="Enter Contact" variant="outlined" /> <br />
                        <Role names={names}/>
                        <button type="submit" className='invite-btn'>Send Invitation</button>
                    </form>
                </Box>
            </div>
        </>
    )
}

export default Dashboard;