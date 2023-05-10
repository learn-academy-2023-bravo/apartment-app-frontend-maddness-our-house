import { render, screen } from '@testing-library/react'
import SignUp from '../pages/SignUp'

describe('<SignUp />', () => {
  it('renders without crashing', () => {
    render(<SignUp />)
    const text = screen.getByText(/Sign Up/i)
    expect(text).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<SignUp />)

    const input = screen.getByRole('textbox', {
      name: /email/i,
    })
    expect(input).toBeInTheDocument()
  })

  it('renders password input', () => {
    render(<SignUp />)

    const input = screen.getByLabelText(/password/i)
    expect(input).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<SignUp />)

    const button = screen.getByRole('button', { name: /submit/i })
    expect(button).toBeInTheDocument()
  })
})
