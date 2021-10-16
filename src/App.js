import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import BlogListPage from "./Pages/BlogListPage";
import BlogPage from "./Pages/BlogPage";
import LoginPage from "./Pages/LoginPage";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/blog-list" component={BlogListPage} />
          <Route path="/blog/:name" component={BlogPage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
