import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, useNavigate } from 'react-router-dom';
import { PatientContext } from '../contexts/PatientContext';

function Nav() {
  const { setPatientSelect, setPatientDetails, resetAllDetails } = React.useContext(PatientContext)
  const navigate = useNavigate()

  let activeStyle = { textDecoration: 'none', color: 'inherit', backgroundColor: '#2E82F0', padding: '1rem', borderRadius: '4rem' }
  let inActiveStyle = { textDecoration: 'none', color: 'inherit', padding: '1rem' }
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PATIENT PORTAL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Typography
              variant='h6'
              sx={{ my: 2, color: 'white', display: 'block', pl: 2, pr: 2 }}
            >
              <NavLink to='/profile' style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                Profile
              </NavLink>
            </Typography>
            <Typography
              variant='h6'
              sx={{ my: 2, color: 'white', display: 'block', pl: 2, pr: 2 }}
            >
              <NavLink to='/communication' style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                Communication
              </NavLink>
            </Typography>
            <Typography
              variant='h6'
              sx={{ my: 2, color: 'white', display: 'block', pl: 2, pr: 2 }}
            >
              {/* <NavLink to='/payments' style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                Payment
              </NavLink> */}
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button variant='solid' color='secondary' onClick={(e) => { resetAllDetails() }}>
              <Typography>Change Patient</Typography>
            </Button>
            {/* <Tooltip title="Change Patient">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;