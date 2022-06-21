import React from "react";
import Header from "../components/Header/Header";
import Automation from "../components/Home/Automation";
import Carousel from "../components/Home/Carousel";
import Footer from "../components/Footer/Footer";
import Main from "../components/Home/Main";
import MobileApp from "../components/Home/MobileApp";
import Opportunites from "../components/Home/Opportunites";
function HomePage() {
  return (
    <div>
      <Header />
      <Main />
      <Opportunites />
      <Automation />
      <MobileApp />
      <Carousel />
      <Footer />
    </div>
  );
}

export default HomePage;
