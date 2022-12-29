import * as React from 'react';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function BasicTooltip() {
  return (
    <Tooltip title="Add team members emails to invite them while create project">
      <IconButton>
        <QuestionMarkIcon/>
      </IconButton>
    </Tooltip>
  );
}
