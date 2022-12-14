import { FormLabel, FormControl, Button, InputLabel, MenuItem, Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { PatientContext } from '../../contexts/PatientContext'
import SelectDoctor from './components/SelectDoctor';
import CommunicationMethods from './components/CommunicationMethods';

const Communication = () => {

  const {setDoctorDetails, doctorDetails, doctorSelect, setDoctorSelect} = useContext(PatientContext)

  return (
    <div>
      {doctorSelect ? <CommunicationMethods /> : < SelectDoctor />}
    </div>
  )
}

export default Communication