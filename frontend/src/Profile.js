import React from 'react'
import { Container } from 'reactstrap'
import ProfileForm from './ProfileForm'

function Profile({user,setUser}){

    return (
        <Container>
            <h3>Profile</h3>
            <ProfileForm data={user} setUser={setUser}/>
        </Container>
    )

}

export default Profile