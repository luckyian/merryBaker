import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Videos() {


  return (

    <Container>
      <br/>
      <Card>


      <Card.Img src=".\assets\merryGnomeClose.jpg" alt="TheGoods"></Card.Img>

      </Card>
      <br/>
      <Card className="video-responsive">

      <Card.Img src=".\assets\merryGnomeCookie.jpg" alt="TheGoods"></Card.Img>

      </Card >
<br/>
      <Card className="video-responsive">

      <Card.Img src=".\assets\merryGnomeFish.jpg" alt="TheGoods"></Card.Img>
      </Card >
      <br/>
      <Card className="video-responsive">

      
      <Card.Img src=".\assets\merryGnomePig.jpg" alt="TheGoods"></Card.Img>
      
      </Card >
      <br/>
      <Card className="video-responsive">

      <Card.Img src=".\assets\merryGnomeYellow.jpg" alt="TheGoods"></Card.Img>
      </Card >
      
      

    </Container >

  );

}

export default Videos;
