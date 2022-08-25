/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../elements/wireframes/Layout";
import Header from "../elements/navigation/Header";
import Hero from "../components/home/Hero";
import SectionOne from "../components/home/SectionOne";
import SectionTwo from "../components/home/SectionTwo";
import SectionThree from "../components/home/SectionThree";
import ContactFooter from "../components/home/ContactFooter";
// import SEO from "../elements/SEO";

import logoblack from "../images/logos/SPT-Logo-Black.png";
import logowhite from "../images/logos/SPT-Logo-White.png";

const Index = () => {
  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <Header />
      <div
        style={{
          display: "none",
        }}
      >
        <img src={logoblack} alt="" />
        <img src={logowhite} alt="" />
      </div>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <div
        sx={{
          height: `50px`,
        }}
      />
      <ContactFooter />
    </Layout>
  );
};

export default Index;
