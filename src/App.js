import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AboutPage from "./Pages/AboutPage";
import BlogList from "./Pages/BlogList";
import BlogPage from "./Pages/BlogPage";
import LoginPage from "./Pages/LoginPage";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/blog-list" component={BlogList} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    </Router>
  );
}

export default App;
