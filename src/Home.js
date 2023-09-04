import React from "react";
import "./style.css";
// import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import ServiceSection from "./components/Service";
import TeamSection from "./components/Team";
import TestimonialsSection from "./components/Testimonial";
// import Footer from "./components/Footer";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SignIn from "./Signin";
// import Signup from "./Signup";

export default function Home() {
  return (
    <>
      {/* <Router>
        <Navbar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router> */}
      <HeroSection />
      <ServiceSection />
      <TeamSection />
      <TestimonialsSection />
      {/* <Footer /> */}
    </>
  );
}
