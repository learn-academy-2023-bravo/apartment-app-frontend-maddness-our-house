import { render, screen } from  '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '../components/Header'
import { BrowserRouter } from 'react-router-dom'

describe('<Header />', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const brand = screen.getByText(/Maddness Our House/i)
    expect(brand).toBeInTheDocument()
  })

  it('page location changes', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    // TODO Add testing to check page location
    userEvent.click(screen.getByText('Home'))
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
