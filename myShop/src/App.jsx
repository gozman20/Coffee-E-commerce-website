import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CartItems from "./components/CartItems";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import Review from "./components/Review";
import ContactUs from "./components/ContactUs";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Test from "./components/Test";

function App() {
  return (
    <div className="overflow-x-hidden">
      {/* <Navbar />

      <Hero />
      <AboutUs />
      <Menu />
      <Review />
      <ContactUs />
      <Blog />

      <Footer /> */}
      <Test />
    </div>
  );
}

export default App;
