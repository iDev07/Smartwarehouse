import React from "react";
import Main from "../components/Chances/Ch_Main";
import Ch_stats from "../components/Chances/Ch_stats";
import Ch_stats2 from "../components/Chances/Ch_stats2";
import Ch_Videos from "../components/Chances/Ch_Videos";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function ChancesPage() {
  return (
    <div>
      <Header />
      <Main />
      <Ch_stats />
      <Ch_Videos />
      <Ch_stats2 />
      <Footer />
    </div>
  );
}

export default ChancesPage;
