import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import myimage from "../Images/photo13.jpeg";
import leet from "../Images/leetcode.png";
import gf from "../Images/gfg.png";

class Landing extends Component {



  render() {
    const openGitHubLinkF = () => {
      window.open('https://www.linkedin.com/in/om-singh-2111a0223', '_blank'); // Replace with the GitHub URL you want to open
      
    };
    const opengfg = () => {
      window.open('https://auth.geeksforgeeks.org/user/userom4321/practice', '_blank'); // Replace with the GitHub URL you want to open
    };
    const openleet = () => {
      window.open('https://leetcode.com/om4321/', '_blank'); // Replace with the GitHub URL you want to open
    };
    return(
      <div style={{
        height: '100%',width:'100%',backgroundColor:'#F0FFFF',
        paddingTop:'13px'
      }}>
        <div style={{display: 'flex',justifyContent: 'center',textAlign: 'center',flexDirection: 'column',
     
    }}>

<div className="banner-text" style={{padding:'3px',paddingTop:'15px'}}>
          <div  style={{width: '50%', margin: 'auto'}}>
<img
  src={myimage}
  alt="avatar"
  style={{
  borderRadius: '104%',
  height: '33vh',
  width: '31vh',  
}}
            />

</div>
            <h1>Full Stack Web Developer</h1>

          <hr/>

        <p>HTML/CSS | Tailwind | Bootstrap | JavaScript | React js| NodeJS | Express js| MongoDB</p>

      <div className="social-links" style={{
        display: 'flex', 
      }}>

<div style={{display:'flex',flexWrap:'wrap',gap: '13%',width:'40vw' }}>
<div style={{maxWidth: '50%'}}>
        <a href="https://www.linkedin.com/in/om-singh-2111a0223" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>
        </div>
    

        {/* Github */}
        <div style={{maxWidth: '50%'}}>
        <a href="https://github.com/omsingh4321" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true" />
        </a>
        </div>
     

  
     
  <div style={{
    cursor:'pointer'
    ,maxWidth: '50%'
  }}
  onClick={openleet}
  >
  <img
  src={leet}
  alt="avatar"
  style={{
  borderRadius: '30%',
  height: '9vhvh',
  width: '9vh',
  padding: '10px',
  paddingBottom: '12px',
  paddingLeft: '14px'
}}/>
  </div>
  <div style={{
    cursor:'pointer',
    maxWidth: '50%'
  }} 
  onClick={opengfg}
  >
  <img
  src={gf}
  alt="avatar"
  style={{
  borderRadius: '30%',
  height: '10vh',
  width: '9vh',  
  padding: '10px',
}}/>
  </div>

</div>

   

      </div>
          </div>
    </div>
      </div>  
         
    )
  }
}

export default Landing;
