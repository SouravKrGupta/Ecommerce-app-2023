import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"} >
      <div className="row contactus ">
        <div className="col-md-4 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 mt-5">
          <div className="scrollable-text">
            <p className="text-justify mt-5">
              Welcome to Ecommerce App, your one-stop destination for all your
              shopping needs. We are passionate about providing you with a
              convenient and enjoyable online shopping experience.
            </p>

            <h2>Our Mission</h2>
            <p className="text-justify mt-2">
              At Ecommerce App, our mission is to make shopping easy,
              affordable, and fun for everyone. We believe that everyone
              deserves access to high-quality products at competitive prices,
              and we work tirelessly to bring you the best selection of items,
              from the latest trends to everyday essentials.
            </p>
            <h2>Who We Are</h2>
            <p className="text-justify mt-2">
              We are a team of dedicated professionals who are committed to
              delivering exceptional service to our customers. Our team consists
              of product experts, customer service specialists, and tech-savvy
              individuals who ensure that your shopping journey is smooth and
              enjoyable.
            </p>
           
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
