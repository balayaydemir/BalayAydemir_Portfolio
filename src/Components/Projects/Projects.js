import React from 'react';
import StyleIcon from '../StyleIcon/StyleIcon';
import './Projects.css';

const Projects = () => {

  return (
    <section className="Projects">
      <div className="Projects__container">
        <h2>manageLazily</h2>
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
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
            <span>Firebase</span>
          </li>
          <li className="appLinks">
            <a href="https://managelazily.com/" target="_blank" rel="noopener noreferrer">Live App</a>
            <a href="https://github.com/balayaydemir/Capstone-Group3-Client" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </li>
        </ul>
      </div>
      <div className="Projects__container">
        <h2>Eatabout</h2>
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
            <span>HTML</span>
            <span>CSS</span>
            <span>PostgreSQL</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>React</span>
          </li>
          <li className="appLinks">
            <a href="https://eatabout-app.balayaydemir.now.sh/" target="_blank" rel="noopener noreferrer">Live App</a>
            <a href="https://github.com/balayaydemir/eatabout-app" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </li>
        </ul>
      </div>
      <div className="Projects__container">
        <h2>Spaced Repetition App</h2>
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
            <span>HTML</span>
            <span>CSS</span>
            <span>PostgreSQL</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>React</span>
          </li>
          <li className="appLinks">
            <a href="https://michael-balay-spaced-repetition.now.sh/register" target="_blank" rel="noopener noreferrer">Live App</a>
            <a href="https://github.com/thinkful-ei-heron/Balay-Michael-spaced-repetition" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </li>
        </ul>
      </div>
      <div className="Projects__container">
        <h2>Bookmark App</h2>
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
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>JQuery</span>
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