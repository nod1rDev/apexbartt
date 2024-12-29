import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../PageComponents/Home/Header";
import Hero from "../PageComponents/Home/Hero";
import About from "../PageComponents/Home/About";
import Footer from "../Components/Footer";
import Automation from "../PageComponents/Home/Automation";
import Autopilot from "../PageComponents/Home/Autopilot";
import Headerr from "../Components/Header";
import LetsScale from "../PageComponents/Home/LetsScale";
import Work from "../PageComponents/Home/Work";
import ClientSay from "../PageComponents/Home/ClientSay";
import Info from "../PageComponents/Home/Info";

function Home() {
  return (
    <div
      className="w-full h-full "
      style={{
        backgroundImage: `url("https://cdn.prod.website-files.com/6427c6c769d01c2f58037956/6427ce2ee23a16d26b372c45_bg-lines-axe.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      <Headerr />
      <Header />
      <Hero />
      <About />
      <Automation />
      <Autopilot />
      <LetsScale />
      <Work />
      <ClientSay />
      <Info />
      <Footer />
    </div>
  );
}

export default Home;
