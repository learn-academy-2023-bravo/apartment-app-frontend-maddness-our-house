import { render, screen } from  '@testing-library/react'
import Footer from '../components/Footer'

describe('<Footer />', () => {
  it('renders without crashing', () => {
    render(
      <Footer />
    )

    const text = screen.getByText(/Created by Nguyen & Raymond/i)
    expect(text).toBeInTheDocument()
  })
})
