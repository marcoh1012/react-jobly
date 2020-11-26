import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import JoblyApi from './JoblyApi'
import './LoginForm.css'

function LogInForm({setLoggedIn}){
    const history = useHistory();

    const startingData = {
        username: "",
        password: ''
      }

    const [formData, setFormData] = useState(startingData)

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({...fData, [name]:value}))
    }
    
    const handleSubmit = evt => {
        evt.preventDefault();

        async function logIn(){
            let res = await JoblyApi.logIn(formData)
            if(res.token !== null)
            {
                setLoggedIn(true)
            }
        }
        logIn()
        setFormData(startingData)
        history.push('/')
        
    }

    return (
        <Form className='LoginFormPage' onSubmit={handleSubmit}>
            <FormGroup row>
                <Label htmlFor='username' hidden>Username:</Label>
                <Input type='text' name='username' id='username' placeholder='username' onChange={handleChange}/>
            </FormGroup >
            <FormGroup row>
                <Label htmlFor='password' hidden>Password:</Label>
                <Input type='password' name='password' id='password' placeholder='password' onChange={handleChange}/>
            </FormGroup>
            <Button onSubmit={handleSubmit} color="primary">Log In</Button>
            
        </Form>
    )
}

export default LogInForm