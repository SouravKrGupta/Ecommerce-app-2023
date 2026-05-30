import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus info-page">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contact us"
            className="info-page-image"
          />
        </div>
        <div className="col-md-4">
          <div className="info-page-card">
            <h1 className="text-center">Contact Us</h1>
            <p className="text-justify mt-2">
              Any query and info about product feel free to call anytime. We are
              available 24x7 to help with orders and support.
            </p>
            <p className="mt-3">
              <BiMailSend /> : www.help@ecommerceapp.com
            </p>
            <p className="mt-3">
              <BiPhoneCall /> : 012-3456789
            </p>
            <p className="mt-3">
              <BiSupport /> : 1800-0000-0000 (toll free)
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
