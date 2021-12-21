import React from "react";
import Header from "../../Layout/Header/header";
import Footer from "../../Layout/Footer/footer";
import NavWelcome from "../../Layout/navWelcome";
import { connect } from "react-redux";
import { Container} from "reactstrap";
const AboutUs=props=> {
return(
    <>
    <NavWelcome />

  <Container>
      <div style={{height:"50px"}}></div>
  </Container>
    <Container>
        <h2>About Us :</h2>
        <article>
          Take Step ,is a web platform that simulate work environment 
        by providing them tasks from real projects and provide a mentorship to advance their skills. 
        The website will connect volunteer experts, who will post real tasks for learners to practice on,
         with learners eager to work. Learners will be assigned tasks, submit them,
          and receive feedback from experts. 
        Also, they can pay few fees for more in depth feedback and Q&A session with experts.
        </article>
        </Container>
        <Container></Container>
    <Footer></Footer>
    </>
)

}

    
export default connect()(AboutUs);