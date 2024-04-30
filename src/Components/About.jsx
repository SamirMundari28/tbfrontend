import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar/>
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
      <div class="col-md-4">
        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" 
        src="image/1628619.jpg" alt="Bus" width="400" height="700"/>
      </div>
    </div>
    </>
  );
};

export default About;