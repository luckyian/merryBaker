import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import example1 from "./merryGnomeClose.jpg";
import example2 from "./merryGnomeCookie.jpg";
import example3 from "./merryGnomeFish.jpg";
import example4 from "./merryOreoSundae.jpg";
import example5 from "./merryPeachCobbler.jpg";

function Cupcakes() {


  return (

    <Container>
      <br/>
      <Card>


      <Card.Img src={example1} alt="TheGoods"></Card.Img>

      </Card>
      <br/>
      <Card className="video-responsive">

      <Card.Img src={example4} alt="TheGoods"></Card.Img>

      </Card >
<br/>
      <Card className="video-responsive">

      <Card.Img src={example2} alt="TheGoods"></Card.Img>
      </Card >
      <br/>
      <Card className="video-responsive">

      
      <Card.Img src={example3} alt="TheGoods"></Card.Img>
      
      </Card >
      <br/>
      <Card className="video-responsive">

      <Card.Img src={example5} alt="TheGoods"></Card.Img>
      </Card >
      
      

    </Container >

  );

}

export default Cupcakes;
