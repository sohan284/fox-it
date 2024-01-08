
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react';

export default function Footer2() {
    return (
        <Footer container>
            <div className="w-full text-primary text-center bottom-0 absolute">
                <div className="w-full flex items-center justify-center">
                    <div className='flex flex-col justify-center items-center'>
                        <FooterBrand
                            // href="https://flowbite.com"
                            className='w-12 mb-3'
                            src="https://i.ibb.co/X3RtxjP/logo.png"
                            alt="Flowbite Logo"
                            name="Fox IT"
                        />
                        <FooterLinkGroup className='grid gap-5 grid-cols-3 text-'>
                            <FooterLink href="#">About</FooterLink>
                            <FooterLink href="#">Privacy Policy</FooterLink>
                            <FooterLink href="#">Contact</FooterLink>
                        </FooterLinkGroup>
                    </div>
                </div>
                <FooterDivider className='my-1' />
                <FooterCopyright href="#" by="FoxIT™" year={2024} />
            </div>
        </Footer>
    );
}
