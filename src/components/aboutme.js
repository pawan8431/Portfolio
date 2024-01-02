import React, { Component } from 'react';

class About extends Component {
  render() {
    const containerStyle = {
      backgroundColor: '#f0f0f0',
      border: '2px solid #ccc',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      margin: '7rem',
    };

    const textStyle = {
      fontStyle: 'italic',
      fontSize:'20px',
    };

    return (
      <div style={{backgroundColor: '#F0FFFF', position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '999',}}>
<div style={containerStyle}>
        <p style={textStyle}>
          Hello, I'm Om Singh, a problem solver and critical thinker with a passion for software development. As a MERN (MongoDB, Express.js, React, Node.js) developer, I thrive on tackling complex challenges and crafting elegant solutions. I'm currently pursuing my engineering degree, demonstrating my commitment to both academic excellence and hands-on experience in the world of web development.
        </p>
        <p style={textStyle}>
          I'm a quick learner and possess a natural adaptability to new technologies. My enthusiasm for staying updated with the latest industry trends allows me to swiftly grasp and apply new tools and methodologies.
        </p>
        <p style={textStyle}>
          With a strong foundation in web technologies, I'm dedicated to continuous improvement and value collaboration in a team setting. My ability to think critically, coupled with my problem-solving skills, empowers me to address intricate issues with a systematic and creative approach.
        </p>
        <p style={textStyle}>
          I'm also a strong communicator, proficient at translating technical jargon into plain language, which facilitates effective teamwork and client interactions. I have a deep appreciation for design aesthetics, making user experience a top priority in my projects.
        </p>
        <p style={textStyle}>
          In addition to my technical prowess, I bring extra fabulous attributes to the table. I'm proactive, ambitious, and driven to make a positive impact through innovative software solutions.
        </p>
        <p style={textStyle}>
          Overall, I'm a proactive MERN developer with a knack for quick learning and adaptability to new technologies, ready to contribute my skills, enthusiasm, and dedication to your organization. I'm excited about the potential to collaborate and drive innovation in the ever-evolving world of web development.
        </p>
      </div>

      </div>
      
    );
  }
}

export default About;
