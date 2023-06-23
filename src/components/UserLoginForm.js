import React from 'react'
import { useFormik } from 'formik';
//import * as yup from 'yup';
import { TextField,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Email from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import loginField from '../fields/LoginField';
import { loginSchema } from '../validationschema/loginSchema';

//import {toast,ToastContainer} from 'react-toastify';

export default function UserLoginForm() 
{
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
 
  const navi =useNavigate();
    const formik = useFormik({
        initialValues: loginField,
        
        validationSchema : loginSchema,
        onSubmit: async(values) => 
        {
          let d= await axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate",values)

          console.log(d.data);
      
          if(d.status==200 || d.status==201)
          {
            //toast.success("Login Successful!!");
            localStorage.setItem("token",JSON.stringify(d.data))
            navi('/dash');
          }
          // else
          // {
          //   toast.error("Error!!");
          // }
          
        }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField sx={{mt:2} }
          fullWidth
          autoComplete="off"
          id="email"
          size='small'
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
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
          autoComplete='false'
          id="password"
          size='small'
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
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
         <Button  sx={{mt:2}} 
           color="secondary" 
           variant="contained" 
           fullWidth 
           type="submit">
          Login
        </Button>
    </form>
  )
}
