import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from "react-router-dom"
import Apps from '../Registro/Apps'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }
  return (

    <div className={classes.root}>

   
     
        <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      Link={props.Link}
      
    >
      
        <Link to="/"> <MenuItem onClick={handleClose}>inicio</MenuItem></Link>
        <MenuItem onClick={handleClose}><Link to="/catalogo">catalogo</Link>  </MenuItem>
        <Link to="/logout"><MenuItem onClick={handleClose} >logout</MenuItem></Link>
      
         
    </Menu>
      

    
   
   
    
    


      <AppBar position="static">
      
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={handleClick}/>
            
          </IconButton >
          
          <Typography variant="h6" className={classes.title}>
            D&L
          </Typography>
          <Button color="inherit" variant="h1" > <Link to="/Login">Log In</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}