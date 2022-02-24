import React from "react";
import TopNavbar from "./topnavbar";
import Navbar from "./navbar";
import HomeService from "./homeservices";
import OurClients from "./ourclients";
import Banner from "./banner";
import SecFooter from "./secondfooter";

export default function Home() {
  return (
    <div className="home-main-container">
      <section className="top">
        <TopNavbar />
      </section>
      <section className="navbar">
        <Navbar />
      </section>

      <section id="service">
        <HomeService />
      </section>

      <OurClients />
      <Banner />
      <SecFooter />
    </div>
  );
}
