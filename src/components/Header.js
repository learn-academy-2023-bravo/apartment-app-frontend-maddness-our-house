import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom'

const Header = ({ current_user, logout }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar expand='lg' className='shadow-lg'>
      <NavbarBrand tag={RRNavLink} to='/'>
        Madness Our House
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ms-auto' navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to='/'>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to='/apartmentindex'>
              Apartments
            </NavLink>
          </NavItem>

          {current_user ? (
            <>
              <NavItem>
                <NavLink tag={RRNavLink} to='/apartmentnew'>
                  New Apartment Listing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to='/myapartments'>
                  My Listings
                </NavLink>
              </NavItem>
              <NavItem>
                <Button 
                color='danger'
                onClick={logout}
                >
                  Logout
                </Button>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <NavLink tag={RRNavLink} to='/signin'>
                  Sign In
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to='/signup'>
                  Sign Up
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header
