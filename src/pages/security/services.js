/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import Layout from "../../elements/wireframes/Layout";
import Header from "../../elements/navigation/Header";
import Hero from "../../components/security/services/Hero";
import NavSection from "../../components/security/services/NavSection";
import Cameras from "../../components/security/services/Cameras";
import Doors from "../../components/security/services/Doors";
import Cabling from "../../components/security/services/Cabling";
import ProjectFooter from "../../components/security/services/ProjectFooter";
// import SEO from "../../elements/SEO";

const Services = () => (
  <React.Fragment>
    <Layout>
      {/*<SEO title="Services" />*/}
      <Header />
      <Hero />
      <NavSection />
      <Cameras />
      <Doors />
      <Cabling />
      <ProjectFooter />
    </Layout>
  </React.Fragment>
);

export default Services;
