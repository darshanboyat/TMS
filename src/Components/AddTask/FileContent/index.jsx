import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';

export default function BasicList() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', ml: { xs: 0, md: 60 }, mt: { xs: 0, md: 6 } }}>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List sx={{ textAlign: 'left' }}>
          <ul>
            <li>Project</li>
            <li>Task Name</li>
            <li>Assigned By</li>
            <li>Assigned To</li>
            <li>Date Of Assignment</li>
            <li>Start Date of Task</li>
            <li>End Date of Task</li>
            <li>Status which will be pending by default</li>
            <li>UserId needs to be maintained for every user to map tasks based on it</li>
          </ul>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}