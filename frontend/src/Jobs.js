import React, { useEffect, useState } from 'react'
import {Container, ListGroup, ListGroupItem} from 'reactstrap'
import SearchForm from './SearchForm'
import JobCard from './JobCard'
import JoblyApi from './JoblyApi'
import './Jobs.css'

function Jobs({user, jobs, setJobs}){

    const [appliedJobs, setAppliedJobs] = useState([])

    useEffect(() => {
        async function getAppliedJobs(user){
            let res = await JoblyApi.getAppliedJobs(user.username)
            setAppliedJobs(res)

            return res
        }

        getAppliedJobs(user)

    
    }, [user])


    return(
        <Container>
            <div>
            <ListGroup className='jobs'>
            <SearchForm type='jobs' set={setJobs}/>
            {jobs.map( job => (
                    <ListGroupItem key={job.id} ><JobCard key={job.id} username={user.username} job={job} applied={appliedJobs.includes(job.id)}/></ListGroupItem>
            ))}
            </ListGroup>
            </div>
        </Container>
    )

}

export default Jobs;