import { Button, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { PatientContext } from '../../../contexts/PatientContext'
import MessageDialog from './MessageDialog'
import RefillDialog from './RefillDialog'

const CommunicationMethods = () => {
    const {doctorDetails, setDoctorDetails, setDoctorSelect, patientDetails} = useContext(PatientContext)

    const [openMessageDialog, setOpenMessageDialog] = React.useState(false);
    const [openRequestDialog, setOpenRequestDialog] = React.useState(false);
    const handleClicMessageDialogkOpen = () => {
        setOpenMessageDialog(true);
    };

    const handleClickRequestRefill = () => {
        setOpenRequestDialog(true)
    }

    const onClickChangeDoctor = () => {
        setDoctorDetails({})
        setDoctorSelect(false)
    }

    const [sendMessageDialog, setSendMessageDialog] = useState(false)

  return (
    <div>
        <Typography>{doctorDetails.firstName+" "+doctorDetails.lastName} is your Doctor</Typography>
        <Button onClick={()=>onClickChangeDoctor()}>Change doctor</Button>
        <Button onClick={handleClicMessageDialogkOpen}>Message Dr. {doctorDetails.firstName+" "+doctorDetails.lastName}</Button>
        <Button onClick={handleClickRequestRefill}>Request Refill</Button>
        <Button>Request Lab Reports</Button>

        <MessageDialog open={openMessageDialog} setOpen={setOpenMessageDialog}  patientDetails={patientDetails}/>
        <RefillDialog setOpen={setOpenRequestDialog} open={openRequestDialog} patientDetails={patientDetails}/>
    </div>
  )
}

export default CommunicationMethods