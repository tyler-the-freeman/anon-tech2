/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import Layout from "../elements/wireframes/Layout";
import Header from "../elements/navigation/Header";
import Hero from "../components/contact/Hero";
import SEO from "../elements/SEO";

const Contact = () => {
  return (
    <React.Fragment>
      <Layout>
        <SEO title="Contact" />
        <Header />
        <Hero id="footer" />
      </Layout>
    </React.Fragment>
  );
};

export default Contact;
