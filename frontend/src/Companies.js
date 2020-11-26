import React from 'react'
import CompanyCard from './CompanyCard'
import {ListGroup, ListGroupItem, Container} from 'reactstrap'
import './Companies.css'
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'


function Companies({companies, setCompanies}){

    return (
        <Container >
            <div>
            <ListGroup className='companies'>
            <SearchForm type='companies' set={setCompanies}/>
            {companies.map( company => (
                <Link to={`/companies/${company.handle}`}>
                    <ListGroupItem key={company.handle}><CompanyCard company={company}/></ListGroupItem>
                </Link>
            ))}
            </ListGroup>
            </div>
        </Container>
    )

}

export default Companies