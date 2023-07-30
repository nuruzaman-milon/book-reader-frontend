import { Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='bg-[#D8F2F1]'>
      <Navbar
      fluid
      rounded
      className="w-[92%] mx-auto bg-[#D8F2F1]"
    >
      <Link to="/">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Book Reader
          </span>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <NavLink to="/">Home</NavLink>
        </Navbar.Link>
        <Navbar.Link
        >
          <NavLink to="/all-books">All Books</NavLink>
        </Navbar.Link>
        <Navbar.Link href="#">
          Sign In
        </Navbar.Link>
        <Navbar.Link href="#">
          Sign Up
        </Navbar.Link>
        <Navbar.Link href="#">
          Sign Out
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default NavBar