import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Button, Input, Row, Col } from 'reactstrap'

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const petOptions = ['Yes', 'No', 'Small Animals', 'Only Turtles']

const ApartmentNew = ({ createApartment, current_user }) => {
  const navigate = useNavigate()

  const [apartment, setApartment] = useState({
    id: Math.floor(Math.random() * Math.pow(10, 10)),
    street: '',
    unit: '',
    city: '',
    state: states[0],
    square_footage: 1000,
    price: '',
    bedrooms: 2,
    bathrooms: 1.5,
    pets: petOptions[0],
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
        <Row>
          <Col xs={12} sm={4}>
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
          </Col>
          <Col xs={12} sm={4}>
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
          </Col>
          <Col xs={12} sm={4}>
            <FormGroup>
              <Label for='state'>State</Label>
              <Input
                id='state'
                name='state'
                type='select'
                value={apartment.state}
                onChange={handleChange}
              >
                {states.map((state) => (
                  <option value={state} key={state}>{state}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
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
        <Row>
          <Col xs={12} md={3}>
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
          </Col>
          <Col xs={12} md={3}>
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
          </Col>
          <Col xs={12} md={3}>
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
          </Col>
          <Col xs={12} md={3}>
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
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <FormGroup>
              <Label for='pets'>Pets</Label>
              <Input
                id='pets'
                name='pets'
                type='select'
                value={apartment.pets}
                onChange={handleChange}
              >
                {petOptions.map((option) => (
                  <option value={option} key={option}>{option}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col xs={12} sm={6}>
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
          </Col>
        </Row>
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
        <Button color='primary'>Submit</Button>
      </Form>
    </>
  )
}

export default ApartmentNew
