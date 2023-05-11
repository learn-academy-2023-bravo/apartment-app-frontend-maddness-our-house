import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink } from 'react-router-dom'

const MyApartments = ({ apartments, current_user}) => {
  
  const myApartments = apartments?.filter(apartment => current_user?.id === apartment.user_id)

  return (
    <>
      <h1>My Apartment Listings</h1>    
      {myApartments.map((apartment, index) => {
        return(
          
          <Card 
            style={{ width: '18rem' }} 
            key={index}
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

export default MyApartments 
