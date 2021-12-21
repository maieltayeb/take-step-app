import React from "react";
import {
  Jumbotron,
  Row,
  Col,
  Container,
  ListGroupItem,
  Alert
} from "reactstrap";
import "./footer.css";

const Footer = props => {
  return (
    <div>
      <Jumbotron className="bg p-0 m-0 mt-5" style={{ borderRadius: "0px" }}>
        <Jumbotron
          className="m-0 "
          style={{ backgroundColor: "#40434685", borderRadius: "0px" }}
        >
          <Container>
            <Row style={{ justifyContent: "space-around" }}>
              <Col sm="6" md="auto">
                <h3 className="text-warning">COMPANY</h3>
                <ListGroupItem>About Us</ListGroupItem>
                <ListGroupItem>Investor Relations</ListGroupItem>
                <ListGroupItem>Careers</ListGroupItem>
                <ListGroupItem>Upwork Foundation</ListGroupItem>
                <ListGroupItem>Press</ListGroupItem>
                <ListGroupItem>Trust & Safety</ListGroupItem>
          
              </Col>
              <Col sm="6" md="auto">
                <h3 className="text-warning">RESOURCES</h3>
              
                <ListGroupItem>Customer Support</ListGroupItem>
                <ListGroupItem>Customer Stories</ListGroupItem>
                <ListGroupItem>Careers</ListGroupItem>
                <ListGroupItem>Business Resources</ListGroupItem>
                <ListGroupItem>Upwork Reviews</ListGroupItem>
              </Col>
              <Col sm="6" md="auto">
                <h3 className="text-warning">BROWSE</h3>
              
                <ListGroupItem>Freelancers by Skill</ListGroupItem>
                <ListGroupItem>Freelancers in USA</ListGroupItem>
                <ListGroupItem>Freelancers in UK</ListGroupItem>
                <ListGroupItem>Upwork Foundation</ListGroupItem>
                <ListGroupItem>Freelancers in Canada</ListGroupItem>
                <ListGroupItem>Freelancers in Australia</ListGroupItem>
                <ListGroupItem>Jobs in USA</ListGroupItem>
              </Col>
            </Row>
          </Container>
        
        </Jumbotron>
      </Jumbotron>
      <Alert
        className="bg-warning m-0 text-center text-dark border-warning"
        style={{ borderRadius: "0px" }}
      >
        &copy; CopyRights 2020
      </Alert>
    </div>
  );
};

export default Footer;
