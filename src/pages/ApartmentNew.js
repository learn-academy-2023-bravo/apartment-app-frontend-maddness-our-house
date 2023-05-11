import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Button, Input } from 'reactstrap'

const ApartmentNew = ({ createApartment, current_user }) => {
  const navigate = useNavigate()

  const [apartment, setApartment] = useState({
    id: Math.floor(Math.random() * Math.pow(10, 10)),
    street: '',
    unit: '',
    city: '',
    state: '',
    square_footage: 1000,
    price: '',
    bedrooms: 2,
    bathrooms: 1.5,
    pets: '',
    image: '',
    manager: '',
    user_id: current_user?.id,
  })

  const handleChange = (e) => {
    setApartment({ ...apartment, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h1>Create a New Listing</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          createApartment(apartment)
          navigate('/apartmentindex')
        }}
      >
        <FormGroup>
          <Label for='street'>Street</Label>
          <Input
            id='street'
            name='street'
            placeholder='123 Main St'
            type='text'
            value={apartment.street}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='city'>City</Label>
          <Input
            id='city'
            name='city'
            placeholder='Farville'
            type='text'
            value={apartment.city}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='state'>State</Label>
          <Input
            id='state'
            name='state'
            placeholder='Minnesota'
            type='text'
            value={apartment.state}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='unit'>Unit</Label>
          <Input
            id='unit'
            name='unit'
            placeholder='1A'
            type='text'
            value={apartment.unit}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='square_footage'>Square Footage</Label>
          <Input
            id='square_footage'
            name='square_footage'
            type='number'
            value={apartment.square_footage}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='price'>Price</Label>
          <Input
            id='price'
            name='price'
            type='text'
            value={apartment.price}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='bedrooms'>Bedrooms</Label>
          <Input
            id='bedrooms'
            name='bedrooms'
            type='number'
            value={apartment.bedrooms}
            onChange={handleChange}
            min={1}
          />
        </FormGroup>
        <FormGroup>
          <Label for='bathrooms'>Bathrooms</Label>
          <Input
            id='bathrooms'
            name='bathrooms'
            type='number'
            value={apartment.bathrooms}
            onChange={handleChange}
            step={0.5}
            min={1}
          />
        </FormGroup>
        <FormGroup>
          <Label for='pets'>Pets</Label>
          <Input
            id='pets'
            name='pets'
            type='text'
            value={apartment.pets}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='manager'>Manager</Label>
          <Input
            id='manager'
            name='manager'
            type='text'
            value={apartment.manager}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='image'>Image URL</Label>
          <Input
            id='image'
            name='image'
            type='text'
            value={apartment.image}
            onChange={handleChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  )
}

export default ApartmentNew
