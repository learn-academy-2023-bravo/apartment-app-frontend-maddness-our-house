import { render, screen } from  '@testing-library/react'
import ApartmentIndex from '../pages/ApartmentIndex'
import { mockApartments } from '../mockApartments.js'
import { BrowserRouter } from 'react-router-dom'

describe('<ApartmentIndex />', () => {
    
    it('renders text without crashing', () => {
        render(
            <BrowserRouter>
                <ApartmentIndex  apartments={mockApartments} />
            </BrowserRouter>
        )
        const text = screen.getByText(/Apartments Listings/i)
        expect(text).toBeInTheDocument()
    })

    it("render a image with a src, street, price ", () => {
        render(
            <BrowserRouter>
                <ApartmentIndex apartments={mockApartments}/>
            </BrowserRouter>
        )
        mockApartments.forEach((apartment) => {
            const image = screen.getByAltText(`profile of apartment listing ${apartment.street}`)
            const street = screen.getByText(apartment.street)
            const price = screen.getByText(`$ ${apartment.price}`)
            expect(image).toHaveAttribute("src", apartment.image) 
            expect(street).toBeInTheDocument()
            expect(price).toBeInTheDocument()
        })
    })

    it('should contain Listing Detail button', () => {
        render(
            <BrowserRouter>
                <ApartmentIndex apartments={mockApartments} />
            </BrowserRouter>
        )
        mockApartments.forEach((apartment) => {
            const button = screen.getByTestId(apartment.id)
            expect(button).toBeInTheDocument()
        })
    })
})
