import React from 'react';
import './FooterStyles.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h4>JNTU</h4>
                <p>Join here for best future</p>
            </div>
               <div>
                <a href='/'><i className='fa-brands fa-facebook-square'></i></a>
                <a href='/'><i className='fa-brands fa-twitter-square'></i></a>
                <a href='/'><i className='fa-brands fa-behance-square'></i></a>
                <a href='/'><i className='fa-brands fa-instagram-square'></i></a>
           </div>
          </div>
        <div className='bottom'>
           <div>
                <h4>Branches</h4>
                <a href='/'>kakinada</a>
                <a href='/'>hyderabad</a>
                <a href='/'>anantapur</a>
                <a href='/'>kakinada</a>
          </div>
            <div>
                <h4>Join us on</h4>
                <a href='/'>JNTU App</a>
                <a href='/'>Telegram</a>
                <a href='/'>whatsup</a>
                <a href='/'>Facebook</a>
            </div>
            <div>
                <h4>Support</h4>
                <a href='/'>status</a>
                <a href='/'>change</a>
                <a href='/'>login</a>
                <a href='/'>License</a>
            </div>
            <div>
                <h4>Contact US</h4>
                <a href='/'>000-999-888</a>
                <a href='/'>000-999-888</a>
                <a href='/'>222-999-888</a>
                <a href='/'>555-999-888</a>
            </div>
            </div>
         </div>
  )
}

export default Footer