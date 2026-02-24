import React from 'react'
import Navbar from '../Componenets/Navbar'
import { useParams } from 'react-router-dom'

const About = () => {
    const {name}=useParams();
  return (
    <div>
        <Navbar/>
      <h1> I am in about page </h1>
      <h2>My name is {name}</h2>
    </div>
  )
}

export default About
