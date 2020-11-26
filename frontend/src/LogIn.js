import React, { useState } from 'react'
import { Button, Col, Container, Row} from 'reactstrap'
import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'
import './Login.css'

function LogIn({setLoggedIn}){
const [form, setForm] = useState(<LogInForm setLoggedIn={setLoggedIn}/>)

function setLogIn(setLoggedIn){
    setForm(<LogInForm  setLoggedIn = {setLoggedIn}/>)
}

function setSignUp(setLoggedIn){
    setForm(<SignUpForm  setLoggedIn = {setLoggedIn}/>)
}

return(
    <Container >
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
            <div className='logInButtons'>
            <Button onClick={setLogIn} color="primary">Log In</Button>
            <Button onClick={setSignUp} color="primary">Sign Up</Button>
             </div>
            {form}
            </Col>
        </Row>

    </Container>
)   
}

export default LogIn