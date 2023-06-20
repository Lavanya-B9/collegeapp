import React from 'react';
import './CoursesStyles.css';
import CoursesData from './CoursesData';
import CelebrationImg1 from '../Assets/celebration1.avif'
import CelebrationImg2 from '../Assets/celebration2.jpg'

const Celebrations = () => {
  return (
    <div className='course-container' style={{marginTop:0}}>
    <h1>Celebrations In our college</h1>
   <div className='course-card-container'>

    <CoursesData
    img={CelebrationImg1}
    heading='Festival celebrations'
    text='isicing elit. Consectetur aperiam deserunt dolores. Facilis aliquid inventore exercitationem temporibus quo, consequatur nobis tempore officia optio atque dolor obcaecati animi eos praesentium expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia magni velit, magnam quo iste nihil voluptates eveniet dolor itaque.inctio numquam accusamus cum consequatur'
    />
  
   <CoursesData
    img={CelebrationImg2}
    heading='Fests Celebrations'
    text='isicing elit. Consectetur aperiam deserunt dolores. Facilis aliquid inventore exercitationem temporibus quo, consequatur nobis tempore officia optio atque dolor obcaecati animi eos praesentium expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia magni velit, magnam quo iste nihil voluptates eveniet dolor itaque.inctio numquam accusamus cum consequatur'
    />
   
   <CoursesData
    img={CelebrationImg1}
    heading='Annual Celebrations'
    text='isicing elit. Consectetur aperiam deserunt dolores. Facilis aliquid inventore exercitationem temporibus quo, consequatur nobis tempore officia optio atque dolor obcaecati animi eos praesentium expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia magni velit, magnam quo iste nihil voluptates eveniet dolor itaque.inctio numquam accusamus cum consequatur'
    />
   
   </div>
    </div>

  )
}

export default Celebrations