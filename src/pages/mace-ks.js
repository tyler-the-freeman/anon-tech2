/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import Layout from "../elements/wireframes/Layout";
import Header from "../elements/navigation/Header";
import Hero from "../components/structured/Hero";
import NavSection from "../components/structured/NavSection";
import Cameras from "../components/structured/Cameras";
import Doors from "../components/structured/Doors";
import Cabling from "../components/structured/Cabling";
import ProjectFooter from "../components/structured/ProjectFooter";
import StructuredForm from "../components/structured/StructuredForm";
// import SEO from "../elements/SEO";

const Services = () => (
  <React.Fragment>
    <Layout>
      {/*<SEO title="MACE KS" />*/}
      <Header />
      <Hero />
      <StructuredForm />
    </Layout>
  </React.Fragment>
);

export default Services;
