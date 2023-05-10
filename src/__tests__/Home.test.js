import { render, screen } from  '@testing-library/react'
import Home from '../pages/Home'

    describe('<Home />', () => {
      it('renders without crashing', () => {
        render(
          <Home />
        )

        const text = screen.getByText(/Welcome to Maddness Our House/i)
        expect(text).toBeInTheDocument()
      })

      it("render a image with a src ", () => {
        render(<Home />)
        const image = screen.getByRole("img")
        expect(image).toHaveAttribute("src", "https://lardbiscuit.files.wordpress.com/2020/03/ourhouseverybest.jpg?w=768")
        screen.logTestingPlaygroundURL()
    })
})

// screen.logTestingPlaygroundURL()

