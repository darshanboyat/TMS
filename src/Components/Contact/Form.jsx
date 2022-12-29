import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch', display: 'flex', flexDirection: 'column' },
      }}
      noValidate
      autoComplete="off"
    >
      <form style={{ width: '40rem', display: 'flex', flexDirection: 'column', padding: '1rem' }}>
        <label htmlFor="">Name</label>
        <input type="text" name="" id="" placeholder='Enter Your Name' style={{ margin: '1rem 0rem', padding: '1rem 1rem', borderRadius: '.75rem', backgroundColor: '#e8f0fe', outline: 'none', border: 'none' }} />
        <label htmlFor="">Email</label>
        <input type="text" name="" id="" placeholder='Enter Email Address' style={{ margin: '1rem 0rem', padding: '1rem 1rem', borderRadius: '.75rem', backgroundColor: '#e8f0fe', outline: 'none', border: 'none' }} />
        <label htmlFor="">Contact Number</label>
        <input type="tele" name="" id="" placeholder='Enter Phone Number' style={{ margin: '1rem 0rem', padding: '1rem 1rem', borderRadius: '.75rem', backgroundColor: '#e8f0fe', outline: 'none', border: 'none' }} />
        <Stack spacing={2} direction="row">
          <Button variant="contained" type='submit'>Send</Button>
        </Stack>
      </form>
    </Box>
  );
}
