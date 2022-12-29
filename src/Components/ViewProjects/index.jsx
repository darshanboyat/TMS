import React from 'react'
import { Box } from '@mui/system'
import Graph from '../Graph'
import Sidebar from '../Sidebar/Sidebar'
import AccessBar from '../Accessbar/Accessbar.jsx'
import { Link, useNavigate } from 'react-router-dom'
import LoginedNavbar from '../LoginedNavbar'
import { Typography } from '@mui/material'
import ProjectList from './ProjectList'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Dashboard() {
    const [edit, setEdit] = useState(false);
    const [fname, setFName] = useState(undefined);
    const [lname, setLName] = useState(undefined);

    const [user, setUser] = useState(null)
    useEffect(() => {
        var token = 'Bearer ' + localStorage.getItem('token')
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/data`,
            {
                headers: {
                    'Authorization': token
                }
            }).then(async (res) => {
                console.log("User Signin: ", res.data.user)
                setUser(res.data.user)
                setFName(res.data.name[0])
                setLName(res.data.name[1])
                console.log("User FName: ", fname)
                // console.log("User LName: ", lname)

            }).catch(err => { console.log("Error: ", err) })
    }, [])

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
                    <Typography variant="h4" sx={{ mt: { md: 15 }, ml: { md: 25 } }}>Projects</Typography>
                    <Box className="project-container d-flex" sx={{justifyContent: 'center', pl: {xs: 0, md: 40}, pr: {xs: 0, md: 20}}}>
                        <ProjectList/>
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Dashboard;