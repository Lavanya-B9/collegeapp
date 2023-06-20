import React, { Component } from 'react';
import HeroImg from '../Assets/university3.avif';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/Footer';
import Courses from '../Components/Courses';
import '../Components/CoursesStyles.css';
import CoursesData from '../Components/CoursesData';
import CivilImg from '../Assets/civil1.jpg'
import EEEImg from '../Assets/eee1.jpg';
import AIImg from '../Assets/ai1.jpg';

export class CoursesPage extends Component {
  render() {
    return (
      <div>
      <HeroSection 
        heading='All Courses'
        description='Join here for your better future'
        btnClsName='Hero-btn-hide'
        image={HeroImg}
        />
      <Courses/>
        <div className='course-container-two'>
       <div className='course-card-container'>
     <CoursesData
        img={CivilImg}
        heading='civil engineering'
        text='isicing elit. Consectetur aperiam deserunt dolores. Facilis aliquid inventore exercitationem temporibus quo, consequatur nobis tempore officia optio atque dolor obcaecati animi eos praesentium expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia magni velit, magnam quo iste nihil voluptates eveniet dolor itaque.inctio numquam accusamus cum consequatur'
        />

      <CoursesData
        img={EEEImg}
        heading='electrical and electronical engineering'
        text='isicing elit. Consectetur aperiam deserunt dolores. Facilis aliquid inventore exercitationem temporibus quo, consequatur nobis tempore officia optio atque dolor obcaecati animi eos praesentium expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia magni velit, magnam quo iste nihil voluptates eveniet dolor itaque.inctio numquam accusamus cum consequatur'
        />

      <CoursesData
        img={AIImg}
        heading=' Artifial enginnering'
        text='isicing elit. Consectetur aperiam deserunt dolores. Facilis aliquid inventore exercitationem temporibus quo, consequatur nobis tempore officia optio atque dolor obcaecati animi eos praesentium expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia magni velit, magnam quo iste nihil voluptates eveniet dolor itaque.inctio numquam accusamus cum consequatur'
        />
       </div>
       </div>
       <Footer/>
        </div>
    )
  }
}
export default CoursesPage