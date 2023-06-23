import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Email from '@mui/icons-material/Email';

import { useNavigate } from 'react-router-dom'
//import {toast} from 'react-toastify';


import registrationField from '../fields/RegistrationField';
import { TextField ,Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, FormHelperText} from '@mui/material';
import { registrationSchema } from '../validationschema/registrationSchema';


export default function UserRegistrationForm() {
  
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  let titles =['Mr','Mrs','Miss','Ms'];
  const navi =  useNavigate();
  const formik = useFormik({
    initialValues: registrationField,
    validationSchema: registrationSchema,
    
    onSubmit: async(values) => 
        {
          let d= await axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/register",values)

          console.log(d.data);
      
          if(d.status==200 || d.status== 201)
          {
            //toast.success("Succeessfully Added!!");
            navi('/login');
          }
          // else
          // {
          //   toast.error("Something Went Wrong!!");
          // }
          
        }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
               <FormControl fullWidth variant="outlined" >
                    <InputLabel id="demo-simple-select-filled-label">Select Title</InputLabel>
                    <Select
                       fullWidth
                        sx={{ minWidth:120}}
                        name='title'
                        size="small"
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                    >
                        {
                            titles.map((title) => {
                                return (
                                    <MenuItem value={title}>{title}</MenuItem>
                                );
                            })
                        }
                    </Select>
                </FormControl>
        <TextField sx={{mt:2}}
           fullWidth
          id="fname"
          size='small'
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
         
        />
        <TextField sx={{mt:2}}
          fullWidth
          id="lname"
          size='small'
          name="lastName"
          label="Last Name"
          type="text"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          
        />
        <TextField sx={{mt:2}}
          fullWidth
          id="email"
          size='small'
          name="email"
          label="Email "
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          
        />
        <TextField sx={{mt:2}}
          fullWidth
          id="username"
          size='small'
          name="userName"
          label="User Name"
          type="text"
          key="index"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}
          
        />
        <TextField sx={{mt:2}}
          fullWidth
          id="password"
          size='small'
          name="password"
          label="Password"
           type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                      
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
              </InputAdornment>
            )
          }}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          
        />
        <TextField sx={{mt:2}}
          fullWidth
          id="confirmpassword"
          size='small'
          name="confirmPassword"
          label="Confirm Password"
          type={showPassword ? 'text' : 'password'}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                      
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
              </InputAdornment>
            )
          }}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          
        />
        <FormControlLabel
                    control={<Checkbox typeof='checkbox' name="acceptTerms" value="remember" color="primary"
                        
                        onClick={formik.handleChange} />}
                    label="Please Accept Terms and Conditions."
                >

                    <FormHelperText helperText={formik.touched.acceptTerms && formik.errors.acceptTerms}
                        error={formik.touched.acceptTerms && Boolean(formik.errors.acceptTerms)}>
                    </FormHelperText> 

        </FormControlLabel>
         <Button  sx={{mt:1}} 
           color="secondary" 
           variant="contained" 
           fullWidth 
           type="submit">
          Register
        </Button>
    </form>
  )
}