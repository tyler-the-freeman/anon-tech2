/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import Layout from "../../elements/wireframes/Layout";
import Header from "../../elements/navigation/Header";
import Hero from "../../components/technology/managed-it/Hero";
import NavSection from "../../components/technology/managed-it/NavSection";
import HelpSection from "../../components/technology/managed-it/HelpSection";
import ManagementSection from "../../components/technology/managed-it/ManagementSection";
import IdentitySection from "../../components/technology/managed-it/IdentitySection";
import ProjectFooter from "../../components/technology/managed-it/ProjectFooter";
// import SEO from "../../elements/SEO";

const ManagedIT = () => (
  <React.Fragment>
    <Layout>
      {/*<SEO title="Managed IT" />*/}
      <Header />
      <Hero />
      <NavSection />
      <HelpSection />
      <ManagementSection />
      <IdentitySection />
      <ProjectFooter />
    </Layout>
  </React.Fragment>
);

export default ManagedIT;
