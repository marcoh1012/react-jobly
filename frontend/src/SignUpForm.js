import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import JoblyApi from './JoblyApi'

function SignUpForm({setLoggedIn}){
    const history = useHistory();

    const startingData = {
        username: "",
        password: '',
        firstName: '',
        lastName: '',
        email: ''
      }

    const [formData, setFormData] = useState(startingData)

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({...fData, [name]:value}))
    }
    
    const handleSubmit = evt => {
        evt.preventDefault();
        JoblyApi.register(formData)
        setFormData(startingData)
        setLoggedIn(true)
        history.push('/')
        
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup row>
                <Label htmlFor='username' hidden>Username:</Label>
                <Input type='text' name='username' id='username' placeholder='username' onChange={handleChange}/>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor='password' hidden>Password:</Label>
                <Input type='password' name='password' id='password' placeholder='password' onChange={handleChange}/>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor='firstName' hidden>First Name:</Label>
                <Input type='text' name='firstName' id='firstName' placeholder="First Name" onChange={handleChange}/>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor='lastName' hidden>Last Name:</Label>
                <Input type='text' name='lastName' id='lastName' placeholder="Last Name" onChange={handleChange}/>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor='email' hidden>Email:</Label>
                <Input type='text' name='email' id='email' placeholder="email" onChange={handleChange}/>
            </FormGroup>
            <Button onClick={handleSubmit} color="primary">Sign Up</Button>
            
        </Form>
    )
}

export default SignUpForm