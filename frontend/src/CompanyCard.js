import React from 'react'
import {Card, CardBody, CardText, CardTitle} from 'reactstrap'
import './CompanyCard.css'


function CompanyCard({company}){
    let logo = company.logoUrl

    if(logo !== null){
        logo = './logo.png'
    }


    return (
        <Card>
            <CardTitle>
                <img src={logo} alt={`${company.handle} logo`}></img>
                <h2> {company.name}</h2>
            </CardTitle>
            <CardBody>
                <CardText>
                    {company.description}
                </CardText>
            </CardBody>
        </Card>
    )

}

export default CompanyCard