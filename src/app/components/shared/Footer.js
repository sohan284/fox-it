
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react';

export default function Footer1() {
  return (
    <Footer container>
      <div className="w-full text-primary text-center">
        <div className="w-full flex justify-evenly">
          <FooterBrand
            // href="https://flowbite.com"
            className='w-24 '
            src="https://i.ibb.co/X3RtxjP/logo.png"
            alt="Flowbite Logo"
            name="Fox IT"
          />
          <FooterLinkGroup className='grid gap-5 lg:grid-cols-1'>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider className='my-1' />
        <FooterCopyright href="#" by="FoxIT™" year={2024} />
      </div>
    </Footer>
  );
}
