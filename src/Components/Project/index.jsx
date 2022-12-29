import React, { useState, useRef } from 'react'
import { Box } from '@mui/system'
import Graph from '../Graph'
import Sidebar from '../Sidebar/Sidebar'
import AccessBar from '../Accessbar/Accessbar.jsx'
import { Link, useNavigate } from 'react-router-dom'
import LoginedNavbar from '../LoginedNavbar'
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import ItemTable from '../ItemTable/ItemTable'
import Tooltip from '../Tooltip'
import './Project.css'

function Dashboard() {
    const navigate = new useNavigate()
    const [emails, setEmails] = useState([])
    const [value, onChange] = useState([]);
    const email = useRef();

    var { register, reset, handleSubmit, formState: { errors } } = useForm();

    const add = () => {
        console.log(email.current.value);
        onChange([...value, email.current.value]);
        email.current.value = null;
    };


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
                <Box className="add-member-container" sx={{ ml: { xs: 1, md: 60 }, width: { xs: '96%', md: '50%' } }}>
                    <Typography variant="h4">Create Project</Typography>
                    <form action="" className='d-flex flex-column'>
                        <TextField id="outlined-basic" label="Enter Project Title" variant="outlined" /> <br />
                        <form onSubmit={add} sx={{ width: '100%', display: 'flex' }}>
                            {/* <Tooltip/> */}
                            <input type="email" id="outlined-basic" className='invite-add' ref={email} placeholder="Send Invitation To Your Team Via Mail" variant="outlined" />
                            <button type="button" className='add-team-btn' onClick={add}>Add</button>
                        </form> <br />
                        <button type="submit" className='invite-btn'>Create Project</button>
                    </form>
                </Box>
                <Box>
                    <ItemTable value={value} />
                </Box>
            </div>
        </>
    )
}

export default Dashboard;