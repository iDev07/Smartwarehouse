import React from "react";
import Header from "../components/Header/Header";
import N_content from "../components/News/N_Content";
import N_main from "../components/News/N_Main";
import Footer from "../components/Footer/Footer";
function News() {
  return (
    <div className="News">
      <Header />
      <N_main />
      <N_content />
      <Footer />
    </div>
  );
}

export default News;
