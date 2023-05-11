import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

const ApartmentIndex = ( { apartments }) => {
  const handleClick = () => {

  }
  return(
    <>
      <h1>Apartments Listings</h1>
      {apartments.map((apartment, index) => {
        return(
          
          <Card style={{ width: '18rem' }} key={index}
          >
            <img
              alt={`profile of apartment listing ${apartment.street}`}
              src={apartment.image}
            />
            <CardBody>
              <CardTitle tag="h5">
                {apartment.street}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {`$ ${apartment.price}`}
              </CardSubtitle>
                <Button 
                data-testid={apartment.id}
                id="button"
                name="Listing Details"
                className="self-end"
                to={`/apartmentshow/${apartment.id}`}
                tag={NavLink}
                >
                  Listing Details
                </Button>
            </CardBody>
          </Card>
        )
      })}
    </>
  )
}

export default ApartmentIndex
