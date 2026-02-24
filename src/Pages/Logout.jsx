import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate=useNavigate();
    const handleSubmit=()=>{
        navigate('/home');
    }
  return (
    <div>
        <h1> I am in Logout page</h1>
      <button onClick={handleSubmit}>Logout</button>
    </div>
  )
}

export default Logout
