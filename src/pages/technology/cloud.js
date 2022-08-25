/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import Layout from "../../elements/wireframes/Layout";
import Header from "../../elements/navigation/Header";
import Hero from "../../components/technology/cloud/Hero";
import NavSection from "../../components/technology/cloud/NavSection";
import Integrate from "../../components/technology/cloud/Integrate";
import CloudServices from "../../components/technology/cloud/CloudServices";
import HostedVoip from "../../components/technology/cloud/HostedVoip";
import ProjectFooter from "../../components/technology/cloud/ProjectFooter";
// import SEO from "../../elements/SEO";

const Cloud = () => (
  <React.Fragment>
    <Layout>
      {/*<SEO title="Cloud" />*/}
      <Header />
      <Hero />
      <NavSection />
      <Integrate />
      <CloudServices />
      <HostedVoip />
      <br />
      <ProjectFooter />
    </Layout>
  </React.Fragment>
);

export default Cloud;
