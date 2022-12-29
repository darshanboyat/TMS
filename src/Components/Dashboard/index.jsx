import React from 'react'
import { Box } from '@mui/system'
import Graph from '../Graph'
import Sidebar from '../Sidebar/Sidebar'
import AccessBar from '../Accessbar/Accessbar.jsx'
import { Link, useNavigate, useParams } from 'react-router-dom'
import LoginedNavbar from '../LoginedNavbar'
import './Dashboard.css'
import { Typography } from '@mui/material'
import Features from '../Features/index.jsx'

function Dashboard() {
    const navigate = new useNavigate()
    const date = new Date()
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();
    const today = date.getUTCDay();

    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const { role } = useParams();

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
                <Box className="chart-container d-flex">
                    <Graph />
                    <Box sx={{ display: { xs: 'none', md: 'block' } }} className="date">
                        <Typography variant='h4'>{day}/{month + 1}/{year}</Typography>
                        <Typography variant='h4'>{week[today - 1]}</Typography>
                    </Box>
                </Box>
                <Typography variant='h4' className='dashboard-heading'>Dashboard</Typography>
                <Features role={role}/>
            </div>
        </>
    )
}

export default Dashboard;