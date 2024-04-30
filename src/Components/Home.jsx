import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import Navbar from './Navbar';
import About from './About';
import Footer from './Footer';
const HomePage = () => {
  const [leavingFrom, setLeavingFrom] = React.useState('');
  const [goingTo, setGoingTo] = React.useState('');

  const handleReverse = () => {
    const temp = leavingFrom;
    setLeavingFrom(goingTo);
    setGoingTo(temp);
  };

  return (
    <>
    <Navbar/>
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={leavingFrom}
              onChange={(e) => setLeavingFrom(e.target.value)}
              placeholder="Leaving From"
            />
            <input
              type="text"
              className="form-control"
              value={goingTo}
              onChange={(e) => setGoingTo(e.target.value)}
              placeholder="Going To"
            />
            <input type="date" className="form-control" />
            <div className="input-group-append">
              <Button variant="primary" onClick={handleReverse}>
              <i class="bi bi-arrow-down-up"></i>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"/>
</svg>
              </Button>
              <Button variant="primary">Search</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">About Us <span class="text-muted">Safar ka safar.</span></h2>
        <p class="lead">This online bus ticket booking platform that aims to offer a great
       level of convenience and reliability. With this platform, you will be 
      able to get rid of the long queues on bus stations or jammed streets
       to book the bus tickets. We are the most reliable online portal, 
       where you will be able to book bus tickets directly from the major 
       bus operators (over 1000 bus operators) for all the routes in Odisha 
       and surrounding States.</p>
      </div>
      <div class="col-md-5">
        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" 
        src="image/1628619.jpg" alt="Bus" width="400" height="700"/>
      </div>
    </div>
    </Container>
    <div class="text-center">
        <h4>The Numbers are Growing</h4>
    </div>
  <div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
      </div>
    </div>
  </div>
</div> 
  <Footer/>
 </>
  );
};

export default HomePage;