import React from "react";
import Navbar from "../components/Nav";
import HeroSection from "@/components/Hero";
import WhyJoinSection from "@/components/WhyJoin";
import HowItWorksSection from "@/components/HowItWorks";
import EarlyAccessBenefitsSection from "@/components/EarlyAcess";
import Footer from "@/components/Footer";
import WhoAreYou from "@/components/WhoAreYou";
import ShoeShowcase from "@/components/ShoeShowcase";

const HomeView = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ShoeShowcase />
      <WhoAreYou />
      <WhyJoinSection />
      <HowItWorksSection />
      <EarlyAccessBenefitsSection />
      <Footer />
    </div>
  );
};

export default HomeView;
