import React from 'react'

function Login() {

    React.useEffect(()=> {
        const fetchPatients = async () => {
           await fetch(`https://dzsqyl-8080.preview.csb.app/patient`).then(response => console.log(response)).catch(err => console.log(err))
        }
        fetchPatients()
    }, [])
  return (
    <div>
        <button>Login and proceed further</button>
    </div>

  )
}

export default Login