import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import {Paper} from '@mui/material';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Student() {
    
    const paperStyle= {padding: '50px 20px', width:600, margin:"20px auto" }
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const handleClick=(e)=>{
        e.preventDefault()
        const student={name, address}
        fetch("http://localhost:8080/student/add",{
            method: "POST",
            headers:{"Content-type":"application.json"},
            body:JSON.stringify(student)
        
    }).then(()=>{
        console.log("New student added")
    })
    }
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>

            <h1 style={{color:"blue"}}><u>Add a Student</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      />
      <Button variant="contained"
      onClick={handleClick}
      >Submit</Button>
    </Box>
    {name}
      {address}
    </Paper>
    </Container>
  );
}