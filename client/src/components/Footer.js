import React from 'react';
import { Grid, makeStyles } from '@material-ui/core'
import reactIcon from '../images/reactIcon.svg'
import nodeIcon from '../images/nodeIcon.svg'
import expressIcon from '../images/expressIcon.svg'

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        flexGrow:1
    },
    footer:{
        marginTop:'calc(5% + 60px)',
        bottom:0,
        padding: theme.spacing(6),
        textAlign:'center',
        backgroundColor: theme.palette.background.paper,
    },
    images:{
        width:'70%'
    }
}))


const Footer = () => {
    const classes = useStyles()
    const images = [{key:1, value:reactIcon, link:'https://reactjs.org/'}, {key:2,value:nodeIcon, link:'https://nodejs.org/en/'}, {key:3,value:expressIcon, link:'https://expressjs.com/'}]
    return (
        <footer className={classes.footer}>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify='center' spacing={10}>
                        {images.map((image) => (
                            <Grid key={image.key} item>
                                <a href={image.link}>
                                   <img src={image.value} alt={image.value.toString()} className={classes.images}/>
                                </a>
                            </Grid>
                            
                        ))}
                    </Grid>   
                </Grid>
            </Grid>
        </footer>

    );
}

export default Footer