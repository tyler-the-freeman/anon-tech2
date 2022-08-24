/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../elements/wireframes/Layout";
import Header from "../elements/navigation/Header";
import Hero from "../components/home/Hero";

const NotFoundPage = () => {
  return (
    <Layout>
      <Header />
      <Hero />
    </Layout>
  );
};

export default NotFoundPage;
