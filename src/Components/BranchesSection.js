import React from 'react';
import './FacilitiesSectionStyles.css';
// import './BranchesSectionData'
import FacilitiesData from './FacilitiesData';
// import BranchesSectionData from './BranchesSectionData';
import UniversityImg1 from '../Assets/university1.jpg';
import UniversityImg2 from '../Assets/university2.avif';
import UniversityImg3 from '../Assets/university3.avif';
import UniversityImg4 from '../Assets/university4.avif';
import ClassRoomImg1 from '../Assets/classroom1.avif';
import ClassRoomImg2 from '../Assets/classroom2.jpg';
import ClassRoomImg3 from '../Assets/classroom3.jpg';
import ClassRoomImg4 from '../Assets/classroom4.jpg';

const BranchesSection = () => {
  return (
    <div className='facilities-container' style={{marginTop:0}}>
        <h1>Our Branches</h1>

        <FacilitiesData 
        className='facilities-desc'
        heading='Kakinada'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam deserunt dolores. Facilis aliquid inventore exercitationem temporibus quo, consequatur nobis tempore officia optio atque dolor obcaecati animi eos praesentium expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia magni velit, magnam quo iste nihil voluptates eveniet dolor itaque.inctio numquam accusamus cum consequatur'
        img1={UniversityImg1}
        img2={ClassRoomImg1}
         />

      <FacilitiesData 
        className='facilities-desc-reverse'
        heading='Hyderabad'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam deserunt dolores. Facilis aliquid inventore exercitationem temporibus quo, consequatur nobis tempore officia optio atque dolor obcaecati animi eos praesentium expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia magni velit, magnam quo iste nihil voluptates eveniet dolor itaque.inctio numquam accusamus cum consequatur'
        img1={UniversityImg2}
        img2={ClassRoomImg2}
      />

       <FacilitiesData 
        className='facilities-desc'
        heading='Anantapur'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam deserunt dolores. Facilis aliquid inventore exercitationem temporibus quo, consequatur nobis tempore officia optio atque dolor obcaecati animi eos praesentium expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia magni velit, magnam quo iste nihil voluptates eveniet dolor itaque.inctio numquam accusamus cum consequatur'
        img1={UniversityImg3}
        img2={ClassRoomImg3}
      />
      
       <FacilitiesData 
        className='facilities-desc-reverse'
        heading='Ramagundam'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam deserunt dolores. Facilis aliquid inventore exercitationem temporibus quo, consequatur nobis tempore officia optio atque dolor obcaecati animi eos praesentium expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia magni velit, magnam quo iste nihil voluptates eveniet dolor itaque.inctio numquam accusamus cum consequatur'
        img1={UniversityImg4}
        img2={ClassRoomImg4}
       />
    </div>
  )
}

export default BranchesSection;