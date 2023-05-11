import { render, screen } from '@testing-library/react'
import ApartmentNew from '../pages/ApartmentNew'
import { BrowserRouter } from 'react-router-dom'

describe('<ApartmentNew />', () => {
  it('renders text without crashing', () => {
    render(
      <BrowserRouter>
        <ApartmentNew />
      </BrowserRouter>
    )

    const textInputNames = [
      'Street',
      'City',
      'State',
      'Unit',
      'Price',
      'Pets',
      'Manager',
      'Image URL',
    ]

    textInputNames.forEach((inputName) => {
      const input = screen.getByRole('textbox', {
        name: inputName,
      })
      expect(input).toBeInTheDocument()
    })

    const numberInputNames = ['Square Footage', 'Bedrooms', 'Bathrooms']

    numberInputNames.forEach((inputName) => {
      const input = screen.getByRole('spinbutton', {
        name: inputName,
      })
      expect(input).toBeInTheDocument()
    })
  })

  it('renders h1', () => {
    render(
      <BrowserRouter>
        <ApartmentNew />
      </BrowserRouter>
    )

    const heading = screen.getByRole('heading', {
      name: /create a new listing/i,
    })
    expect(heading).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(
      <BrowserRouter>
        <ApartmentNew />
      </BrowserRouter>
    )

    const button = screen.getByRole('button', { name: 'Submit' })
    expect(button).toBeInTheDocument()
  })
})
