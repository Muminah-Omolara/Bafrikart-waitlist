import React from 'react'
import Navbar from '../components/Nav'
import HeroSection from '@/components/Hero'
import WhyJoinSection from '@/components/WhyJoin'
import HowItWorksSection from '@/components/HowItWorks'
import EarlyAccessBenefitsSection from '@/components/EarlyAcess'
import Footer from '@/components/Footer'
import WhoAreYouSection from '@/components/WhoAreYou'




const HomeView = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <WhoAreYouSection/>
      <WhyJoinSection/>
      <HowItWorksSection/>
      <EarlyAccessBenefitsSection/>
      <Footer/>
    </div>
  )
}

export default HomeView
