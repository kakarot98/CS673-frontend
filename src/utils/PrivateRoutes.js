import React, {useContext} from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { PatientContext } from '../contexts/PatientContext'

function PrivateRoutes() {

    const {patientSelect} = useContext(PatientContext)

  return (
    patientSelect ? <Outlet/> : <Navigate to='/'/>
  )
}

export default PrivateRoutes