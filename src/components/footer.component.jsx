import React from 'react';
import './footer.styles.css';

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className='footer'>
        <p>Created by Tran Ho, with 💙 <span className="date">{`${date}`}</span></p>
    </div>
  )
}
export default Footer;
