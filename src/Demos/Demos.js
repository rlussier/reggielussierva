import React from 'react';
// import AudioPlayer from '../Audio/AudioPlayer'; 
import '../sass/Demos.css';

const Demos = () => {
  return (
    <div className="main_block-container">
      <h2>Demos</h2>
      <iframe width="50%" height="166" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/705124768&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <iframe width="50%" height="166" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/705125593&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      {/* <AudioPlayer audioSrc="./AudioFiles/ReggieLussier_Character Demo.mp3" /> */}
      {/* <AudioPlayer audioSrc="./AudioFiles/ReggieLussier_Character Demo.mp3" /> */}
    </div>
  );
};

export default Demos;

      {/* <AudioPlayer audioSrc="https://soundcloud.com/reggie-lussier/reggielussier-character-demo-2019?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" /> */}
      {/* Replace "path/to/your/audio/file.mp3" with the path to your audio file */}