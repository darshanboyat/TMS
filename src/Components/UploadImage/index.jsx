import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import './File.css'
import { Typography } from '@mui/material';

function File(props) {
  return (
    <div className='file-input' >
        <AddIcon className='file-add-icon'/>
        <input type='file' className='custom-file-input' accept='csv/*' onChange={(e)=> {console.log(e.target.value)}}/>
        <Typography variant='p' className='file-upload-title' sx={{ml: {xs: 2, md: 3}}}>
            {props.title}
        </Typography>
    </div>
  )
}

export default File