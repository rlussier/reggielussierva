import React from 'react'
import '../sass/Contact.css'
import CODA from '../Images/CODA.png'
import NAVA from '../Images/NAVA.png'
import QueerVox from '../Images/QueerVox.png'

export default function Contact() {
  return (
    <div className="main_block-container">
        <h2>Let's Connect:</h2>
    <div className="container_block-contact">
      <div className="contact_container">
        <h3>For inquiries about your next project. You can reach me at...</h3>
        <span>Email:<a href="mailto:ralussier@hotmail.com"> ralussier@hotmail.com</a></span><br/>
        <span>Phone: (818)570-8346</span>
      </div>
      <div className="organizations_container-block">
        <ul>
          <li>
            <a href="https://www.queervox.org/">
              <img src={QueerVox}/>
            </a>
          </li>
          <li>
            <a href="https://navavoices.org/">
              <img src={NAVA}/>
            </a>
          </li>
          <li>
            <a href="https://www.codaunite.com/">
              <img src={CODA}/>
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}
