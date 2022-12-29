import React from 'react'
import { Box } from '@mui/system'
import Graph from '../Graph'
import Sidebar from '../Sidebar/Sidebar'
import AccessBar from '../Accessbar/Accessbar.jsx'
import { Link, useNavigate } from 'react-router-dom'
import LoginedNavbar from '../LoginedNavbar'
import './Profile.css'
import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
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
                    <Typography variant="h4" sx={{ mt: { md: 15 }, ml: { md: 25 } }}>Profile</Typography>
                    <Box className="profile-container">
                        {
                            user !== null && fname && lname && <form action="">
                                <Box className="d-flex edit-profile">
                                    {!edit ? <Button variant="contained" className="edit-btn" onClick={() => setEdit(!edit)}><CreateIcon /></Button> :
                                        <Stack spacing={2} direction="row">
                                            <Button type="submit" variant="contained" className="edit-btn" onClick={() => setEdit(!edit)}><CheckIcon /></Button>
                                            <Button variant="outlined" className="edit-btn" onClick={() => setEdit(!edit)}><CloseIcon /></Button>
                                        </Stack>}
                                </Box>
                                <Box className="d-flex profile-input-group">
                                    <Box className="d-flex flex-column profile-input">
                                        <label htmlFor="">First Name</label>
                                        <input type="text" defaultValue={fname} disabled={!edit} />
                                    </Box>
                                    <Box className="d-flex flex-column profile-input">
                                        <label htmlFor="">Last Name</label>
                                        <input type="text" defaultValue={lname} disabled={!edit} />
                                    </Box>
                                </Box>
                                <Box className="d-flex profile-input-group">
                                    <Box className="d-flex flex-column profile-input">
                                        <label htmlFor="">Email Address</label>
                                        <input type="text" defaultValue={user.email} disabled />

                                    </Box>
                                    <Box className="d-flex flex-column profile-input">
                                        <label htmlFor="">Contact</label>
                                        <input type="text" defaultValue="9691174714" disabled={!edit} />
                                    </Box>
                                </Box>
                            </form>
                        }
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Dashboard;