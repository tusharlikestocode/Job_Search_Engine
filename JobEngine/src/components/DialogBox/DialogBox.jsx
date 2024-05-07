import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

export default function SimpleDialog({op,jobDescription,handleClose}) {
  
  return (
    <Dialog onClose={handleClose} open={op}>
      <DialogTitle>Job Description</DialogTitle>
      <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
      <Typography >
        {jobDescription}
      </Typography>
      </DialogContent>
    </Dialog>
  );
}


