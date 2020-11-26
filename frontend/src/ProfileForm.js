import React, { useState } from 'react'
import {Form, FormGroup, Label, Input, Row, Col, Button} from 'reactstrap'
import JoblyApi from './JoblyApi'


function ProfileForm({data, setUser}){


    const startingData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: ""
    }

    const [formData, setFormData] = useState(startingData)

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({...fData, [name]:value}))
    }
    
    const handleSubmit = evt => {
        evt.preventDefault();
        async function editProfile(){
            let res = await JoblyApi.update(data.username, formData)
            setUser(res)
        }

        editProfile()
        setFormData(fData => ({...fData, password :''}))

    }

    return (
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Form onSubmit={handleSubmit}>
                    <FormGroup row>
                        <h5> Username:</h5>
                        <p>&ensp; {data.username}</p>
                    </FormGroup >
                    <FormGroup row>
                        <Label htmlFor='firstName' >First Name:</Label>
                        <Input type='text' name='firstName' id='firstName' value={formData.firstName} onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor='lastName' >Last Name:</Label>
                        <Input type='text' name='lastName' id='lastName' value={formData.lastName} onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor='email' >Email:</Label>
                        <Input type='text' name='email' id='email' value={formData.email} onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor='password' >Re-enter Password:</Label>
                        <Input type='password' name='password' id='password' value={formData.password} onChange={handleChange}/>
                    </FormGroup>
            
                    <Button onSubmit={handleSubmit} color="primary">Submit</Button>
                    
                </Form>
            </Col>
        </Row>
    )
}

export default ProfileForm