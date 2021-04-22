import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CopyrightIcon from '@material-ui/icons/Copyright';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import MediaCard from './AboutUs';

const useStyles = makeStyles({
  root:{
    Width: 500,
    marginBottom: 1,
    backgroundColor:'#3f51b5',
  },
});



export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [about, setAbout] = useState(false)

  const changeAbout = () => {
    setAbout(!about)
  }
  return (
    <>
    {about ? <MediaCard /> : <p>Normal Content</p>} 
    <BottomNavigation 
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style={{ color: 'black' }} label="Copyright" icon={<CopyrightIcon /> } > </BottomNavigationAction>  
        <Button variant="contained"  href="#contained-buttons" onClick={changeAbout}>
  About Us
</Button>
      
 <BottomNavigationAction label="github" icon={<GitHubIcon />} />
    </BottomNavigation>
    </>
  );
}
