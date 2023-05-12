import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from 'reactstrap'

const ApartmentIndex = ({ apartments }) => {
  return (
    <>
      <h1>Apartments Listings</h1>
      <Row>
        {apartments.map((apartment, index) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card key={index}>
                <img
                  alt={`profile of apartment listing ${apartment.street}`}
                  src={apartment.image}
                  className='object-fit-cover'
                  width='100%'
                  height='200px'
                />
                <CardBody>
                  <CardTitle tag='h5'>{apartment.street}</CardTitle>
                  <CardSubtitle className='mb-2 text-muted' tag='h6'>
                    {`$ ${apartment.price}`}
                  </CardSubtitle>
                  <Button
                    data-testid={apartment.id}
                    id='button'
                    name='Listing Details'
                    className='self-end'
                    to={`/apartmentshow/${apartment.id}`}
                    tag={NavLink}
                  >
                    Listing Details
                  </Button>
                </CardBody>
              </Card>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default ApartmentIndex
