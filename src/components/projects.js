import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import chatphoto from "../Images/cht.png";
import filephoto from "../Images/file.png";
import fitnessphoto from "../Images/fitness.png";
import notsphoto from "../Images/nots.png";
import puphoto from "../Images/pu.png";
import ticphoto from "../Images/tic.png";
import ticphotoai from "../Images/tic1.jpg";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      const openGitHubLinkchat = () => {
        window.open('https://github.com/omsingh4321/ChatRoom', '_blank'); // Replace with the GitHub URL you want to open
      };
      const openGitHubLinkf = () => {
        window.open('https://github.com/omsingh4321/Fitness-Tracking', '_blank'); // Replace with the GitHub URL you want to open
      };
      const openGitHubLinkt = () => {
        window.open('https://github.com/omsingh4321/Tic-Tac-Toe', '_blank'); // Replace with the GitHub URL you want to open
      };
      
      return(
        <div style={{display: 'flex', flexWrap:'wrap',gap:'14px',flexDirection: 'row',}}>
          {/* Project 1 */}

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>

            <CardTitle style={{color: '#fff', height: '176px',  background: `url(${chatphoto}) center / cover`}} ></CardTitle>
            <CardText >
            <p style={{fontSize:'22px'}}>ChatRoom</p>  
            </CardText>
            <CardActions border style={{justifyContent:'center',display:'flex'}}>
              <Button colored onClick={openGitHubLinkchat}>GitHub</Button>
            </CardActions>
           
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px',  background: `url(${fitnessphoto}) center / cover`,}} ></CardTitle>
            <CardText>
            <p style={{fontSize:'22px'}}>Fitness Tracker</p>  
            </CardText>
            <CardActions border style={{justifyContent:'center',display:'flex'}}>
              <Button colored onClick={openGitHubLinkf}>GitHub</Button>
             
            </CardActions>
           
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px',  background: `url(${ticphoto}) center / cover`,}} ></CardTitle>
            <CardText>
              
            </CardText>
            <CardActions border style={{justifyContent:'center',display:'flex'}}>
            <Button colored onClick={openGitHubLinkt}>GitHub</Button>
            </CardActions>
            {/* <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu> */}
          </Card>

          
        </div>


      )
    } else if(this.state.activeTab === 1) {
      const openGitHubLinkP = () => {
        window.open('https://github.com/RiteshGangwar2022/PUexam', '_blank'); // Replace with the GitHub URL you want to open
      };

      return (
        <div style={{display: 'flex', flexWrap:'wrap',gap:'14px',flexDirection: 'row',}}>
                 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${puphoto}) center / cover`,}} ></CardTitle>
            <CardText>
            <p style={{fontSize:'22px'}}>PuExam</p>  
            </CardText>
            <CardActions border style={{justifyContent:'center',display:'flex'}}>
              <Button colored onClick={openGitHubLinkP}>GitHub</Button>
             
            </CardActions>
          
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      const openGitHubLinkF = () => {
        window.open('https://github.com/omsingh4321/File-Compression-System', '_blank'); // Replace with the GitHub URL you want to open
      };
      const openGitHubLinkai = () => {
        window.open('https://github.com/omsingh4321/Tic-Tac-Toe_AI-Based', '_blank'); // Replace with the GitHub URL you want to open
      };

      return (
        <div style={{display: 'flex', flexWrap:'wrap',gap:'14px',flexDirection: 'row',}}>
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px',  background: `url(${filephoto}) center / cover`,}} ></CardTitle>
            <CardText>
            <p style={{fontSize:'22px'}}>File Compressor</p>  
            </CardText>
            <CardActions border style={{justifyContent:'center',display:'flex'}}>
              <Button colored onClick={openGitHubLinkF}>GitHub</Button>
             
            </CardActions>
         
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px',  background: `url(${ticphotoai}) center / cover`,}} ></CardTitle>
            <CardText>
            <p style={{fontSize:'22px'}}>Tic-Tac-Toe</p>  
            </CardText>
            <CardActions border style={{justifyContent:'center',display:'flex'}}>
              <Button colored onClick={openGitHubLinkai}>GitHub</Button>
             
            </CardActions>
         
          </Card>

        </div>
      )
    } else if(this.state.activeTab === 3) {
      const openGitHubLinkF = () => {
      window.open('https://github.com/omsingh4321/Notes-Making-App', '_blank'); // Replace with the GitHub URL you want to open
    };
      return (
        <div >
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px',  background: `url(${notsphoto}) center / cover`,}} ></CardTitle>
            <CardText>
            <p style={{fontSize:'22px'}}>Notes Making</p>  
            </CardText>
            <CardActions border style={{justifyContent:'center',display:'flex'}}>
              <Button colored onClick={openGitHubLinkF}>GitHub</Button>
             
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }

  }



  render() {
    return(
      <div style={{
        height: '100%',width:'100%',backgroundColor:'#F0FFFF',
        paddingTop:'13px'
      }}>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Mern</Tab>
          <Tab>C++</Tab>
          <Tab>PHP</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
