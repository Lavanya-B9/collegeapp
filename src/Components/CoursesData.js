import React from 'react';
import './CoursesStyles.css';
const CoursesData = (props) => {
  return (
    <div className='course-card'>
       <div className='course-img'>
            <img alt='courseImg' src={props.img}/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
          </div>
  )
}

export default CoursesData