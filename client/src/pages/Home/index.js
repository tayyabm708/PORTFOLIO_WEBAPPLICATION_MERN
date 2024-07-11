import React from "react";
import { useSelector } from 'react-redux';
import Header from "../../components/Header";
import Intro from "./intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Sider from "./leftSider";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="bg-primary px-40 sm:px-5 sm:py-3">
          <Intro />
          <About />
          <Experiences />
          <Projects />
          <Contact />
          <Footer />
          <Sider />
        </div>
      )}
    </div>
  );
}

export default Home;
