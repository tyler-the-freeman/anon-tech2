/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import Layout from "../elements/wireframes/Layout";
import Header from "../elements/navigation/Header";
import Hero from "../components/c-suite/Hero";
import InfoSection from "../components/c-suite/InfoSection";
import ProjectFooter from "../components/c-suite/ProjectFooter";
import SEO from "../elements/SEO";

const CSuite = () => (
  <React.Fragment>
    <Layout>
      <SEO title="C-Suite" />
      <Header />
      <Hero />
      <InfoSection />
      <ProjectFooter />
    </Layout>
  </React.Fragment>
);

export default CSuite;
