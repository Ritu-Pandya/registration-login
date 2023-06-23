import React from 'react'
import UserLoginForm from '../components/UserLoginForm'
import {  Box, Container, CssBaseline, Typography } from '@mui/material'


export default function UserLogin() {
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
        
      <Typography component="h1" variant="h5">Sign In</Typography>
        <UserLoginForm/>
      </Container>
        
    </div>
  )
}
