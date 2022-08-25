/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import Layout from "../../elements/wireframes/Layout";
import Header from "../../elements/navigation/Header";
import Hero from "../../components/security/reviews/Hero";
import ReviewSection from "../../components/security/reviews/ReviewSection";
import ProjectFooter from "../../components/security/reviews/ProjectFooter";
// import SEO from "../../elements/SEO";

const Reviews = () => (
  <React.Fragment>
    <Layout>
      {/*<SEO title="Reviews" />*/}
      <Header />
      <Hero />
      <ReviewSection />
      <ProjectFooter />
    </Layout>
  </React.Fragment>
);

export default Reviews;
