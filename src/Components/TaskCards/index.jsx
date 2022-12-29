import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import AdjustIcon from '@mui/icons-material/Adjust';
import TaskStatus from '../TaskStatus'
import {useState} from 'react'

export default function SimplePaper() {
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState({});
  var card = [
    {
      title: "Design Navbar",
      assignedDate: "31/12/2022",
      start: "07/01/2023",
      end: "12/01/2023",
      status: "Upcoming"
    },
    {
      title: "User Authentication",
      assignedDate: "31/12/2022",
      start: "07/01/2023",
      end: "12/01/2023",
      status: "Pending"
    },
    {
      title: "Need to setup OAUTH",
      assignedDate: "31/12/2022",
      start: "07/01/2023",
      end: "12/01/2023",
      status: "Active"
    },
    {
      title: "Task Title",
      assignedDate: "31/12/2022",
      start: "07/01/2023",
      end: "12/01/2023",
      status: "Completed"
    },
    {
      title: "Task Title",
      assignedDate: "31/12/2022",
      start: "07/01/2023",
      end: "12/01/2023",
      status: "Pending"
    },
  ]
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: { xs: 170, md: 260 },
          height: { xs: 190, md: 218 },
          p: { xs: 1, md: 5 },
          textAlign: 'left'
        },
      }}
    >
      {
        card.map(item => (
          <Paper elevation={3} sx={{cursor: 'pointer'}} onClick={()=>{setUpdate(!update); setData(item)}}>
            <Typography variant='p' sx={{fontWeight: 'bold'}}>{item.title}</Typography>
            <Typography>&nbsp;&nbsp;<ChevronRightOutlinedIcon />{item.assignedDate}</Typography>
            <Typography>&nbsp;&nbsp;<ChevronRightOutlinedIcon />{item.start}</Typography>
            <Typography>&nbsp;&nbsp;<ChevronRightOutlinedIcon />{item.end}</Typography>
            <Typography><AdjustIcon />{item.status}</Typography>
          </Paper>
        ))
      }
      {update && <TaskStatus update = {update} item={data} setUpdate={setUpdate}/>}
    </Box>
    </>
  );
}
