import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';;

const MessageDialog = ({ open, setOpen, patientDetails }) => {
    const [message, setMessage] = useState('')
    const [successAlert, setSuccessAlert] = useState(false)
    const [errorAlert, setErrorAlert] = useState(false)
    const [warning, setWarning] = useState(false)

    const handleSend = (e) => {
        e.preventDefault()
        console.log(message)
        if (message === "") {
            setOpen(false)
            setWarning(true)
            return
        }

        console.log({ user_name: patientDetails.firstName + ' ' + patientDetails.lastName, message })
        emailjs.send('service_9cc48op', 'template_vzloy0h', { user_name: patientDetails.firstName + ' ' + patientDetails.lastName, message }, 'dKhTusOMbDiFUYTOp')
            .then((result) => {
                console.log(result.text);
                handleClose()
                setSuccessAlert(true)
            }, (error) => {
                console.log(error.text);
                handleClose()
                setErrorAlert(true)
            });

    }

    const handleClose = () => {
        setOpen(false);
        setMessage("")
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Send Message</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Type your message below
                    </DialogContentText>
                    <TextareaAutosize minRows={5} style={{ minWidth: "30rem", width: "100%", marginTop: '2rem' }} autoFocus id="message" label="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSend}>Send</Button>
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
            }> Message has been sent</Alert> : <></>}
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
            {warning ? 
            <Alert severity="warning" sx={{ mb: 2 }} action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setWarning(false);
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            }> Warning! No empty message allowed</Alert> : <></>}
        </div>
    )
}

export default MessageDialog