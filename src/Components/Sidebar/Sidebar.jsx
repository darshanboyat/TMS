import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { Typography } from '@mui/material';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import './Sidebar.css'

function Sidebar() {
    const [state, setState] = React.useState(1)
    const [path, setPath] = React.useState(window.location.href.split('/pages'))
    React.useEffect(() => {
        const curve = document.getElementById('curve')
        const link1 = document.getElementById('sidebar-link-1')
        const link2 = document.getElementById('sidebar-link-2')
        const link3 = document.getElementById('sidebar-link-3')
        const link4 = document.getElementById('sidebar-link-4')

        console.log(path)
        if (state === 1) {
            curve.style.top = '10.5rem'
            curve.style.transition = '.3s ease'
            link1.style.backgroundColor = '#043f5f'
            link2.style.backgroundColor = '#0c4d71'
            link3.style.backgroundColor = '#0c4d71'
            link4.style.backgroundColor = '#0c4d71'
        }
        else if (state === 2) {
            curve.style.top = '14rem'
            curve.style.transition = '.3s ease'
            link2.style.backgroundColor = '#043f5f'
            link1.style.backgroundColor = '#0c4d71'
            link3.style.backgroundColor = '#0c4d71'
            link4.style.backgroundColor = '#0c4d71'
        }
        else if(state === 3){
            curve.style.top = '17.5rem'
            curve.style.transition = '.3s ease'
            link3.style.backgroundColor = '#043f5f'
            link2.style.backgroundColor = '#0c4d71'
            link1.style.backgroundColor = '#0c4d71'
            link4.style.backgroundColor = '#0c4d71'
        }
        else if(state === 4){
            curve.style.top = '21rem'
            curve.style.transition = '.3s ease'
            link4.style.backgroundColor = '#043f5f'
            link3.style.backgroundColor = '#0c4d71'
            link2.style.backgroundColor = '#0c4d71'
            link1.style.backgroundColor = '#0c4d71'
        }

    }, [state])

    return (
        <div className='sidebar-container d-flex'>
            <Typography variant='h4' sx={{ textDecoration: 'none', color: 'white', p: 2, pt: 10, pb: 4}}><FingerprintIcon sx={{ color: 'white' }} />TMS</Typography>
            <Box className='d-flex'>
                <Box className="d-flex sidebar-links">
                    {/* <Link to='/dashboard' className="sidebar-link" id="sidebar-link-1" onClick={() => { setState(1) }}><DashboardIcon />&nbsp;Dashboard</Link> */}

                    <Link to='/view/projects' className="sidebar-link" id="sidebar-link-1" onClick={() => { setState(1) }}><AccountTreeRoundedIcon />&nbsp;Projects</Link>
                    <Link to='/view-task' className="sidebar-link" id="sidebar-link-2" onClick={() => { setState(2) }}><DescriptionOutlinedIcon />&nbsp;View Task</Link>
                    <Link to='/report' className="sidebar-link" id="sidebar-link-3" onClick={() => { setState(3) }}><AutoGraphIcon />&nbsp;Report</Link>
                    <Link to='/view/team' className="sidebar-link" id="sidebar-link-4" onClick={() => { setState(4) }}><GroupsRoundedIcon />&nbsp;Team</Link>
                    <div id="curve" >
                        <div className="dot"/>
                    </div>
                </Box>
            </Box>
        </div>
    )
}

export default Sidebar