import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Style from '../Style'
import Typography from '@mui/material/Typography';
import {ThreeDots} from 'react-loader-spinner'

export default function MediaControlCard() {

    const classes = Style();
    return (
        <Card sx={{ display: { md: 'flex', xs: 'block' } }} className={classes.introCard}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent data-aos="fade-right" sx={{ flex: '1 0 auto', mt: { xs: '1rem', md: '6rem' } }}>
                    <Typography component="div" variant="h2" className={classes.introCardText} sx={{ fontSize: { xs: '2rem', md: '4rem' } }}>
                        Move Faster&nbsp;<ThreeDots height="70" width="70" radius="9" color="black" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true}/>
                    </Typography>
                    <Typography component="div" variant="h2" className={classes.introCardText} sx={{ fontSize: { xs: '1.5rem', md: '3rem' } }}>
                        Avoide Misperception 
                        &nbsp;<ThreeDots height="80" width="80" radius="9" color="black" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true}/>
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia data-aos="fade-left"
                component="img"
                sx={{ width: { xs: 500, md: 600 }, p: {xs: 0, md: 5}, borderRadius: {xs: 2, md: 15}}}
                image="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80"
                alt="Live from space album cover"
            />
        </Card>
    );
}
