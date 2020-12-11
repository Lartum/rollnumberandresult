import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { AppBar, Typography, makeStyles, Toolbar, IconButton } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton:{
        marginRight: theme.spacing(2)
    },
    title:{
        flexGrow:1,
    },
  }));


function Header() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position='static' color='secondary'>
                <Toolbar>
                    <IconButton edge='start' className={classes.menuButton} color='inherit'>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' color='inherit' className={classes.title}>
                         Result
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header