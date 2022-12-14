import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import { PatientContext } from '../../contexts/PatientContext'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import {Button} from '@mui/material';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom'
import {capitalize} from '../../utils/utilityFunctions'

function Login() {
  const navigate = useNavigate()
  
  const { setPatientSelect, setPatientDetails } = useContext(PatientContext)
  const [patientsList, setPatientsList] = React.useState([])
  const [currentPatient, setCurrentPatient] = React.useState({})

  const fetchPatients = async () => {
    await axios.get('https://dzsqyl-8080.preview.csb.app/patient').then(res => { setPatientsList(res.data); console.log(res.data) }).catch(err => console.log(err))
  }

  const onSubmit = () => {
    if (!(Object.keys(currentPatient)===0)) {
      setPatientDetails(currentPatient)
      setPatientSelect(true)
      navigate('/profile')
    }    
  }

  React.useEffect(() => {
    fetchPatients()
  }, [])

  return (
    <div style={{marginTop: '100px'}}>
      

        {patientsList.length > 0 ? (
          <>
          <FormControl sx={{p:'1rem', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <FormLabel id="select-patient-label" htmlFor="select-patient-button">
          <h2>Patient Name: </h2>
        </FormLabel>
            <div className='select-container' style={{ padding: '.5rem', maxHeight: '50vh', width: '400px' }}>
              <Select
                //defaultValue="dog"
                placeholder="Choose a patient from the list"
                size="lg" variant="soft"
                onChange={(e, newValue) => setCurrentPatient(newValue)}
                slotProps={{
                  button: {
                    id: 'select-patient-button',
                    'aria-labelledby': 'select-patient-label select-patient-button',
                  }
                }}
              >
                {patientsList.map((patient) => (
                  <Option key={patient.id} value={patient}>{capitalize(patient.firstName)}{" "}{capitalize(patient.lastName)}</Option>
                ))}
              </Select>
            </div>
            <div className="login-btn" style={{padding: '1rem'}}>
            <Button variant='contained' color="primary" onClick={onSubmit}>
                Submit
              </Button>
            </div>
            </FormControl>
          </>
        ) : (<h2>Loading...</h2>)}

  
    </div>

  )
}

export default Login