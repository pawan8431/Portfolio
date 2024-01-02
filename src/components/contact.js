import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import imge from "../Images/photo13.jpeg";

class Contact extends Component {
  render() {
    return(
      <div className="contact-body" style={{
        height: '100%',width:'100%',backgroundColor:'#F0FFFF',
        paddingTop:'13px'
      }}>
        <Grid className="contact-grid" style={{boxShadow: '5px 5px 5px 5px gray'}}
>
          <Cell col={6}>
            <h2>Om Singh</h2>
            <img
              src={imge}
              alt="avatar"
  style={{
  borderRadius: '8%',
  height: '33vh',
  width: '31vh',  
}}
              
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
             A dedicated programming enthusiast, known for adaptability and quick learning. Possesses a strong problem-solving acumen, delivering efficient solutions. Collaborative team player with effective communication skills. Committed to continuous learning, staying updated with industry trends, and consistently delivering high-quality work.
             </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    6284310953
                  </ListItemContent>
                </ListItem>

          

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    om43singh21@gmail.com
                  </ListItemContent>
                </ListItem>

          


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
