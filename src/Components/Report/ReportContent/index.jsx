import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

function generate(element) {
    return [0, 1, 2, 3, 4].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
    const [secondary, setSecondary] = React.useState(false);

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 1700, ml: {xs: 2, md: 40}}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
                        Report
                    </Typography>
                    <Demo>
                        <List dense={false}>
                            {generate(
                                <ListItem>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={secondary ? 'Secondary text' : null}
                                        sx={{bgcolor: 'gray', color: 'white', p: '1rem 2rem'}}
                                    />
                                </ListItem>,
                            )}
                        </List>
                    </Demo>
                </Grid>
            </Grid>
        </Box>
    );
}
