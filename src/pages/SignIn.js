import React, { useState } from 'react'
import { Form, FormGroup, Label, Button, Input } from 'reactstrap'

const SignIn = ({ signin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <h1>Sign In</h1>
      <Form onSubmit={(e) => {
        e.preventDefault()
        signin(email, password)
      }}>
        <FormGroup>
          <Label for='email'>Email</Label>
          <Input
            id='email'
            name='email'
            placeholder='name@example.com'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input
            id='password'
            name='password'
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  )
}

export default SignIn

