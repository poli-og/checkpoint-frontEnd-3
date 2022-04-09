import "./styles.css";
import { SiRobotframework, SiCypress } from 'react-icons/si';


export default function Skills() {
    return (
      <div className="skills" id="skills">
        <h1 className="skills-title">Skills & Tools</h1>
        <ul className="list-skills">
        <li className="skill-card"><i class="devicon-html5-plain-wordmark colored"></i></li>
        <li className="skill-card"><i class="devicon-css3-plain-wordmark colored"></i></li>
        <li className="skill-card"><i class="devicon-javascript-plain colored"></i></li>
        <li className="skill-card"><i class="devicon-bootstrap-plain-wordmark colored"></i></li>
        <li className="skill-card"><i class="devicon-canva-original colored"></i></li>
        <li className="skill-card"><i class="devicon-cucumber-plain colored"></i></li>
        <li className="skill-card"><SiCypress color="green" size={60} /></li>
        <li className="skill-card"><i class="devicon-docker-plain-wordmark colored"></i></li>
        <li className="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height={70}/></li>        
        <li className="skill-card"><i class="devicon-git-plain colored"></i></li>
        <li className="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" height={80} /></li> 
        <li className="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" height={70}/></li>
        <li className="skill-card"><i class="devicon-jest-plain colored"></i></li>
        <li className="skill-card"><i class="devicon-illustrator-plain colored"></i></li>
        <li className="skill-card"><i class="devicon-photoshop-plain colored"></i></li>
        <li className="skill-card"><i class="devicon-react-original colored"></i></li>
        <li className="skill-card"><SiRobotframework color="blue" size={60} /></li>
        <li className="skill-card"><i class="devicon-selenium-original colored"></i></li>
        <li className="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" height={80} /></li>
        <li className="skill-card"><i class="devicon-spring-plain colored"></i></li>
        </ul>     
      </div>
    );
  }