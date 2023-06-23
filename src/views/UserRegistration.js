import React from 'react'
import UserRegistrationForm from '../components/UserRegistrationForm'
import { Typography ,Container, CssBaseline, Box, Avatar} from '@mui/material'
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
export default function UserRegistration() {
  return (
    <div>
      <Container component="main" maxWidth="xs" sx={{textAlign:'center'}}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      ></Box>
      {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar> */}
      <Typography component="h1" variant="h5" alignItems='center'>Sign Up</Typography>
        <UserRegistrationForm />
      </Container>
    </div>
  )
}
