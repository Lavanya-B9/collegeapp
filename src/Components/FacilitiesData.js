import React, { Component } from 'react';
import './FacilitiesSectionStyles.css';
export class FacilitiesData extends Component {
  render() {
    return (
       <div className={this.props.className}>
            <div className='facilities-text'>
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
            </div>
            <div className='facilities-img'>
               <img alt='hostelImg' src={this.props.img1}/>
                <img alt='hostelImg' src={this.props.img2}/>
            </div>
      </div>
    )
  }
}

export default FacilitiesData