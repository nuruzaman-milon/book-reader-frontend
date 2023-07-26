import { Footer } from 'flowbite-react';
const FooterBottom = () => {
  return (
    <Footer container>
      <Footer.Copyright
        by="Flowbite™"
        href="#"
        year={2022}
        className=''
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">
          Licensing
        </Footer.Link>
        <Footer.Link href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export default FooterBottom