import React from 'react';
import StyleIcon from '../StyleIcon/StyleIcon';
import './Contact.css';

const Contact = () => {

  return (
    <section className="Contact">
      <div className="Contact__div">
        <div className="Contact__container">
          {StyleIcon({
            style: 'connect'
          })}
          <h3>
            <a href="https://www.linkedin.com/in/balayaydemir/" target="_blank" rel="noopener noreferrer">
              Connect
            </a>
          </h3>
        </div>
        <div className="Contact__container">
          {StyleIcon({
            style: 'code'
          })}
          <h3>
            <a href="https://github.com/balayaydemir" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </h3>
        </div>
      </div>
      <div className="Contact__div">
        <div className="Contact__container">
          {StyleIcon({
            style: 'email'
          })}
          <h3>
            <a href="mailto: balayaydemir@gmail.com" target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </h3>
        </div>
        <div className="Contact__container">
          {StyleIcon({
            style: 'resume'
          })}
          <h3>
            <a href="https://docs.google.com/document/d/1sRD_p9h5t0l4bdEWT7AlKly8MTIjyvGxmkKgqKpybME/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Contact;