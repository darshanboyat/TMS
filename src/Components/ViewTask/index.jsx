import React from 'react'
import { Box } from '@mui/system'
import Graph from '../Graph'
import Sidebar from '../Sidebar/Sidebar'
import AccessBar from '../Accessbar/Accessbar.jsx'
import { Link, useNavigate } from 'react-router-dom'
import LoginedNavbar from '../LoginedNavbar'
import { Typography } from '@mui/material'
import TaskCards from '../TaskCards'
import Calendar from '../Calendar'
import './viewTask.css'

function Dashboard() {


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

                <Box>
                    <Typography variant='h4' sx={{ ml: { xs: 0, md: 20 } }}>Tasks</Typography>
                    <Box sx={{ ml: { xs: 0, md: 35 } }} className="task-card-container">
                        <TaskCards />
                    </Box>
                </Box>
                <Box className="calender">
                    <Typography variant='h4' sx={{ ml: { xs: 0, md: 20 } }}>Calendar</Typography>
                    <Box className='d-flex calendar-container' sx={{ p: 0, mt: 1, justifyContent: { xs: 'center', md: 'center' }, ml: { xs: 0, md: 70 } }}>
                        <Calendar />
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Dashboard;