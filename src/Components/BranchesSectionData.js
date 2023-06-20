import React from 'react';

const BranchesSectionData = (props) => {
  return (
    <div className={props.className}>
            <div className='facilities-text'>
            <h2>{props.heading}</h2>
            <p>{props.text}</p>k
            </div>
            <div className='facilities-img'>
                <img alt='UniversityImg' src={props.img1}/>
                <img alt='ClassRoomImg' src={props.img2}/></div>
      </div>
  )
}

export default BranchesSectionData