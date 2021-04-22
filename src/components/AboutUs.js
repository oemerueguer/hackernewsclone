import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
/* import CardActionArea from '@material-ui/core/CardActionArea'; */
import {CardContent, CardMedia, Typography} from '@material-ui/core';
/* import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'; */
import { Grid } from '@material-ui/core';
import mathias from '../assets/img/mathias.jpg';
import dipa from '../assets/img/dipa.jpg';
import oemer from '../assets/img/oemer.jpg';
import Reacticon from '../assets/img/React-icon.png';
import Materialicon from '../assets/img/material_icon.png';
import Hackericon from '../assets/img/Y_Combinator.png';
import './About.css';



const useStyles = makeStyles({
  root: {

    maxWidth: 345,
    margin: "5rem", 

  },
  media: {
    height: 240,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
      <> 
      <Typography gutterBottom variant="h2" className="aboutTitle">
           About Us
      </Typography>
     <Grid container spacing={2} className={classes.gridContainer} >
     <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root} style={{marginTop: '30px'}}>
        <CardMedia
          className={classes.media}
          image={mathias}
          title="Matthias Schmettow"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" text-align="center">
           Matthias
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" text-align="center">
          Visit us on <a class="visitGitHub" href="https://github.com/MatthiasvsGitHub" target="_blank" rel="noreferrer">GitHub</a>
          </Typography>
        </CardContent>
    </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4} className="aboutProfile">
    <Card className={classes.root} style={{marginTop: '30px'}}>
        <CardMedia
          className={classes.media}
          image={dipa}
          title="Dipali Bedarkar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" text-align="center">
            Dipali
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" text-align="center">
          Visit us on <a class="visitGitHub" href="https://github.com/dipalibedarkar" target="_blank" rel="noreferrer" >GitHub</a>
          </Typography>
        </CardContent>
    </Card>
    </Grid>
<Grid item xs={12} sm={6} md={4} className="aboutProfile">
    <Card className={classes.root} style={{marginTop: '30px'}} >
        <CardMedia
          className={classes.media}
          image={oemer}
          title="Ömer Ügür"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" text-align="center">
            Ömer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" text-align="center">
            Visit us on <a class="visitGitHub" href="https://github.com/oemerueguer" target="_blank" rel="noreferrer">GitHub</a>
          </Typography>
        </CardContent>
    </Card>
    </Grid>
    </Grid>
<Grid container spacing={2} className={classes.gridContainer}>
    <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root} style={{marginTop: '20px', marginBottom: '30px'}}>
        <CardMedia
          className={classes.media}
          image={Reacticon}
          title="React JS"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
          React 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          React is an open-source, front end, JavaScript library for building user interfaces or UI components. 
          It is maintained by Facebook.
          </Typography>
        </CardContent>
    </Card>
    </Grid>
<Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root} style={{marginTop: '20px', marginBottom: '30px'}}>
        <CardMedia
          className={classes.media}
          image={Materialicon}
          title="Material- UI"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
          Material - UI
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          MATERIAL-UI: A popular React UI Framework.  React components for faster and easier web development. 
          Build your own design system.
          </Typography>
        </CardContent>
    </Card>
    </Grid>
<Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root} style={{marginTop: '20px', marginBottom: '30px'}}>
        <CardMedia
          className={classes.media}
          image={Hackericon}
          title="Hacker News"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
          Hacker News
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Hacker News Y Combinator - we build this webpages based on their open-source API in order to fetch the data.
          </Typography>
        </CardContent>
    </Card>
    </Grid>
    </Grid>
    </>
  );
}
