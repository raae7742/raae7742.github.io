import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import About from "./components/About";
import Project from "./components/Project";
import Jjal from "./components/Jjal";
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
        <Route path="/project" element={<Project />} />
        <Route path="/jjal" element={<Jjal />} />
      </Routes>
    </AnimatePresence>
  );
}

const HEADER_HIDDEN_PATHS = ["/jjal"];

function AppInner() {
  const location = useLocation();
  const hideHeader = HEADER_HIDDEN_PATHS.some((p) =>
    matchPath({ path: p, end: false }, location.pathname)
  );
  return (
    <div className="app">
      {!hideHeader && <Header />}
      <main className="main-content">
        <AnimatedRoutes />
      </main>
    </div>
  );
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppInner />
    </Router>
  );
}

export default App;
