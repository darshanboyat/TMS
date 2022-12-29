import React from 'react'
import { Box } from '@mui/system'
import Graph from '../Graph'
import Sidebar from '../Sidebar/Sidebar'
import AccessBar from '../Accessbar/Accessbar.jsx'
import FileDetail from './FileContent'
import LoginedNavbar from '../LoginedNavbar'
import { Typography } from '@mui/material'
import UploadImage from '../UploadImage'
import './AddTask.css'

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
                <Box className="" sx={{ mt: 3, ml: { xs: 0, md: 20 } }}>
                    <Typography variant='h4'>Add Task</Typography>
                    <Typography variant='p' sx={{ color: 'gray' }}>To add a task you need to upload a CSV format file with below mentioned fields</Typography><br />
                    <FileDetail />
                    <form action="">
                    <UploadImage title="Upload CSV File" />
                    <button type='submit' className='create-task-btn'>Create Task</button>
                    </form>
                </Box>
            </div>
        </>
    )
}

export default Dashboard;