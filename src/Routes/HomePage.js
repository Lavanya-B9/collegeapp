import React from 'react'
import HeroSection from '../Components/HeroSection';
import HeroImg from '../Assets/university2.avif';
import FacilitiesSection from '../Components/FacilitiesSection';
import Courses from '../Components/Courses';
import Footer from '../Components/Footer';
const HomePage = () => {
  return (
    <div>
        <HeroSection 
        heading='Jawaharlal Nehru technological university'
        description='your future is here'
        button='get started'
        image={HeroImg}
        btnClsName='Hero-btn-show'/>
       <Courses/>
        <FacilitiesSection/>
        <Footer/>
    </div>
  )
}

export default HomePage