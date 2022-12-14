import React from 'react'
import { PatientContext } from '../../contexts/PatientContext'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardHeader, Grid } from '@mui/material';

const Profile = () => {
  const { patientDetails } = React.useContext(PatientContext)

  const getDate = s => {
    let date = new Date(s)
    return date
  }

  React.useEffect(() => console.log(patientDetails), [patientDetails])
  return (
    <div className='profile-container'>
      {JSON.stringify(patientDetails) !== "{}" ? (
        <Box sx={{ flexGrow: 1, margin: '3rem', alignContent: 'center', display: 'flex', justifyContent: 'space-around' }}>
          <Grid container spacing={5}>
            <Grid item>
              <Card sx={{ width: 550 }}>
                <CardHeader title="Personal Details" subheader={`Last modified on: ${getDate(patientDetails.createdAt).toDateString()}`} />
                <CardContent sx={{ textAlign: 'start' }}>
                  <div className="name-text text-area" style={{ backgroundColor: '#2CCCE4', paddingLeft: '2px', paddingRight: '2px', margin: '10px 2px' }}>
                    <Typography component="div">
                      <span style={{ fontWeight: 700 }}>Name</span>: <span>{patientDetails.title ? patientDetails.title + ". " : ""}{patientDetails.firstName}{patientDetails.middleInitial ? " " + patientDetails.middleInitial + " " : " "}{patientDetails.lastName}</span>
                    </Typography>
                  </div>

                  <div className="dob-text text-area" style={{ backgroundColor: '#2CCCE4', paddingLeft: '2px', paddingRight: '2px', margin: '10px 2px' }}>
                    <Typography component="div">
                      <span style={{ fontWeight: 700 }}>Date of Birth</span>: <span >{getDate(patientDetails.dateOfBirth).toDateString()}</span>
                    </Typography>
                  </div>

                  <div className="address-text text-area" style={{ backgroundColor: '#2CCCE4', paddingLeft: '2px', paddingRight: '2px', margin: '10px 2px' }}>
                    <Typography sx={{ fontWeight: 700 }}>Address</Typography>
                    <Typography component="div">
                      <span style={{ fontWeight: 700 }}>Street</span>: <span>{patientDetails.street}</span>
                    </Typography>
                    <Typography component="div">
                      <span style={{ fontWeight: 700 }}>City</span>: <span>{patientDetails.city}</span>
                    </Typography>
                    <Typography component="div">
                      <span style={{ fontWeight: 700 }}>State</span>: <span>{patientDetails.state}</span>
                    </Typography>
                  </div>

                  <div className="contact-text text-area" style={{ backgroundColor: '#2CCCE4', paddingLeft: '2px', paddingRight: '2px', margin: '10px 2px' }}>
                    <Typography sx={{ fontWeight: 700 }}>Contact Information</Typography>
                    <Typography component="div">
                      <span style={{ fontWeight: 700 }}>Email</span>: <span>{patientDetails.email}</span>
                    </Typography>
                    <Typography component="div">
                      <span style={{ fontWeight: 700 }}>Phone</span>: <span>{patientDetails.phone}</span>
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>

           
              <Grid item>
                <Card sx={{ width: 500 }}>
                  <CardHeader title="Medical Details" subheader={`Last modified on: ${getDate(patientDetails.createdAt).toDateString()}`} />
                  <CardContent sx={{ textAlign: 'start' }}>
                    <div className="self-declared-text text-area" style={{ backgroundColor: '#2CCCE4', paddingLeft: '2px', paddingRight: '2px', margin: '10px 2px' }}>
                      <Typography sx={{ fontWeight: 700 }}>Self-declared Information</Typography>
                      <Typography>{" "}</Typography>
                      {Object.entries(patientDetails.questionnaire).map(entry => (
                        <Typography component="div">
                          <span style={{ fontWeight: 700 }}>{entry[0]}</span>: <span>{entry[1]}</span>
                        </Typography>
                      ))}

                      <Typography component="div">
                        <span style={{ fontWeight: 700 }}>Sex</span>: <span>{patientDetails.sex}</span>
                      </Typography>

                      <Typography component="div">
                        <span style={{ fontWeight: 700 }}>Allergies</span>:
                        {Object.values(patientDetails.allergies).map(val => (
                          <span>{val}</span>
                        ))}
                      </Typography>
                      <Typography component="div">
                        <span style={{ fontWeight: 700 }}>Addictions</span>:
                        {Object.values(patientDetails.addictions).map(val => (
                          <span>{val}</span>
                        ))}
                      </Typography>
                      <Typography component="div">
                        <span style={{ fontWeight: 700 }}>Medications</span>:
                        {Object.values(patientDetails.medications).map(val => (
                          <span>{val}</span>
                        ))}
                      </Typography>
                      <Typography component="div">
                        <span style={{ fontWeight: 700 }}>Surgeries</span>:
                        {Object.values(patientDetails.surgeries).map(val => (
                          <span>{val}</span>
                        ))}
                      </Typography>
                      <Typography component="div">
                        <span style={{ fontWeight: 700 }}>Symptoms</span>:
                        {Object.values(patientDetails.symptoms).map(val => (
                          <span>{val}</span>
                        ))}
                      </Typography>
                      <Typography component="div">
                        <span style={{ fontWeight: 700 }}>Family History</span>:
                        {Object.values(patientDetails.familyHistory).map(val => (
                          <span>{val}</span>
                        ))}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item>
                <Card sx={{ width: 550 }}>
                  <CardHeader title="Insurance Details" subheader={`Last modified on: ${getDate(patientDetails.createdAt).toDateString()}`} />
                  <CardContent sx={{ textAlign: 'start' }}>
                    <div className="cardHolder-information-text text-area" style={{ backgroundColor: '#2CCCE4', paddingLeft: '2px', paddingRight: '2px', margin: '10px 2px' }}>
                      <Typography sx={{ fontWeight: 700 }}>Card Holder Information</Typography>
                      <Typography component="div">
                        <span style={{ fontWeight: 700 }}>Name</span>: <span >{patientDetails.cardHolder}</span>
                      </Typography>
                      <Typography component="div">
                        <span style={{ fontWeight: 700 }}>SSN</span>: <span >{patientDetails.ssn}</span>
                      </Typography>
                    </div>
                    <div className="plan-information-text text-area" style={{ backgroundColor: '#2CCCE4', paddingLeft: '2px', paddingRight: '2px', margin: '10px 2px' }}>
                      <Typography sx={{ fontWeight: 700 }}>Plan Information</Typography>
                      <Typography component="div">
                        <span style={{ fontWeight: 700 }}>Company</span>: <span >{patientDetails.insuranceCompany}</span>
                      </Typography>
                      <Typography component="div">
                        <span style={{ fontWeight: 700 }}>Plan</span>: <span >{patientDetails.plan}</span>
                      </Typography>
                      <Typography component="div">
                        <span style={{ fontWeight: 700 }}>Group Number</span>: <span >{patientDetails.groupNumber}</span>
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          
        </Box>
      ) : (
        <></>
      )}

    </div>
  )
}

export default Profile