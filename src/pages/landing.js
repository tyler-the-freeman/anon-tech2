/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../elements/wireframes/Layout";
import Header from "../elements/navigation/Header";
import Hero from "../components/landing/Hero";
import SectionOne from "../components/landing/SectionOne";
import SectionTwo from "../components/landing/SectionTwo";
import SectionThree from "../components/landing/SectionThree";
import ContactFooter from "../components/landing/ContactFooter";
// import SEO from "../elements/SEO";

const Index = () => {
  return (
    <Layout>
      {/*<SEO title="Landing" />*/}
      <Header />
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
