import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import About from "./components/About";
import Header from "./components/Header";
import "./styles/App.css";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="sync">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/project" element={<div style={{padding:'8rem 2rem',color:'#111',fontFamily:'Inter,sans-serif',fontSize:'0.9rem',letterSpacing:'0.1em'}}>PROJECT — COMING SOON</div>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Header />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
