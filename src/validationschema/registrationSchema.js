import * as yup from 'yup';

export  const registrationSchema = yup.object().shape({

    title: yup.string()
            .required('Please select Title!'),
    
    firstName: yup.string()
              .required('Please Enter your First Name!')
              .min(2,'Too short!')
              .max(10,'Too long!'),
    lastName : yup.string()
               .required('Please enter your Last Name!')
                .min(2,'Too short!!')
                .max(10,'Too long!!'),
    email     : yup.string()
                .email('Invalid Email!!')
                .required('Please enter your Email!'),
    userName : yup.string()
                .required('Please Enter your User Name!'),
    password:  yup.string()
               .required('Please Enter Your Password!')
               .min(8,'Password Should be 8 characters!!')
               .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character') , 
    confirmPassword: yup.string()
                      .required('Please Enter Confirm Password!')
                      .oneOf([yup.ref('password'),null],'Password should be match!!'),
    acceptTerms : yup.bool()
                  .required('Please Check the checkbox!')
                 .oneOf([true],'You must Accept Terms and Conditions!!')  
  })