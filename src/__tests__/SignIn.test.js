import { render, screen } from '@testing-library/react'
import SignIn from '../pages/SignIn'

describe('<SignIn />', () => {
  it('renders without crashing', () => {
    render(<SignIn />)
    const text = screen.getByText(/Sign In/i)
    expect(text).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<SignIn />)

    const input = screen.getByRole('textbox', {
      name: /email/i,
    })
    expect(input).toBeInTheDocument()
  })

  it('renders password input', () => {
    render(<SignIn />)

    const input = screen.getByLabelText(/password/i)
    expect(input).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<SignIn />)

    const button = screen.getByRole('button', { name: /submit/i })
    expect(button).toBeInTheDocument()
  })
})
