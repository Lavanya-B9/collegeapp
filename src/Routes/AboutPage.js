import React from 'react';
import HeroSection from '../Components/HeroSection';
import HeroImg from '../Assets/university1.jpg';
import BranchesSection from '../Components/BranchesSection';
import Footer from '../Components/Footer';
import FacilitiesSection from '../Components/FacilitiesSection';
import Celebrations from '../Components/Celebrations';
const AboutPage = () => {
  return (
    <div>
      <HeroSection 
        heading='About US'
        description='You will be the next engineer'
        image={HeroImg}
        btnClsName='Hero-btn-hide'
        />
       <FacilitiesSection/>
       <Celebrations/>
        <BranchesSection/>
        <Footer/>
       </div>
  )
}

export default AboutPage