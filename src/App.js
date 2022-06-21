import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/HomePage";
import ChancesPage from "./pages/ChancesPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/chances" element={<ChancesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
