import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export default function Footer1() {
  return (
    <Footer data-aos="zoom-in" container>
      <div className="w-full text-primary text-center mt-24">
        <div className="w-full flex justify-evenly">
          <FooterBrand
            // href="https://flowbite.com"
            className="w-20"
            src="https://i.ibb.co/X3RtxjP/logo.png"
            alt="Flowbite Logo"
            name="Fox IT"
          />
          <FooterLinkGroup className="grid gap-5 lg:grid-cols-1">
            <FooterLink href="#"></FooterLink>
            <div className="flex">
              <a
                className="link mr-1 link-hover"
                href="https://www.facebook.com/foxitcentre"
                target="blank"
              >
                <img
                  width={30}
                  src="https://i.ibb.co/7Sv45pg/facebook-circle.png"
                  alt=""
                />
              </a>
              <a
                className="link link-hover"
                href="https://www.facebook.com/foxitcentre"
                target="blank"
              >
                <img
                  width={32}
                  src="https://i.ibb.co/h1bwTJB/linked-in-icon-18.png"
                  alt=""
                />
              </a>
            </div>
          </FooterLinkGroup>
        </div>
        <FooterDivider className="my-1" />
        <FooterCopyright href="#" by="Copyright 2024 Fox IT Center. All Rights Reserve" />
      </div>
    </Footer>
  );
}
