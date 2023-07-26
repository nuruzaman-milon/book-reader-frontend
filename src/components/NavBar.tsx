import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

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
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#"
        >
          <p>
            About
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          Services
        </Navbar.Link>
        <Navbar.Link href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default NavBar