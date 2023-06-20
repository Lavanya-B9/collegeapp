import React from 'react';
import HeroSection from '../Components/HeroSection';
import HeroImg from '../Assets/university4.avif';
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';
const ContactUS = () => {
  return (
    <div>
    <HeroSection 
        heading='Jawaharlal Nehru technological university'
        description='your future is here'
        image={HeroImg}
        btnClsName='Hero-btn-hide'/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default ContactUS