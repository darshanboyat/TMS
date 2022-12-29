import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system'
import Sidebar from '../Sidebar/Sidebar'
import AccessBar from '../Accessbar/Accessbar.jsx'
import LoginedNavbar from '../LoginedNavbar'


export default function AlignItemsList() {
    const user = [
        {
            name: 'Sufiyan Rao',
            role: 'Admin',
        },
        {
            name: 'Aditya Sinha',
            role: 'Task Manager',
        },
        {
            name: 'Darshan Boyat',
            role: 'Employee',
        }
    ]
    return (
        <div className="link-list">
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Sidebar />
                <AccessBar />
            </Box>
            <Box className="logined-nav" sx={{ display: { xs: 'block', md: 'none' } }}>
                <LoginedNavbar />
            </Box>
            <Box className="d-flex flex-column" sx={{ ml: { xs: 0, md: 20 }, mt: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h4">Team</Typography>
                <List sx={{ width: '100%', maxWidth: 660, bgcolor: 'background.paper' }}>
                    {
                        user.map(team => (
                            <>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt={team.name} src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline', fontWeight: 'bold'}}
                                                component="p"
                                                variant="p"
                                                color="text.primary"
                                            >
                                                {team.name}
                                            </Typography>
                                        </React.Fragment>}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {team.role}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </>
                        ))
                    }
                </List>
            </Box>
        </div>
    );
}