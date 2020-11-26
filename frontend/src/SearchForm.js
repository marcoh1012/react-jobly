import React, { useState } from 'react'
import {Form, FormGroup, Label, Input, Button, Col} from 'reactstrap'
import JoblyApi from './JoblyApi'
import './SearchForm.css'

function SearchForm({type,set}){
    const startingData = {
        searchTerm: " "
      }

    const [searchTerm, setSearchTerm] = useState(startingData)

    const handleChange = evt => {
        const {name, value} = evt.target;
        setSearchTerm(fData => ({...fData, [name]:value}))
    }
    
    const handleSubmit = evt => {
        evt.preventDefault();
        setSearchTerm(startingData)
        // formData.id= formData.name.replace(/\s+/g, '-').toLowerCase();
        async function search(){
            let res = null;
            if(type === 'companies'){
                res = await JoblyApi.searchCompanies(searchTerm.searchTerm)
            }
            else{
                res = await JoblyApi.searchJobs(searchTerm.searchTerm)
            }
            
            set(res)
            return res
        }

        search();
        
        
    }

    return (
        <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Form className="search-form" inline onSubmit={handleSubmit}>
                <FormGroup className="justify-content-center">
                    <Label htmlFor='searchTerm' hidden>Search</Label>
                    <Input type='text' name='searchTerm' id='searchTerm' placeholder="Enter search term..." onChange={handleChange}/>
                </FormGroup>
                <Button color="primary" onClick={handleSubmit}>Search</Button>

            </Form>
        </Col>
    )
}

export default SearchForm