import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ApartmentIcon from '@material-ui/icons/Apartment';
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import './Sidebar.css';
import useStyles from './useStyles';



export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Panel Administrador
          </Typography>
        </Toolbar>
        <div className='login'>

          <Button variant="contained" color="primary" href="../.." >
            Home
          </Button>

          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <AccountCircleIcon style={{ fontSize: 35 , color: "white"}}/>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Login</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}>

        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />

          <List>

            <Link to="/buildings" className='link'>
            <ListItem button key={'Edificios'}>
            <ListItemIcon><ApartmentIcon/></ListItemIcon>
            <ListItemText className ='fontColor' primary={'Edificios'} />
            </ListItem>
            </Link>

            <Link to="" className='link'>
            <ListItem button key={'Amenities'}>
            <ListItemIcon><OutdoorGrillIcon/></ListItemIcon>
            <ListItemText className ='fontColor' primary={'Amenities'} />
            </ListItem>
            </Link>

            <Link to="/apartments" className='link'>
            <ListItem button key={'Departamentos'}>
            <ListItemIcon><MeetingRoomIcon/></ListItemIcon>
            <ListItemText className ='fontColor'  primary={'Departamentos'} />
            </ListItem>
            </Link>

            <Link to='/spendings/board'>
            <ListItem button key={'Gastos'}>
            <ListItemIcon><MonetizationOnIcon/></ListItemIcon>
            <ListItemText className ='fontColor'  primary={'Gastos'} />
            </ListItem>
            </Link>

            <Link to=''>
            <ListItem button key={'Alertas'}>
            <ListItemIcon><AnnouncementIcon/></ListItemIcon>
            <ListItemText className ='fontColor'  primary={'Alertas'} />
            </ListItem>
            </Link>

          </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>

    </div>
  );
}