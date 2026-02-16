import { Button, TextField } from '@mui/material'
import axios from 'axios'
import e from 'cors'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
  var navigate=useNavigate()
  var location=useLocation()
    console.log(location.state)

  var[student,setStudent]=useState({Name:"",Age:"",Department:"",Mark:""})

  const Addhandle =()=>{
    if(location.state !== null){
      //update
      axios.put("http://localhost:3004/update/"+location.state.val._id,student)
      .then((res)=>{
       alert(res.data)
       navigate("/view")
      })
    }
    else{
      axios.post("http://localhost:3004/add",student)
      .then((res)=>{
        alert(res.data)
        navigate("/view")
      })
  }
  }

  const HandleInput=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value})
    console.log(student)
  }

  if(location.state !== null){
    useEffect(()=>{
      setStudent({...student,
        Name:location.state.val.Name,
        Age:location.state.val.Age,
        Department:location.state.val.Department,
        Mark:location.state.val.Mark,
      })
    },[])
  }    
  
  return (
    <div>
      <br/><br/>

        <center><h1>Student Form</h1></center>
        <TextField label="name" variant="filled" 
        name="Name" value={student.Name} onChange={HandleInput}/><br/><br/>
        <TextField label="age" variant="filled" 
        name="Age" value={student.Age} onChange={HandleInput}/><br/><br/>
        <TextField label="Department" variant="filled" 
        name="Department" value={student.Department} onChange={HandleInput}/><br/><br/>
        <TextField label="mark" variant="filled" 
        name="Mark" value={student.Mark} onChange={HandleInput}/><br/><br/> 
        <Button variant="contained" color='primary' onClick={Addhandle}>Submit</Button>
    </div>
  )
}

export default Add