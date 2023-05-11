import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import ApartmentShow from '../pages/ApartmentShow'
import { mockApartments } from '../mockApartments'

describe('<ApartmentShow />', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter initialEntries={['/apartmentshow/1']}>
        <Routes>
          <Route
            path='/apartmentshow/:id'
            element={<ApartmentShow apartments={mockApartments} />}
          />
        </Routes>
      </MemoryRouter>
    )

    const apartmentHeading = screen.getByRole(
      'heading',
      {
        name: `Apartment Unit ${mockApartments[0].unit}`,
      },
      { exact: false }
    )

    expect(apartmentHeading).toBeInTheDocument()
  })

  it('renders price, address, and pets (the most important details)', () => {
    render(
      <MemoryRouter initialEntries={['/apartmentshow/2']}>
        <Routes>
          <Route
            path='/apartmentshow/:id'
            element={<ApartmentShow apartments={mockApartments} />}
          />
        </Routes>
      </MemoryRouter>
    )

    const {
      price: mockPrice,
      street,
      city,
      state,
      pets: mockPets,
    } = mockApartments[1]

    const price = screen.getByText(`$${mockPrice}`)
    const address = screen.getByText(`Address: ${street} ${city}, ${state}`)
    const pets = screen.getByText(`Pets: ${mockPets}`)

    expect(price).toBeInTheDocument()
    expect(address).toBeInTheDocument()
    expect(pets).toBeInTheDocument()
  })
})
