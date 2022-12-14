import { Button, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { PatientContext } from '../../../contexts/PatientContext'
import MessageDialog from './MessageDialog'

const CommunicationMethods = () => {
    const {doctorDetails, setDoctorDetails, setDoctorSelect, patientDetails} = useContext(PatientContext)

    const [openMessageDialog, setOpenMessageDialog] = React.useState(false);
    const handleClickOpen = () => {
        setOpenMessageDialog(true);
    };

    const onClickChangeDoctor = () => {
        setDoctorDetails({})
        setDoctorSelect(false)
    }

    const [sendMessageDialog, setSendMessageDialog] = useState(false)

  return (
    <div>
        <Typography>{doctorDetails.firstName+" "+doctorDetails.lastName} is your Doctor</Typography>
        <Button onClick={()=>onClickChangeDoctor()}>Change doctor</Button>
        <Button onClick={handleClickOpen}>Message Dr. {doctorDetails.firstName+" "+doctorDetails.lastName}</Button>

        <MessageDialog open={openMessageDialog} setOpen={setOpenMessageDialog} handleClickOpen={handleClickOpen} patientDetails={patientDetails}/>
    </div>
  )
}

export default CommunicationMethods