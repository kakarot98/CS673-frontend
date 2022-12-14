import { Button, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { PatientContext } from '../../../contexts/PatientContext'
import MessageDialog from './MessageDialog'
import RefillDialog from './RefillDialog'
import LabReportDialog from './LabReportDialog'

const CommunicationMethods = () => {
    const { doctorDetails, setDoctorDetails, setDoctorSelect, patientDetails } = useContext(PatientContext)

    const [openMessageDialog, setOpenMessageDialog] = React.useState(false);
    const [openRequestDialog, setOpenRequestDialog] = React.useState(false);
    const [openLabReportDialog, setOpenLabReportDialog] = React.useState(false)

    const handleClickLabReport = () => {
        setOpenLabReportDialog(true)
    }

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
        <div style={{ display: 'flex', flexDirection: 'column', margin: '5rem', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                <h3>{doctorDetails.firstName + " " + doctorDetails.lastName} is your Doctor</h3>
                <Button onClick={() => onClickChangeDoctor()} variant='contained' color='secondary' style={{ margin: '10px' }}>Change doctor</Button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', maxWidth: '75%', padding: '20px' }}>
                <Button onClick={handleClicMessageDialogkOpen} variant='contained' color='primary' style={{margin: '2rem'}}>Message Dr. {doctorDetails.firstName + " " + doctorDetails.lastName}</Button>
                <Button onClick={handleClickRequestRefill} variant='contained' color='primary' style={{margin: '2rem'}}>Request Refill</Button>
                <Button onClick={handleClickLabReport} variant='contained' color='primary' style={{margin: '2rem'}}>Request Lab Reports</Button>
            </div>



            <MessageDialog open={openMessageDialog} setOpen={setOpenMessageDialog} patientDetails={patientDetails} />
            <RefillDialog setOpen={setOpenRequestDialog} open={openRequestDialog} patientDetails={patientDetails} />
            <LabReportDialog setOpen={setOpenLabReportDialog} open={openLabReportDialog} patientDetails={patientDetails} />
        </div>
    )
}

export default CommunicationMethods