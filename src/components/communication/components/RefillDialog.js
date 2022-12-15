import React, {useState} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import emailjs from '@emailjs/browser';

const RefillDialog = ({setOpen, open, patientDetails}) => {
    const [successAlert, setSuccessAlert] = useState(false)
    const [errorAlert, setErrorAlert] = useState(false)

    const handleClose = () => {
        setOpen(false);
      };

      const handleConfirmRequest = () => {
        emailjs.send('service_9cc48op', 'template_zvptpoo', {user_name: patientDetails.firstName+' '+patientDetails.lastName, message: "Please approve a refill of my current medication"}, 'dKhTusOMbDiFUYTOp')
            .then((result) => {
                console.log(result.text);
                handleClose()
                setSuccessAlert(true)
                setTimeout(() => {
                    setSuccessAlert(false)                                        
                }, 6000);
            }, (error) => {
                console.log(error.text);
                handleClose()
                setErrorAlert(true)
                setTimeout(() => {
                    setErrorAlert(false)                                        
                }, 6000);
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
      {successAlert ? 
            <Alert severity="success" sx={{ mb: 2 }} action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setSuccessAlert(false);
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            }> Request has been sent</Alert> : <></>}
            {errorAlert ? 
            <Alert severity="error" sx={{ mb: 2 }} action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setErrorAlert(false);
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            }> There was an error, check it out</Alert> : <></>}
    </div>
  )
}

export default RefillDialog