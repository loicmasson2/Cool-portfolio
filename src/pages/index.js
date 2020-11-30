import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import Background from '../components/Background';
import About from '../sections/About';
import Experiences from '../sections/Experiences';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Experiences />
    <Footer />
  </Layout>
);

export default IndexPage;
