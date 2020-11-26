import React from 'react'
import {Button, Card, CardText, CardTitle} from 'reactstrap'
import JoblyApi from './JoblyApi'
import './JobCard.css'

function JobCard({username, job, applied}){

    const apply = async ()=> {
        alert('applied')
       await JoblyApi.apply(username, job.id)
    }

    return(
        <Card>
            <CardTitle className='JobTitle'>
                <h3>{job.title}</h3>
                <Button className='ApplyButton' onClick={apply} disabled={applied}>
                    {applied ? 'Applied' : 'Apply'}
                </Button>
            </CardTitle>
            <CardText>
                
                    Salary: {job.salary} <br/>
                    Equity: {job.equity}
            </CardText>
            
        </Card>
    )
}

export default JobCard;