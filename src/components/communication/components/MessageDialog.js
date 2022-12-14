import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import emailjs from '@emailjs/browser';

const MessageDialog = ({ open, setOpen, patientDetails }) => {
    const [message, setMessage] = useState('')

    const handleSend = (e) => {
        e.preventDefault()
        console.log(message)
        if (message === "") {
            window.alert('no message has been typed')
            return
        }

        console.log({user_name: patientDetails.firstName+' '+patientDetails.lastName, message})
        emailjs.send('service_9cc48op', 'template_vzloy0h', {user_name: patientDetails.firstName+' '+patientDetails.lastName, message}, 'dKhTusOMbDiFUYTOp')
            .then((result) => {
                console.log(result.text);
                window.alert('Message has been sent')
                handleClose()
            }, (error) => {
                console.log(error.text);
                window.alert('Error in sending message. Please try again later')
                handleClose()
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
                    <TextareaAutosize minRows={5} style={{ minWidth: "30rem", width: "100%" }} autoFocus id="message" label="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                    {/* <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    /> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSend}>Send</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default MessageDialog