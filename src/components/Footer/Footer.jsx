import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
      <div className='footer' id= 'footer'>
          
          <div className="footer-content">
              <div className="footer-content-left">
                  <img src={assets.logo} alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias architecto cupiditate ea non rem voluptates accusamus repudiandae, dolorum veritatis consectetur eligendi commodi repellat animi! Voluptates a perferendis nihil qui.</p>
                  <div className="footer-social-icons">
                      <img src={assets.facebook_icon} alt="" />
                      <img src={assets.twitter_icon} alt="" />
                      <img src={assets.linkedin_icon} alt="" />
                  </div>
              </div>
              <div className="footer-content-center">
                  <h2>COMPANY</h2>
                  <ul>
                      <li>Home</li>
                      <li>About us</li>
                      <li>Delivery</li>
                      <li>Privecy policy</li>
                  </ul>
              </div>
              <div className="footer-content-right">
                  <h2>GET IN TOUCH</h2>
                  <ul>
                      <li>432342342342</li>
                      <li>contactName@gmail.com</li>
                  </ul>
              </div>
              
          </div>
          <hr />
          <p className='footer-copyright'>© 2024 Tomato All rights reserved</p>

    </div>
  )
}

export default Footer