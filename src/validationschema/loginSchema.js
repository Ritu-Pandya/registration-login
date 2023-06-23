import * as yup from 'yup';

export const loginSchema = yup.object().shape({
       
    email: yup.string()
           .required('Please Enter your Email!!')
           .email('Please Enter your Valid Email!!'),
   
    password: yup.string()
             .required('Please Enter your Password!!')
             .min(8,'Password Should be 8 characters!!')
               
             

    
})