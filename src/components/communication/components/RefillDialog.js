import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import emailjs from '@emailjs/browser';

const RefillDialog = ({setOpen, open, patientDetails}) => {

    const handleClose = () => {
        setOpen(false);
      };

      const handleConfirmRequest = () => {
        emailjs.send('service_9cc48op', 'template_zvptpoo', {user_name: patientDetails.firstName+' '+patientDetails.lastName, message: "Please approve a refill of my current medication"}, 'dKhTusOMbDiFUYTOp')
            .then((result) => {
                console.log(result.text);
                window.alert('Request has been sent')
                handleClose()
            }, (error) => {
                console.log(error.text);
                window.alert('Error in sending request. Please try again later')
                handleClose()
            });
      }
        
  return (
    <div>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Request Refill</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Confirm that you want to ask for refill of your current medications
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirmRequest}>Confirm Request</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default RefillDialog