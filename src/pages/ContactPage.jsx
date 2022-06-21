import React from "react";
import ContactLocations from "../components/Contact/ContactLocations";
import ContactMain from "../components/Contact/ContactMain";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function ContactPage() {
  return (
    <div>
      <Header />
      <ContactMain />
      <ContactLocations />
      <Footer />
    </div>
  );
}

export default ContactPage;
