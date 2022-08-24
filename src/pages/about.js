/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import Layout from "../elements/wireframes/Layout";
import Header from "../elements/navigation/Header";
import Hero from "../components/about/Hero";
import ProjectFooter from "../components/about/ProjectFooter";
import Team from "../components/about/Team";
import SEO from "../elements/SEO";

const About = () => (
  <React.Fragment>
    <Layout>
      <SEO title="About" />
      <Header />
      <Hero />
      <Team />
      <ProjectFooter />
    </Layout>
  </React.Fragment>
);

export default About;
