import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import photo from '../Images/photo13.jpeg';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={photo}
                alt="avatar"
                style={{height: '250px',
                borderRadius: '53%',       
                }}
                
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Om Singh</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p style={{fontSize: '19px'}}>A dedicated programming enthusiast, known for adaptability and quick learning. Possesses a strong problem-solving acumen, delivering efficient solutions. Collaborative team player with effective communication skills. Committed to continuous learning, staying updated with industry trends, and consistently delivering high-quality work.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Dera bassi, Punjab(140507)</p>
            <h5>Phone</h5>
            <p>6284310953</p>
            <h5>Email</h5>
            <p>om43singh21@gmail.com</p>
            <h5>Web</h5>
            <p>https://portfolio4321-a5a36f249374.herokuapp.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Accomplishments</h5>
            <ul style={{fontSize:'1.2rem'}}>
            <li>Got <b>rank 4</b> in tech hackathon organized by gemini solutions</li>
            <li>Qualified <b>Flipkart Grid 5.0 </b> round 1 for robotics</li>
            <li>Solved <b>450+</b> Dsa Problems on Leetcode</li>
            <li>Solved <b>400+</b> Dsa Problems on Gfg</li>
            <li>Under Top 50 rank in gfg according to institute wise</li>
            <li>Got <b>global rank </b> nearly 2 thousand in leetcode weekly contest 352 </li>
            <li>Cracked Joint Entrance Exam int 2021 with <b>97.36 </b> percentile (top 0.24% in chemistry)</li>
            <li>Score 1000+ in Gfg</li>
            </ul>
          

          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2021}
              endYear={2025}
              schoolName="UIET, Panjab University"
              schoolDescription="Doing B.E in Computer Science and engneering with 8.56 overall cgpa"
               />

               <Education
                 startYear={2018}
                 endYear={2020}
                 schoolName="Govt. Model senior secondary School sector 16 chandigarh ,(160015)"
                 schoolDescription="Completed 11th and 12th"
                  />
                 
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear="01/05/2023"
              endYear="01/07/2023"
              jobName="Web Dev Intern(DIC, Panjab University)"
              jobDescription="Actively contributing to development of a comprehensive Panjab University Portal tailored for University’s Professor ,Successfully Implemented crucial Frontend functionalities like manging the routes, rendering the essential components on the page also used some tools like hooks, redux toolkit and contexts,	Seamlessly Integrated backend logic with the frontend to ensure cohesive user experience 

              "
              />

             
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                      skill="C++"
                      progress={100}
                      />
              <Skills
                    skill="Object Oriented Programming "
                    progress={95}
                    />
              <Skills
                skill="javascript"
                progress={80}
                />
                <Skills
                  skill="HTML/CSS(Tailwind)"
                  progress={79}
                  />
                   <Skills
                      skill="ReactJs"
                      progress={75}
                      />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                     <Skills
                    skill="ExpressJs"
                    progress={70}
                    />
                     <Skills
                    skill="MongoDb"
                    progress={55}
                    />
                   


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
