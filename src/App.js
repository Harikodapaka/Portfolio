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

function App() {
  let timelinedata = [
    {
      title: "Intermediate Web Developer",
      subtitle: "Deloitte Canada",
      description: "Develop high performant and end-to-end web application for various clients. Worked hugely on Angular/React and ASP .Net Core",
      date: "Jan 2020 - Present",
      iconName: "FaLaptopCode",
      iconBackgroundColor: "#20c997",
      contentBackgroundColor: "#20c997",
    },
    {
      title: "Software Product Prototyper Co-op",
      subtitle: "Deloitte Canada",
      description: "Develop prototypes using various technologies like Blockchain, RPA-WorkFusion, Machine Learning and docker",
      date: "Jan 2019 - Apr 2019",
      iconName: "FaRegIdBadge",
      iconBackgroundColor: "#747474",
      contentBackgroundColor: "#747474",
    },
    {
      title: "Post Graduation",
      subtitle: "Conestoga College, Canada",
      description: "Studied in Mobile Application Deveopment program, learned advanced application development principles. Received awards for academics.",
      date: "May 2018 - Aug 2019",
      iconName: "FaUserGraduate",
      iconBackgroundColor: "#0dcaf0",
      contentBackgroundColor: "#0dcaf0",
    },
    {
      title: "Web Developer",
      subtitle: "Tectoro Consulting Private Limited, India",
      description: "Developed responsive User interface using HTML5, CSS3, Bootstrap, Material Design",
      date: "Jun 2016 - Mar 2018",
      iconName: "FaLaptopCode",
      iconBackgroundColor: "#20c997",
      contentBackgroundColor: "#20c997",
    },
    {
      title: "Graduation",
      subtitle: "JNTUH, India",
      description: "Studied Electronics and Communication Engineering. Learned fundamentals of Computer Science.",
      date: "Aug 2012 - May 2016",
      iconName: "FaUserGraduate",
      iconBackgroundColor: "#747474",
      contentBackgroundColor: "#747474",
    }
  ]
  let technologies = [{
    name: "React",
    icon: "FaReact",
    iconColor: "#00D1F6",
    seperator: "|"
  },
  {
    name: "Bootstrap 5",
    icon: "FaBootstrap",
    seperator: "|"
  },
  {
    name: "Github Pages",
    icon: "FaGithub",
    iconColor: ""
  }
  ]
  return (
    <div className="App main-banner">
      <Container fluid className="mainContainer">
        <Row>
          <Header />
        </Row>
        <Row id="intro" className="align-items-center bg-intro full-height">
          <PersonalDetails />
        </Row>
        <Row id="projects" className="bg-projects align-items-center full-height">
          <Projects />
        </Row>
        <Row id="skills" className="bg-skills align-items-center full-height text-dark">
          <Skills />
        </Row>
        {
          timelinedata.length > 0 &&
          <Row id="experience" className="bg-projects">
            <TimeLine sectionTitle="Work Experience / Education" timelineData={timelinedata} />
          </Row>
        }
        <Row id="reachout" className="bg-reachout full-height align-items-center justify-content-center" >
          <ReachoutForm />
        </Row>
        {technologies.length > 0 && <Row className="footer-styles align-self-end">
          <Footer title="Built With" technologies={technologies} />
        </Row>}
      </Container>
    </div>
  );
}

export default App;
