import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import JobCard from './JobCard'

function Company({companies, jobs}){
    let { handle } = useParams()

    let company = companies.find(company => company.handle === handle);
    if (!company) return <Redirect to='/' />;

    let companyJobs = jobs.filter( job => job.companyHandle === handle)

    return(
        <Container>
            <div>
                <h2>{company.name}</h2>
                <p>{company.description}</p>
            </div>
            <ListGroup>
                {
                    companyJobs.map( job => (
                        <ListGroupItem >
                            <JobCard key={job.id} job={job}></JobCard>
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
        </Container>
    )

}

export default Company