import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Style from '../Style'
import Typography from '@mui/material/Typography';
import Form from './Form'

export default function MediaControlCard() {

    const classes = Style();
    return (
        <>
            <Typography id="contact" className={classes.aboutHeading} variant='h3' component='h3' sx={{ textDecoration: 'underline', fontSize: { xs: 35, md: 45 } }}>Contact Us</Typography>
            <Card sx={{ display: { md: 'flex', xs: 'block' } }} className={classes.introCard}>
                <CardMedia data-aos="fade-right"
                    component="img"
                    sx={{ width: { xs: 400, md: 600 }, p: { xs: 0, md: 5 }, borderRadius: { xs: 2, md: 15 } }}
                    image="https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xvYmV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', py: { xs: 2, md: 15 } }}>
                    <Form />
                </Box>
            </Card>
        </>
    );
}
