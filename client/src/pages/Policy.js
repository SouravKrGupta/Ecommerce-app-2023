import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus info-page">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="privacy policy"
            className="info-page-image"
          />
        </div>
        <div className="col-md-4">
          <div className="info-page-card">
            <h1>Privacy Policy</h1>
            <p>
              Your data is used only to process orders, manage your account,
              and improve the shopping experience.
            </p>
            <p>
              We do not sell personal information, and payments are processed
              through secure providers.
            </p>
            <p>
              Contact support any time if you need help updating or removing
              your account information.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
