import React from 'react'
import { Box } from '@mui/system'
import Sidebar from '../Sidebar/Sidebar'
import AccessBar from '../Accessbar/Accessbar.jsx'
import LoginedNavbar from '../LoginedNavbar'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ReportContent from './ReportContent'
import './Report.css'

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

                <Box sx={{ display: 'flex', pl: {xs: 0, md: 40}}}>
                    <ReportContent />
                </Box>

                <Box className="pagination-container" sx={{pl: {xs: 0, md: 42}}}>
                    <Stack spacing={2}>
                        <Pagination count={10} color="secondary" />
                    </Stack>
                </Box>
            </div>
        </>
    )
}

export default Dashboard;