import React from "react";
import Content from "../../../Components/Content/Content.jsx";
import FooterComponent from "./FooterComponent.jsx";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <section className="bg-white pt-16">
      <div className=" pb-16 bg-[#141414] text-white">
        <Content className="">
          <section className="grid md:grid-cols-5 pt-8 class border-b pb-12 border-gray-500">
            {/* 1st */}
            <div>
              <FooterComponent
                title={"ABOUT"}
                text={[
                  "About Us",
                  "Careers",
                  "Awards & Recognition",
                  "Investors",
                  "Bata Industrials",
                  "Share Department",
                ]}
              />
            </div>
            {/* 2nd */}
            <div className="mt-10">
              <FooterComponent
                title={"INFORMATION"}
                text={[
                  "bKash Payments",
                  "TERMS & CONDITIONS",
                  "Payment Options",
                  "Privacy Policy",
                  "Franchise Programme",
                  "Coverage areas",
                ]}
              />
            </div>
            {/* 3rd */}
            <div className="mt-10">
              <FooterComponent
                title={"POPULAR BRANDS"}
                text={[
                  "Bata",
                  "Hush Puppies",
                  "Power",
                  "Comfit",
                  "Weinbrenner",
                  "North Star",
                  "Marie Claire",
                ]}
              />
            </div>
            {/* 4th */}
            <div className="mt-10">
              <FooterComponent
                title={"CUSTOMER SERVICE"}
                text={[
                  "FAQs",
                  " MyBata",
                  "Bata Stores",
                  "All About Feet",
                  " Contact Info",
                  " Report Issue",
                ]}
              />
            </div>
            {/* 5th */}
            <div className="mt-10">
              <FooterComponent
                title={"INFO"}
                text={[
                  "Bata Shoe Company Bangladesh Ltd.  Tongi Gazipur, Bangladesh",
                  "Call us at: 09666200300 (9am-9pm) Email: bd.customercare@bata.com",
                ]}
              />
            </div>
          </section>
          <div className="flex justify-between items-center pt-7">
            <div>
              <h2 className="font-medium">Sign up for our Newsletter</h2>
            </div>
            <div className="flex gap-7 items-center">
              <FaFacebook size={26} />
              <FaTwitter size={26} />
              <FaInstagram size={26} />
              <FaLinkedin size={26} />
            </div>
          </div>
          <h2 className="text-gray-400 text-center text-base pt-7">
            © 2023 Bata Shoe Company Bangladesh Ltd. Tongi, Postal code - 1710,
            Gazipur, Bangladesh
          </h2>
        </Content>
      </div>
    </section>
  );
};

export default Footer;
