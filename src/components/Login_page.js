import React from 'react'
import "./Login_page.css"
import {Form, Formik, useFormik} from "formik";
import { conactFormSchema } from './schemas';
import  { useState } from 'react';

const initialValues={
   
  phone:'',
  password:'',

  


}

const initialValues2={
  nameSignUP:'',
  phoneSignUp:'',
  passwordSignUp:'',
  
}

const Login_page = () => {

  const [text1, setText1] = useState('Hello Store !');
  const [text2, setText2] = useState('Expnad yoiur businesss horizon with');
  const [text3, setText3] = useState('shoffline');
  const [text4, setText4] = useState('no limit reach tpo your customer');
  const [text5, setText5] = useState('Manage your inverntory on the go,Join us now!');
  const [text6, setText6] = useState('Sign Up');
  const [className, setClassName] = useState("c1");


  const handleClick = () => {

  if(text1==="Hello Store !"){
    setText1("Expand your Buisness");
    setText2("with shoffline");
    setText3("");
    setText4("");
    setText5("Already registersed");
    setText6("Login");
  }
  else{
    setText1('Hello Store !');
    setText2('Expnad yoiur businesss horizon with');
    setText3('shoffline');
    setText4('no limit reach tpo your customer');
    setText5('Manage your inverntory on the go,Join us now!');
    setText6('Sign Up');
  }

  setClassName(className === "c1" ? "c11" : "c1");

  }




  
    
    

  


  
  const {values,errors,touched ,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    // validationSchema:conactFormSchema,
    onSubmit:(values,action)=>
    {
        console.log('Form Data',values);
        // console.log(errors);
        action.resetForm();

    }

    
    
});


  
// const {values,errors,touched ,handleBlur,handleChange,handleSubmit}=useFormik({
//   initialValues:initialValues,
//   // validationSchema:conactFormSchema,
//   onSubmit:(values,action)=>
//   {
//       console.log('Form Data',values);
//       // console.log(errors);
//       action.resetForm();

//   }

  
  
// });
// console.log(Formik)
// console.log(errors);
// console.log('Form Data',values);

  return (

    

   <>
   <div className='parent'>
    <div className='child1'>
      <div className='form1'>
        <div className='f1-p1'>
          <h1>Welcome Back</h1>
           <p>Login to your account</p>
        </div>

         {/* ---form1----   */} 
        <form onSubmit={handleSubmit}>
        <div className='f1-p2'>
       
           <input type="text" 
           placeholder='Phone Number'
           onChange={handleChange}
           onBlur={handleBlur}
           name="phone"
           value={values.phone}
           />
           {errors.phone && touched.phone ?(<div className="form-error">{errors.name}</div>) : null}
           <input type="password" 
           placeholder="password"
           onChange={handleChange}
           onBlur={handleBlur}
           name="password"
           value={values.password}
           />
           {errors.password && touched.password ?(<div className="form-error">{errors.name}</div>) : null}
        </div>
       
        <div f1-p3>
         
          <input className='b1'
           type="submit"
            value="Login"
            
            
        ></input>
          <input className='b2' type="button" value="Sign In With Google"></input>  
          
        </div>
        </form>
      </div>
    </div>
    <div className='child1'>
     

      
      <div className='form2'>
        <div className='f1-p1'>
          <h1>Welcome !</h1><br></br>
           <p>A good greeting message</p>
        </div>
        <div className='f1-p2'>
           <input type="text" 
           placeholder='Name'
           onChange={handleChange}
           onBlur={handleBlur}
           name="nameSignUP"
           value={values.nameSignUP}/>
           <input type="text" placeholder='Phone number or Email'
            onChange={handleChange}
            onBlur={handleBlur}
            name="phoneSignUp"
            value={values.phoneSignUp}/>

           <input type="Password" placeholder="Create a password"
            onChange={handleChange}
            onBlur={handleBlur}
            name="passwordSignUp"
            value={values.passwordSignUp}/>
        </div>
        <div f1-p3>
          <input className='b1' type="button" value="Login"></input>
          <input className='b2' type="button" value="Sign In With Google"></input>  
          
        </div>
      </div>
    
       
    </div>
  

   </div>
   <div className={className}>
      <h1>{text1}</h1>
      <div className='c2'>
      <p>{text2}</p>
      <p>{text3}</p><br></br>
      
      <p>{text4}</p>
      </div><br></br><br></br><br></br>
      <p>{text5}</p>
      <input className='b3' onClick={handleClick} type="button" value={text6}></input>  
      </div>
   </>
  )
}

export default Login_page
