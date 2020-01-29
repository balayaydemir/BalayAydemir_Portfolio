import React, { useEffect } from 'react';
import StyleIcon from '../StyleIcon/StyleIcon';
import './Contact.css';

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <section className="Contact">
      <div className="Contact__div">
        <div className="Contact__container">
          <a href="https://www.linkedin.com/in/balayaydemir/" target="_blank" rel="noopener noreferrer">
            {StyleIcon({
              style: 'connect'
            })}
            <h3>Connect</h3>
          </a>
        </div>
        <div className="Contact__container">
          <a href="https://github.com/balayaydemir" target="_blank" rel="noopener noreferrer">
            {StyleIcon({
              style: 'code'
            })}
            <h3>GitHub</h3>
          </a>
        </div>
      </div>
      <div className="Contact__div">
        <div className="Contact__container">
          <a href="mailto: balayaydemir@gmail.com" target="_blank" rel="noopener noreferrer">
            {StyleIcon({
              style: 'email'
            })}
            <h3>Email</h3>
          </a>
        </div>
        <div className="Contact__container">
          <a href="https://docs.google.com/document/d/1sRD_p9h5t0l4bdEWT7AlKly8MTIjyvGxmkKgqKpybME/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            {StyleIcon({
              style: 'resume'
            })}
            <h3>Resume</h3>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact;