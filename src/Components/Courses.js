import React from 'react';
import './CoursesStyles.css';
import CoursesData from './CoursesData';
import CSEImg from '../Assets/cse2.avif'
import ECEImg from '../Assets/ece2.jpg';
import MechImg from '../Assets/mech1.jpg';
const Courses = () => {
  return (
        <div className='course-container'>
        <h1>Featured Courses</h1>
       <div className='course-card-container'>

        <CoursesData
        img={CSEImg}
        heading='computer science and engineering'
        text='isicing elit. Consectetur aperiam deserunt dolores. Facilis aliquid inventore exercitationem temporibus quo, consequatur nobis tempore officia optio atque dolor obcaecati animi eos praesentium expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia magni velit, magnam quo iste nihil voluptates eveniet dolor itaque.inctio numquam accusamus cum consequatur'
        />

       <CoursesData
        img={ECEImg}
        heading='electrical and communication engineering'
        text='isicing elit. Consectetur aperiam deserunt dolores. Facilis aliquid inventore exercitationem temporibus quo, consequatur nobis tempore officia optio atque dolor obcaecati animi eos praesentium expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia magni velit, magnam quo iste nihil voluptates eveniet dolor itaque.inctio numquam accusamus cum consequatur'
        />

        <CoursesData
        img={MechImg}
        heading=' mechanical engineering'
        text='isicing elit. Consectetur aperiam deserunt dolores. Facilis aliquid inventore exercitationem temporibus quo, consequatur nobis tempore officia optio atque dolor obcaecati animi eos praesentium expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia magni velit, magnam quo iste nihil voluptates eveniet dolor itaque.inctio numquam accusamus cum consequatur'
        />
       
       </div>
      </div>
  )
}

export default Courses