import React, {useEffect, useContext} from 'react'
import {PatientContext} from '../contexts/PatientContext'

function Login() {
    const {setPatientSelect} = useContext(PatientContext)

    React.useEffect(()=> {
        const fetchPatients = async () => {
           //await fetch(`https://dzsqyl-8080.preview.csb.app/patient`).then(response => console.log(response)).catch(err => console.log(err))
        }
        fetchPatients()
    }, [])
  return (
    <div>
        <button onClick={()=> setPatientSelect(prev => {console.log(prev); return !prev})}>Login and proceed further</button>
    </div>

  )
}

export default Login