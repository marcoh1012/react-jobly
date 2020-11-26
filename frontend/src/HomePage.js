import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { Button } from 'reactstrap'

function HomePage({loggedIn}){

    let history = useHistory()

    let greeting = (<div>
        <h2>Jobly</h2>
        <p>All Jobs in one, convenient place</p>
        </div>)

    function login(){
        history.push('/login')
    }

    if(!loggedIn){
        return (
            <>
            {greeting}
            <Button color="primary" onClick={login}>Log in</Button>
            </>
        )
    }    
    return(
            <>
            {greeting}
            <h4>Welcome Back!</h4>
            </>
        
    )
}

export default HomePage