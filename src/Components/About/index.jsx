
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Style from '../Style'



export default function BasicGrid() {
    const classes = Style();
    return (
        <Box sx={{ flexGrow: 1, display: 'block', mt: 2 }}>
            <Typography id="about" className={classes.aboutHeading} variant='h3' component='h3' sx={{ textDecoration: 'underline',  fontSize: {xs: 35, md: 45}}}>About Us</Typography>
            <Grid container spacing={2} sx={{ display: { xs: 'none', md: 'block' }, p: '1rem 3rem', overflow: 'hidden' }}>
                <Box sx={{ display: { xs: 'block', md: 'flex' } }} className={classes.aboutCard}>
                    <Grid Box xs={7}>
                        <Box>
                            <Typography variant="h4">TMS - Services</Typography><br />
                            <Typography variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab recusandae ipsum eum, non nihil officiis nam ipsa placeat praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat iste dicta in exercitationem! Pariatur facilis fuga, rerum et saepe ducimus nobis in iste assumenda nihil dolores minima optio eius ullam aperiam doloremque quaerat architecto excepturi cumque? Dolorem, ullam illo?</Typography>
                        </Box>
                    </Grid>
                    <Grid Box xs={4}>
                        <Box sx={{ width: { xs: '50%', md: '90%' } }}>
                            <img src="https://media.istockphoto.com/id/1356554393/photo/businessman-holding-smile-icon-for-the-best-evaluation-customer-satisfaction-concept.jpg?b=1&s=612x612&w=0&k=20&c=7IMfnyfA9KGfpk0eO4ptPd8ehUxu9US3D45xFau9VVg=" className={classes.ServiceImg} alt="" />
                        </Box>
                    </Grid>
                </Box>



                <Box sx={{ display: { xs: 'block', md: 'flex' } }} className={classes.aboutCard}>
                    <Grid Box xs={4}>
                        <Box sx={{ width: { xs: '50%', md: '90%' } }}>
                            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className={classes.ServiceImg} alt="" />
                        </Box>
                    </Grid>
                    <Grid Box xs={7}>
                        <Box>
                            <Typography variant="h4">TMS - Transparancy</Typography><br />
                            <Typography variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab recusandae ipsum eum, non nihil officiis nam ipsa placeat praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat iste dicta in exercitationem! Pariatur facilis fuga, rerum et saepe ducimus nobis in iste assumenda nihil dolores minima optio eius ullam aperiam doloremque quaerat architecto excepturi cumque? Dolorem, ullam illo?</Typography>
                        </Box>
                    </Grid>
                </Box>




                <Box sx={{ display: { xs: 'block', md: 'flex' } }} className={classes.aboutCard}>
                    <Grid Box xs={7}>
                        <Box>
                            <Typography variant="h4">TMS - Quality</Typography><br />
                            <Typography variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab recusandae ipsum eum, non nihil officiis nam ipsa placeat praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat iste dicta in exercitationem! Pariatur facilis fuga, rerum et saepe ducimus nobis in iste assumenda nihil dolores minima optio eius ullam aperiam doloremque quaerat architecto excepturi cumque? Dolorem, ullam illo?</Typography>
                        </Box>
                    </Grid>
                    <Grid Box xs={4}>
                        <Box sx={{ width: { xs: '50%', md: '90%' } }}>
                            <img src="https://plus.unsplash.com/premium_photo-1661293878449-979990331350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHF1YWxpdHl8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className={classes.ServiceImg} alt="" />
                        </Box>
                    </Grid>
                </Box>
            </Grid>





            <Grid container spacing={2} sx={{ display: { xs: 'block', md: 'none' }, p: '1rem 3rem', overflow: 'hidden', margin: 'auto'}}>
                <Box>
                    <Typography variant='h5' className={classes.aboutSubHeading}>TMS - Services</Typography>
                    <img src="https://media.istockphoto.com/id/1356554393/photo/businessman-holding-smile-icon-for-the-best-evaluation-customer-satisfaction-concept.jpg?b=1&s=612x612&w=0&k=20&c=7IMfnyfA9KGfpk0eO4ptPd8ehUxu9US3D45xFau9VVg=" className={classes.MobileServiceImg} alt="" />
                    <Typography variant='h6' className={classes.mobileViewAbout}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit architecto vero, dolore sapiente soluta id assumenda officia est quis maxime, quia voluptates quidem quibusdam eius, magnam dolorum provident debitis odio.</Typography>
                </Box>
                <Box>
                    <Typography variant='h5' className={classes.aboutSubHeading}>TMS - Transparancy</Typography>
                    <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className={classes.MobileServiceImg} alt="" />
                    <Typography variant='h6' className={classes.mobileViewAbout}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit architecto vero, dolore sapiente soluta id assumenda officia est quis maxime, quia voluptates quidem quibusdam eius, magnam dolorum provident debitis odio.</Typography>
                </Box>
                <Box>
                    <Typography variant='h5' className={classes.aboutSubHeading}>TMS - Quality</Typography>
                    <img src="https://plus.unsplash.com/premium_photo-1661293878449-979990331350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHF1YWxpdHl8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className={classes.MobileServiceImg} alt="" />
                    <Typography variant='h6' className={classes.mobileViewAbout}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit architecto vero, dolore sapiente soluta id assumenda officia est quis maxime, quia voluptates quidem quibusdam eius, magnam dolorum provident debitis odio.</Typography>
                </Box>
            </Grid>
        </Box>
    );
}
