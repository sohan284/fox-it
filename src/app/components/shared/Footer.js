
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react';

export default function Footer1() {
  return (
    <Footer container>
      <div className="w-full text-primary text-center mt-24">
        <div className="w-full flex justify-evenly">
          <FooterBrand
            // href="https://flowbite.com"
            className='w-24 '
            src="https://i.ibb.co/X3RtxjP/logo.png"
            alt="Flowbite Logo"
            name="Fox IT"
          />
          <FooterLinkGroup className='grid gap-5 lg:grid-cols-1'>
            <FooterLink href="#">Connect Us</FooterLink>
            <div className='flex'>
              <a className="link mr-1 link-hover" href='https://www.facebook.com/foxitcentre' target='blank'>
                <img width={40} src="https://i.ibb.co/7Sv45pg/facebook-circle.png" alt="" /></a>
              <a className="link link-hover" href='https://www.facebook.com/foxitcentre' target='blank'>
                <img width={43} src="https://i.ibb.co/h1bwTJB/linked-in-icon-18.png" alt="" /></a>
            </div>
          </FooterLinkGroup>
        </div>
        <FooterDivider className='my-1' />
        <FooterCopyright href="#" by="FoxIT™" year={2024} />
      </div>
    </Footer>
  );
} 
