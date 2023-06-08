import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const conactFormSchema=Yup.object({
    nameSignUP:Yup.string().required("Please enter your name"),
    phone:Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("phone no is reqired"),
    email:Yup.string().email().required("Please enter your email"),
    district:Yup.string().required("Please enter the district"),
    city: Yup.string().required("Please enter the city"),
    pincode:Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6, 'Must be exactly 6 digits')
    .max(6, 'Must be exactly 6 digits'),
    password: Yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    passwordSignUp: Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    phoneSignUp:Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("phone no is reqired"),
     
    
})