import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { SecurityUpdate } from '@mui/icons-material';
import { useState } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({item, update, setUpdate}) {
  const [open, setOpen] = useState(update);
  const [status, setStatus] = useState(undefined)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUpdate(false);
  };
  console.log("Data: ", item)
  const setTask = () => {
      item.status = (status != undefined) ? status : item.status;
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{item.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description d-flex flex-column">
            <label htmlFor="">Assigned Date: </label>
            <input type="text" disabled={true} value={item.assignedDate}/> <br />
            <label htmlFor="">Start Date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" disabled={true} value={item.start}/> <br />
            <label htmlFor="">Deadline: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" disabled={true} value={item.end}/> <br />
            <label htmlFor="">Task Status:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <select defaultValue={item.status} onChange={(e)=>setStatus(e.target.value)}>
                <option value="Upcoming">Upcoming</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Discard</Button>
          <Button onClick={()=>setTask}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
