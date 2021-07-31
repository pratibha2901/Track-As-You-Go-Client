import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const useStyles = makeStyles((theme) => ({
    
  }));
export default class Create extends React.Component{
   
constructor(props){
super(props);
}
render(){
    return (
        <div className="Container">
            <IconButton>
            <NoteAddIcon/>
            </IconButton>
        </div>
        
    )
}
}