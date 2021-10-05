import './PersonalDetails.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';

function PersonalDetails() {
    return (
        <section className="section-padding full-height bg-info text-center text-white" id="intro">
            <div className="position-absolute top-50 start-50 translate-middle">
                Hello,
                <div>
                    I'm Archit, a Full Stack Web Developer based in Waterloo, Canada.
                    That was an Ice Breaker! Cool, You are still reading. I can tell you more about me then.
                    I'm an INTJ, loves reading, travelling, playing guitar and ... I forgot.
                    Did you just ask about my passion? I can define it in two words,"Web Development".
                    Still curious, check out My Story to know more.
                </div>
            </div>
        </section>
    );
}

export default PersonalDetails;