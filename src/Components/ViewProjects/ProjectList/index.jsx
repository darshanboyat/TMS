import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function AlignItemsList() {

    const projects = [
        {
            title: 'Task Management System',
            role: 'admin'
        },
        {
            title: 'NuMetric',
            role: 'task-manager'
        },
        {
            title: 'M Fit',
            role: 'employee'
        },
    ]

    const navigate = useNavigate();

    return (
        <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
            {
                projects.map(proj => (
                    <>
                        <ListItem alignItems="flex-start" onClick={()=> navigate(`/dashboard/${proj.role}`)}>
                            <ListItemAvatar />
                            <ListItemText
                                primary={
                                    <Typography
                                        sx={{ display: 'inline', fontWeight: 'bold' }}
                                        component="h6"
                                        variant="h6"
                                        color="black"
                                    >
                                        {proj.title}
                                    </Typography>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {proj.role}
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
    );
}
