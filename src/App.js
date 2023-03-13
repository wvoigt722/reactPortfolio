import React from "react";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<AboutMe />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/resume" element={<Resume />} />

          <Route to="/*" element={<AboutMe />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
