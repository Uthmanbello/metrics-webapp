import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const About = () => (
  <div className="about">
    <Link to="/" className="return"><FontAwesomeIcon icon={faArrowLeft} /></Link>
    <h1>About us</h1>
    <p>
      Welcome to our weather app! Here,
      you can stay up to date on the latest
      weather conditions in your city.
    </p>
    <p>
      We understand that weather can have a significant impact on your daily life,
      whether you are planning your commute, your outdoor activities, or your wardrobe.
      That&apos;s why we strive to provide you with the
      most detailed and easy-to-understand information possible,
      so you can make informed decisions about your day.
    </p>
    <h3>Contact us</h3>
    <p>You can contact us via:</p>
    <p>uthmanbello88@gmail.com</p>
  </div>
);

export default About;
