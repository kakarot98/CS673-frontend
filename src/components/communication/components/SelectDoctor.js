import React, { useContext } from 'react'
import { FormLabel, FormControl, Button, InputLabel, Box, Typography } from '@mui/material'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { PatientContext } from '../../../contexts/PatientContext';
import axios from 'axios';
import { capitalize } from '../../../utils/utilityFunctions';

const SelectDoctor = () => {
    const { setDoctorDetails, doctorDetails, doctorSelect, setDoctorSelect } = useContext(PatientContext)


    const [doctorsList, setDoctorsList] = React.useState([])
    const [selectDoctor, setSelectDoctor] = React.useState({})

    const getDoctorsList = async () => {
        await axios.get(`https://creepy-dog-sunglasses.cyclic.app/doctors`).then(res => { setDoctorsList(res.data.data); console.log(res.data.data) }).catch(err => console.log(err))
    }

    const onSetDoctor = async () => {
        setDoctorDetails(selectDoctor)
        setDoctorSelect(true)
    }

    React.useEffect(() => {
        getDoctorsList()
    }, [])

    const handleSelectChange = (event) => {
        setSelectDoctor(event.target.value)
        console.log(event.target.value)
    }

    return (
        <FormControl sx={{ p: '1rem', maxWidth: '80%', margin: '2rem' }}>
            <FormLabel id="select-doctor-label" htmlFor="select-doctor-button">
                <h1>Doctor Name</h1>
            </FormLabel>
            {doctorsList.length > 0 ? (
                <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <div className='select-container' style={{ padding: '.5rem',  width: '25rem' }}>
                        <Select
                        sx={{border: '2px solid black'}}
                            //defaultValue="dog"
                            placeholder="Choose a doctor from the list"
                            size="md" variant="soft"
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
                        <Button size="md" variant='contained' color="primary" onClick={onSetDoctor}>
                            Set as your doctor
                        </Button>
                    </div>
                </div>
            ) : (<Typography>Loading...</Typography>)}
        </FormControl>
    )
}

export default SelectDoctor