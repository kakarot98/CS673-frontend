import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import { PatientContext } from './contexts/PatientContext'
import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Payments from './components/Payments';
import Communication from './components/Communication';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  const [patientSelect, setPatientSelect] = React.useState(false)
  const [patientDetails, setPatientDetails] = React.useState({})
  const [doctorDetails, setDoctorDetails] = React.useState({})
  const [doctorSelect, setDoctorSelect] = React.useState(false)

  React.useEffect(() => {
    console.log(patientSelect)
    console.log(patientSelect ? true : false)
    console.log(patientDetails)
  }, [patientSelect, patientDetails])
  return (
    <div className="App">
      <PatientContext.Provider value={{ patientSelect, setPatientSelect, patientDetails, setPatientDetails, doctorDetails, setDoctorDetails, doctorSelect, setDoctorSelect }}>
        <Nav />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/profile' exact element={<Profile />} />
            <Route path='/communication' exact element={<Communication />} />
            <Route path='/payments' exact element={<Payments />} />
          </Route>
        </Routes>
      </PatientContext.Provider>
    </div>
  );
}

export default App;
