
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react';

export default function Footer2() {
    return (
        <Footer container>
            <div className="w-full text-primary mt-24 text-center">
                <div className="w-full flex items-center justify-center">
                    <div className='flex flex-col justify-center items-center'>
                        <FooterBrand
                            // href="https://flowbite.com"
                            className='w-10 mb-3'
                            src="https://i.ibb.co/X3RtxjP/logo.png"
                            alt="Flowbite Logo"
                            name="Fox IT"
                        />
                        <FooterLinkGroup className='grid gap-5 lg:grid-cols-1'>
                            <div className='flex'>
                                <a className="link mr-1 link-hover" href='https://www.facebook.com/foxitcentre' target='blank'>
                                    <img width={40} src="https://i.ibb.co/7Sv45pg/facebook-circle.png" alt="" /></a>
                                <a className="link link-hover" href='https://www.facebook.com/foxitcentre' target='blank'>
                                    <img width={43} src="https://i.ibb.co/h1bwTJB/linked-in-icon-18.png" alt="" /></a>
                            </div>
                        </FooterLinkGroup>
                    </div>
                </div>
                <FooterDivider className='my-1' />
                <FooterCopyright href="#" by="Copyright ©2023 Fox IT Center. All Rights Reserve" year={2024} />
            </div>
        </Footer>
    );
}
