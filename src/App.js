import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col'
import Header from './components/Header/Header';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ReachoutForm from './components/ReachoutForm/ReachoutForm';
import TimeLine from './components/Timeline/Timeline';
import Footer from './components/Footer/Footer';
import {
  HEADER_DATA, TIMELINE_DATA, TECHNOLOGIES,
  PERSONAL_DETAILS, PROJECTS_DATA, SKILLS
} from './Data';



import ReactGA from 'react-ga';
import { useEffect } from 'react';


const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

function App() {
  useEffect(() => {
    console.log("REACT_APP_GA_TRACKING_ID",TRACKING_ID);
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview('/');

  }, [])
  return (
    <div className="App main-banner">
      <Container fluid className="mainContainer">
        <Row>
          <Header
            varient={HEADER_DATA.varient}
            title={HEADER_DATA.title}
            links={HEADER_DATA.links}
          />
        </Row>
        <Row id="intro" className="align-items-center bg-intro full-height">
          <PersonalDetails
            title={PERSONAL_DETAILS.title}
            subtitle={PERSONAL_DETAILS.subtitle}
          />
        </Row>
        <Row id="projects" className="bg-projects align-items-center full-height">
          <Projects
            title={PROJECTS_DATA.title}
            projects={PROJECTS_DATA.projects}
            more_projects_link={PROJECTS_DATA.more_projects_link}
          />
        </Row>
        <Row id="skills" className="bg-skills align-items-center full-height text-dark">
          <Skills
            title={SKILLS.title}
            skill_catrgories={SKILLS.skill_catrgories}
          />
        </Row>
        {
          TIMELINE_DATA &&
          <Row id="experience" className="bg-projects">
            <TimeLine sectionTitle={TIMELINE_DATA.title} timelineData={TIMELINE_DATA.timeline} />
          </Row>
        }
        <Row id="reachout" className="bg-reachout full-height align-items-center justify-content-center" >
          <ReachoutForm />
        </Row>
        {TECHNOLOGIES.length > 0 && <Row>
          <Footer title="Built With" technologies={TECHNOLOGIES} />
        </Row>}
      </Container>
    </div>
  );
}

export default App;
