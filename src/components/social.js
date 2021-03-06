import React, { Component } from 'react';
import gh from '../images/github.png';
import fb from '../images/facebook.png';
import linkedin from '../images/linkedin.png';
import res from '../images/resume.png';
import mes from '../images/message.png';
import resFile from '../images/jresume.pdf';

class Social extends Component {
    render() {
        return (
            <div className="socialLinks">
                <div><a className="hvr-icon-shrink" href="https://www.linkedin.com/in/joshua-yun-9709b0170/" rel="noopener noreferrer" target="_blank"><img className="hvr-icon" style={{width:"26px" }} src={linkedin} alt="https://www.linkedin.com/in/joshua-yun-9709b0170/"></img></a></div>
                <div><a className="hvr-icon-shrink" href="https://www.facebook.com/joshposh555/" rel="noopener noreferrer" target="_blank"><img className="hvr-icon" style={{maxWidth:"25px"}} src={fb} alt="https://www.facebook.com/joshposh555/"></img></a></div>
                <div><a className="hvr-icon-shrink" href="https://github.com/fizzyjosh555" rel="noopener noreferrer" target="_blank"><img className="hvr-icon" src={gh} style={{ paddingLeft: '1px', maxWidth:"25px"}} alt="https://github.com/fizzyjosh555"></img></a></div>
                <div><a className="hvr-icon-shrink" href={resFile} rel="noopener noreferrer" target="_blank"><img className="hvr-icon" src={res} style={{maxWidth:"25px"}} alt="Resume"></img></a></div>
                <div><a className="hvr-icon-shrink" href="mailto:kwbin6022@gmail.com" rel="noopener noreferrer" target="_blank"><img className="hvr-icon" src={mes} style={{maxWidth:"25px"}} alt="Message"></img></a></div>
            </div>
        )
    }
}

export default Social;