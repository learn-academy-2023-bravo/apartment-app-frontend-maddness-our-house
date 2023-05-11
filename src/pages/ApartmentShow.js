import React from 'react'
import {
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardTitle,
  Container,
  Button,
} from 'reactstrap'
import { useParams } from 'react-router-dom'

const ApartmentShow = ({ apartments, current_user }) => {
  const { id } = useParams()
  const {
    street,
    unit,
    city,
    state,
    square_footage,
    price,
    bedrooms,
    bathrooms,
    pets,
    image,
    manager,
    user_id
  } = apartments.find((a) => a.id === parseInt(id))

  return (
    <Container>
      <Card>
        <img alt={`Apartment ${unit}`} src={image} />
        <CardBody>
          <CardTitle tag='h1'>Apartment Unit {unit}</CardTitle>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>${price}</ListGroupItem>
          <ListGroupItem>
            Address: {street} {city}, {state}
          </ListGroupItem>
          <ListGroupItem>Square Footage: {square_footage}</ListGroupItem>
          <ListGroupItem>Bedrooms: {bedrooms}</ListGroupItem>
          <ListGroupItem>Bathrooms: {bathrooms}</ListGroupItem>
          <ListGroupItem>Pets: {pets}</ListGroupItem>
          <ListGroupItem>Manager: {manager}</ListGroupItem>
        </ListGroup>
        {current_user?.id === user_id && (
          <CardBody className='d-flex align-items-center justify-content-between'>
            <Button href={`/apartmentedit/${id}`}>Edit</Button>
            <Button
              color='danger'
              onClick={() => console.log('📝 TODO: add delete functionality')}
            >
              Delete
            </Button>
          </CardBody>
        )}
      </Card>
    </Container>
  )
}

export default ApartmentShow
