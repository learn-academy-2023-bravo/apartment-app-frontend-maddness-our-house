import { render, screen } from  '@testing-library/react'
import NotFound from '../pages/NotFound'

    describe('<NotFound />', () => {
      it('renders without crashing', () => {
        render(
          <NotFound/>
        )
        const text = screen.getByText(/404 Page Not Found/i)
        expect(text).toBeInTheDocument()
      })

      it("render a image with a src ", () => {
        render(
            <NotFound />
        )
        const image = screen.getByRole("img")
        expect(image).toHaveAttribute("src", "https://tse2.mm.bing.net/th?id=OIP.5yc_NYd7D0dAbm0GrSneHgHaE7&pid=Api&P=0")
    })
})