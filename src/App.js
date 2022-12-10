import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import {PatientContext} from './contexts/PatientContext'

function App() {
  const [patientSelect, setPatientSelect] = React.useState(false)
  return (
    <div className="App">
      <Nav />
      <PatientContext.Provider value={{patientSelect, setPatientSelect}}>
      <Login />
      </PatientContext.Provider>
    </div>
  );
}

export default App;
