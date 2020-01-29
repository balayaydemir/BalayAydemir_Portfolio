import React, { useEffect } from 'react';
import StyleIcon from '../StyleIcon/StyleIcon';
import './About.css';

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <section className="About">
      <div id="About__photo">
        <img src="https://imgur.com/MfVbDpC.jpg" alt="balay aydemir" />
        <h2>Hello! My name is Balay and I'm a Full Stack Developer.</h2>
      </div>
      <div className="Projects__proj_description">
        {StyleIcon({
            style: 'leftQuote'
          })}
        <p>Before pursuing a career in development I worked as a recruiter for a Technology Staffing and Services company. Interacting with technology professionals day in and day out was what initially sparked my interest in development. After some time, I came to realize that my interest had turned into a strong desire to be hands on in building technology solutions. When I decide on something I commit 100% so naturally I put in my notice and enrolled in Thinkful's Engineering Immersion program shortly after. Being a part of a team of other like-minded, passionate individuals is something I am very excited for. Having multiple years of experience in the service industry as well as recruitment has given me the opportunity to develop great teamwork and communication skills that I will no doubt carry into my next role.</p>
        {StyleIcon({
            style: 'rightQuote'
        })}
      </div>
      <h3>When I'm not hammering away at my keyboard I'm either powerlifting, hiking, or out discovering new restaurants in San Diego. </h3>
      <div className="hobbyIcons">
        {StyleIcon({
            style: 'dumbbell'
        })}
        {StyleIcon({
            style: 'hiking'
        })}
        {StyleIcon({
            style: 'utensils'
        })}
      </div>
    </section>
  )
}

export default About;