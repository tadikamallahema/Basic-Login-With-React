import React from 'react'
import { useState } from 'react'
import Navbar from '../Componenets/Navbar';

const LoginPage = () => {
    const [form,setForm]=useState({
        name:'',
        password:''
    });
    
     const handleChange=(e)=>{
        const {name,value}=e.target;
        setForm({
            ...form,
            [name]:value
        });
        
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(form);
    };

  return (
    <div>
       <Navbar/>
      <div style={{textAlign:'center',marginTop: '20px'}}>
    <h2>Login Page</h2>
    <form onSubmit={handleSubmit}>

     <div >
        <label>Enter your Name:</label>
        <input type='text' name="name"  placeholder='Enter UserName' value={form.name} onChange={handleChange} required/>
      </div>

      <div style={{ marginTop: '20px' }}>
        <label>Enter Password: </label>
        <input type='password' name="password" value={form.password} onChange={handleChange}  required/>
    </div>
    <div>
        <button type='submit' >Submit</button>
    </div>
    </form>
   </div>
   </div>
  )
}

export default LoginPage



