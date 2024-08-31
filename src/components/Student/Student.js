import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Container, Paper } from '@mui/material';
import './Student.css'
import { useState, useEffect } from 'react';



export default function Student() {
  const[usn,setUsn] = useState(" ")
  const [name,setName] = useState(" ")
  const[address,setAddress] = useState(" ")
  const[students,setStudents] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const student={usn,name,address}
    console.log(student)
    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
    }).then(()=>{
      console.log("New Student Added");
    })
  }

  useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res => res.json())
    .then((result) => {
      setStudents(result);
    })
  },[])
  



  return (
    
      <Container>
        <Paper elevation={3}>
        <form noValidate autoComplete='off' className='paperStyle'>
        <h2>Get into Action</h2>
       <TextField id="filled-basic" label="Student USN" color="warning" variant="filled" fullWidth
       value={usn}
       onChange={(e)=>setUsn(e.target.value)}
       className='usn'
       />
      <TextField id="filled-basic" label="Student Name" color="warning" variant="filled" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      className='name'
      />
      <TextField id="filled-basic" label="Address" color="warning" variant="filled" fullWidth 
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      className='address'
      />
      <Button variant='contained' color='secondary' className='btn' onClick={handleSubmit}>Submit</Button>
      </form>
      </Paper>

      <div className="subclass">
      <Paper elevation={3} className='paperStyle'>

        {students.map(student => (
          <Paper elevation={6} key={student.usn} className='paper2'>
          USN: {student.usn}<br/>
          Name : {student.name}<br/>
          Address : {student.address}<br/>
          </Paper>

        ))}

      

     
      </Paper>
      </div>
      </Container>
  );
}
