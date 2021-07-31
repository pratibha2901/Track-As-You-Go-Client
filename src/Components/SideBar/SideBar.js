import React from 'react';
import clsx from 'clsx';
import { makeStyles,createStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ListIcon from '@material-ui/icons/List';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles((theme)=>createStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  ListItem:{
     
  },
  ListItemIcon:{
    //color:theme.palette.secondary.dark
  },
  
  ListItemText:{

  }
}));
export default function TemporaryDrawer({anchor,toggleDrawer,state}) {
  
  
  
  const classes = useStyles();
  const NavigationLink={
      "HOME":{
          text:"Home",
          link:"/",
          icon:<HomeIcon/>

      },
      "CREATE":{
        text:"Create",
        link:"/create",
        icon:<BorderColorIcon/>
      },
      "FINISHED":{
        text:"Finished",
        link:"/finished",
        icon:<AssignmentTurnedInIcon/>
      },
      "PENDING":{
        text:"Pending",
        link:"/pending",
        icon:<ListIcon/>

      },
      "STATS":{
        text:"Statistics",
        link:"/stats",
        icon:<AssessmentIcon/>
      }
  }

  

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {Object.keys(NavigationLink).map((key) => (
          <ListItem Divider button key={key} component={NavLink} to={NavigationLink[key].link}>
            <ListItemIcon className={classes.ListItemIcon}>{NavigationLink[key].icon}</ListItemIcon>
            <ListItemText primary={NavigationLink[key].text} />
          </ListItem>
        ))}
      </List>
     
    
    </div>
  );

  return (
    <div>
      
        <React.Fragment>
          
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}
