import { render, screen } from  '@testing-library/react'
import MyApartments from '../pages/MyApartments'
import { mockApartments } from '../mockApartments.js'
import { mockUsers } from '../mockUsers.js'

import { BrowserRouter } from 'react-router-dom'

describe('<MyApartments />', () => {
    
    it('renders text without crashing', () => {
        
        render(
            <BrowserRouter>
                <MyApartments  apartments={mockApartments} />
            </BrowserRouter>
        )

        const text = screen.getByText(/My Apartment Listings/i)
        expect(text).toBeInTheDocument()
    })

    it("render a image with a src, street, price ", () => {

        const current_user = mockUsers[0]

        render(
            <BrowserRouter>
                <MyApartments current_user={current_user} apartments={mockApartments}/>
            </BrowserRouter>
        )

        const myApartments = mockApartments?.filter(apartment => current_user?.id === apartment.user_id)

        myApartments.forEach((apartment) => {
            const image = screen.getByAltText(`profile of apartment listing ${apartment.street}`)
            const street = screen.getByText(apartment.street)
            const price = screen.getByText(`$ ${apartment.price}`)
            expect(image).toHaveAttribute("src", apartment.image) 
            expect(street).toBeInTheDocument()
            expect(price).toBeInTheDocument()
        })
    })

    it('should contain Listing Detail button', () => {

        const current_user = mockUsers[0]

        render(
            <BrowserRouter>
                <MyApartments apartments={mockApartments} current_user={current_user} />
            </BrowserRouter>
        )

        const myApartments = mockApartments?.filter(apartment => current_user?.id === apartment.user_id)

        myApartments.forEach((apartment) => {
            const button = screen.getByTestId(apartment.id)
            expect(button).toBeInTheDocument()
        })
    })
})
