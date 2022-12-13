import { FormLabel, FormControl, Button, InputLabel, MenuItem, Box, Typography } from '@mui/material'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import React, { useContext } from 'react'
import { PatientContext } from '../contexts/PatientContext'
import axios from 'axios'
import {capitalize} from '../utils/utilityFunctions'

const Communication = () => {

  const {setDoctorDetails, doctorDetails, doctorSelect, setDoctorSelect} = useContext(PatientContext)

  const [doctorsList, setDoctorsList] = React.useState([])
  const [selectDoctor, setSelectDoctor] = React.useState({})

  const getDoctorsList = async () => {
    await axios.get(`https://creepy-dog-sunglasses.cyclic.app/doctors`).then(res => {setDoctorsList(res.data.data); console.log(res.data.data)}).catch(err => console.log(err))
  }


  const onSetDoctor = async () => {
    setDoctorDetails(selectDoctor)
    setDoctorSelect(true)
  }

  const handleSelectChange = (event) => {
    setSelectDoctor(event.target.value)
    console.log(event.target.value)
  }
  React.useEffect(() => {
    getDoctorsList()
  }, [])

  return (
    <div>
      <FormControl sx={{p:'1rem', maxWidth: '80%'}}>
        <FormLabel id="select-doctor-label" htmlFor="select-doctor-button">
          Doctor Name
        </FormLabel>
        {doctorsList.length > 0 ? (
          <>
            <div className='select-container' style={{ padding: '.5rem', maxHeight: '50vh' }}>
              <Select
                //defaultValue="dog"
                placeholder="Choose a doctor from the list"
                size="sm" variant="soft"
                onChange={(e, newValue) => setSelectDoctor(newValue)}
                slotProps={{
                  button: {
                    id: 'select-doctor-button',
                    'aria-labelledby': 'select-doctor-label select-doctor-button',
                  }
                }}
              >
                {doctorsList.map((doctor) => (
                  <Option key={doctor.id} value={doctor}>{capitalize(doctor.firstName)}{" "}{capitalize(doctor.lastName)}</Option>
                ))}
              </Select>
            </div>
            <div className="set-doctor-btn">
              <Button size="md" variant='solid' color="primary" onClick={onSetDoctor}>
                Set as your doctor
              </Button>
            </div>
          </>
        ) : (<Typography>Loading...</Typography>)}

      </FormControl>
    </div>
  )
}

export default Communication