import React from 'react';
import '../sass/About.css';
import SpaceSailor from '../Images/SpaceSailor.png';

export default function About() {
  return (
    <div className="main_block-container">
        {/* <h2>About</h2> */}
        <div className="about_block">
            <div className="about-img_block">
                <img src={SpaceSailor} width="450px" height="400px" />
            </div>
            <div className="about-paragraph">
                <span>
                    Reggie Lussier is a voice actor based out of Dallas, TX.
                    They have worked in anime and video games. 
                </span><br/>
                <span>
                    <b>Vocal Range:</b> Soprano/Alto
                </span>
                <span><br/>
                    <b>Voice Type:</b> Young child, feminine to masculine, teen to adult female. 
                </span>
            </div>
        </div>


        <h2>What They Can Offer</h2>
      <div className="main_block-secondary-container">
      <div className="services_block">
      <span>Quality Control & Assurance</span>
      <p>I offer quality control for your scripts.</p>
      </div>
      <div className="services_block">
      <span>ADR Adaption</span>
      <p>I can adapt any script into English.</p>
      </div>
      <div className="services_block">
      <span>Pre & Post Production</span>
      <p>Need help with your production, I have plenty of experience in pre and post production.</p>
      </div>
      <div className="services_block">
      <span>Project Management</span>
      <p>I offer quality control for your scripts.</p>
      </div>
    </div>

    </div>
  )
}
