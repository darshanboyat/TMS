import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SplitscreenOutlinedIcon from '@mui/icons-material/SplitscreenOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import Notification from '../Notification'
import './Style.css'

const pages = [{icon: <DashboardIcon/>, title: 'Dashboard', link: '/dashboard'}, {icon: <SplitscreenOutlinedIcon/>, title: 'Task View', link: '/view-task'}, {icon: <AutoGraphOutlinedIcon/>, title: 'Report', link: '/report'}, {icon: <GroupsRoundedIcon/>, title: 'Team', link: '/view/team'}, {icon: <AccountCircleIcon/>, title: 'Profile', link: '/view/profile'}, {icon: <LogoutIcon/>, title: 'Logout', link: '/auth/signin'}];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    console.log(anchorElUser);
    setAnchorElUser(null)
  };

  return (
    <AppBar id="nav-bar" position="static" sx={{bgcolor: 'white'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            <FingerprintIcon/>TMS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color: 'black'}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" component="a" href={page.link} sx={{textDecoration: 'none', color: 'black'}}>{page.icon}&nbsp;{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '0rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
                <FingerprintIcon sx={{color: 'black'}}/>TMS
          </Typography>
          <Notification/>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
              <Button
                variant='button'
                component="a"
                href={page.link}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ bgColor: 'red', display: 'block', color: 'black', textTransform: 'capitalize'}}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
