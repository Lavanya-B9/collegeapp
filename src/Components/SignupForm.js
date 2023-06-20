import React, { useState } from 'react';
import './SignupPageStyles.css';
const SignupForm = () => {
  const[formData,setFormData] = useState({
    username:'',
    email:'',
    password:''
  })
  const {username,email,password} = formData;

  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:[e.target.value]})
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className='signup-page-container'>
    <div className='signup-form'>
    <h2>signupForm</h2>
        <form onSubmit={submitHandler}>
        <input type='text' placeholder='Enter your name' value={username} name='username' onChange={changeHandler}/>
        <input type='email' placeholder='Enter your email' value={email} name='email' onChange={changeHandler}/>
        <input type='password' placeholder='Enter your password' value={password} name='password' onChange={changeHandler}/>
      <br/> 
      <button>sign up</button>
     </form>
    </div>
</div>
  )
}

export default SignupForm