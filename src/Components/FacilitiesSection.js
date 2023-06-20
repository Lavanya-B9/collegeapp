import React from 'react';
import './FacilitiesSectionStyles.css';
import FacilitiesData from './FacilitiesData';
import HostelImg1 from '../Assets/hostel1.jpg';
import HostelImg2 from '../Assets/hostel3.avif';
import LibraryImg1 from '../Assets/library1.jpg';
import LibraryImg2 from '../Assets/library3.avif';
import PlayGroundImg1 from '../Assets/playground1.jpg';
import PlayGroundImg2 from '../Assets/playground3.avif';
const FacilitiesSection = () => {
  return (
    <div className='facilities-container' style={{marginTop:0}}>
        <h1>Our facilities</h1>
        <FacilitiesData 
        className='facilities-desc'
        heading='Hostels'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam deserunt dolores. Facilis aliquid inventore exercitationem temporibus quo, consequatur nobis tempore officia optio atque dolor obcaecati animi eos praesentium expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia magni velit, magnam quo iste nihil voluptates eveniet dolor itaque.inctio numquam accusamus cum consequatur'
        img1={HostelImg1}
        img2={HostelImg2}
        />

    <FacilitiesData 
      className='facilities-desc-reverse'
        heading='Library'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam deserunt dolores. Facilis aliquid inventore exercitationem temporibus quo, consequatur nobis tempore officia optio atque dolor obcaecati animi eos praesentium expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia magni velit, magnam quo iste nihil voluptates eveniet dolor itaque.inctio numquam accusamus cum consequatur'
        img1={LibraryImg1}
        img2={LibraryImg2}
      />
     <FacilitiesData 
        className='facilities-desc'
        heading='Huge Playground'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam deserunt dolores. Facilis aliquid inventore exercitationem temporibus quo, consequatur nobis tempore officia optio atque dolor obcaecati animi eos praesentium expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia magni velit, magnam quo iste nihil voluptates eveniet dolor itaque.inctio numquam accusamus cum consequatur'
        img1={PlayGroundImg1}
        img2={PlayGroundImg2}
     />
      </div>
  )
}

export default FacilitiesSection