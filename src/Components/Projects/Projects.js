import React, { useEffect } from 'react';
import StyleIcon from '../StyleIcon/StyleIcon';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import './Projects.css';

const Projects = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const imagesMap = {
    default: ['https://imgur.com/Qt8c71C.jpg', 'https://imgur.com/DdQC2D1.jpg', 'https://imgur.com/px4gK86.jpg'],
    manageLazily: [
      'https://imgur.com/G8w8dmQ.jpg',
      'https://imgur.com/97ny0wn.jpg',
      'https://imgur.com/kagGHwA.jpg',
      'https://imgur.com/4TZMxpV.jpg',
      'https://imgur.com/eKsi7d0.jpg'
    ],
    eatabout: [
      'https://imgur.com/jEf4wKQ.jpg',
      'https://imgur.com/h26NRgc.jpg',
      'https://imgur.com/fGiVCJY.jpg',
      'https://imgur.com/4nlK0j1.jpg',
      'https://imgur.com/IFWiIr3.jpg',
      'https://imgur.com/eHxIqzS.jpg'
    ],
    bookmark: [
      'https://imgur.com/oEzQhwF.jpg',
      'https://imgur.com/RJXeVDL.jpg'
    ],
    spacedRepetition: [
      'https://imgur.com/F8OpBNE.jpg',
      'https://imgur.com/t4P7EQ3.jpg',
      'https://imgur.com/khPTXhN.jpg',
      'https://imgur.com/igYjojB.jpg',
      'https://imgur.com/9t27Nh9.jpg'
    ]
  }

  return (
    <section className="Projects">
      <div className="Projects__container">
        <h2>manageLazily</h2>
        <ImageCarousel imgUrls={imagesMap.manageLazily} />
        <div className="Projects__proj_description">
          {StyleIcon({
            style: 'leftQuote'
          })}
          <p>ManageLazily enables company owners, project managers, and employees to have a one-stop project management hub where they can create projects, track project completion and due dates, add tasks to projects, log hours worked on project tasks, and more. Built with simplicity and usability in mind, ManageLazily is a great alternative to more complex (and expensive) project management software.</p>
          {StyleIcon({
            style: 'rightQuote'
          })}
        </div>
        <ul>
          <li className="techStack">
            <span>[ HTML ]</span>
            <span>[ CSS ]</span>
            <span>[ React ]</span>
            <span>[ Firebase ]</span>
          </li>
          <li className="appLinks">
            <a href="https://managelazily.com/" target="_blank" rel="noopener noreferrer">Live App</a>
            <a href="https://github.com/balayaydemir/Capstone-Group3-Client" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </li>
        </ul>
      </div>
      <div className="separator"></div>
      <div className="Projects__container">
        <h2>Eatabout</h2>
        <ImageCarousel imgUrls={imagesMap.eatabout} />
        <div className="Projects__proj_description">
          {StyleIcon({
            style: 'leftQuote'
          })}
          <p>Eatabout is an application that allows users to keep track of their must-try restaurants and their experiences from restaurants that they have already been to. Users can create a restaurant wishlist, log details of their experiences at specific restaurants, and view personalized reports on their dining history.</p>
          {StyleIcon({
            style: 'rightQuote'
          })}
        </div>
        <ul>
          <li className="techStack">
            <span>[ HTML ]</span>
            <span>[ CSS ]</span>
            <span>[ PostgreSQL ]</span>
            <span>[ Node.js ]</span>
            <span>[ Express ]</span>
            <span>[ React ]</span>
          </li>
          <li className="appLinks">
            <a href="https://eatabout-app.balayaydemir.now.sh/" target="_blank" rel="noopener noreferrer">Live App</a>
            <a href="https://github.com/balayaydemir/eatabout-app" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </li>
        </ul>
      </div>
      <div className="separator"></div>
      <div className="Projects__container">
        <h2>Spaced Repetition App</h2>
        <ImageCarousel imgUrls={imagesMap.spacedRepetition} />
        <div className="Projects__proj_description">
          {StyleIcon({
            style: 'leftQuote'
          })}
          <p>Spaced repetition is an application that helps users learn a new language by utilizing the spaced repetition technique. Users can sign up and practice learning words in Turkish. Users are notified if they have answered the word correctly or incorrectly and their scores are updated accordingly.</p>
          {StyleIcon({
            style: 'rightQuote'
          })}
        </div>
        <ul>
          <li className="techStack">
            <span>[ HTML ]</span>
            <span>[ CSS ]</span>
            <span>[ PostgreSQL ]</span>
            <span>[ Node.js ]</span>
            <span>[ Express ]</span>
            <span>[ React ]</span>
          </li>
          <li className="appLinks">
            <a href="https://michael-balay-spaced-repetition.now.sh/register" target="_blank" rel="noopener noreferrer">Live App</a>
            <a href="https://github.com/thinkful-ei-heron/Balay-Michael-spaced-repetition" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </li>
        </ul>
      </div>
      <div className="separator"></div>
      <div className="Projects__container">
        <h2>Bookmark App</h2>
        <ImageCarousel imgUrls={imagesMap.bookmark} />
        <div className="Projects__proj_description">
          {StyleIcon({
            style: 'leftQuote'
          })}
          <p>Bookmark is an application that allows users to store their favorite web pages in a single place. Users can add new bookmarks with a rating and description, filter bookmarks by rating, and delete bookmarks.</p>
          {StyleIcon({
            style: 'rightQuote'
          })}
        </div>
        <ul>
          <li className="techStack">
            <span>[ HTML ]</span>
            <span>[ CSS ]</span>
            <span>[ JavaScript ]</span>
            <span>[ JQuery ]</span>
          </li>
          <li className="appLinks">
            <a href="https://thinkful-ei-heron.github.io/bookmark_app_balay/" target="_blank" rel="noopener noreferrer">Live App</a>
            <a href="https://github.com/balayaydemir/bookmark_app_balay" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Projects;