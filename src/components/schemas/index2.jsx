import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const conactFormSchema2=Yup.object({
    nameSignUP:Yup.string().required("Please enter your name"),
   
    passwordSignUp: Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    phoneSignUp:Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("phone no is reqired"),
     
    
})