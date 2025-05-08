import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import example1 from "./cake21.jpeg";
import example2 from "./cake22.jpeg";
import example3 from "./cake23.jpeg";
import example4 from "./cake24.jpeg";
import example5 from "./cake25.jpeg";


function Cakes() {


  return (

    <Container>
      <br/>
      <h1 className="cakes">Cakes</h1>
      <br/>
      <Card>


      <Card.Img src={example1} alt="TheGoods"></Card.Img>

      </Card>
      <br/>
      <Card>

      <Card.Img src={example4} alt="TheGoods"></Card.Img>

      </Card >
<br/>
      <Card>

      <Card.Img src={example2} alt="TheGoods"></Card.Img>
      </Card >
      <br/>
      <Card>

      
      <Card.Img src={example3} alt="TheGoods"></Card.Img>
      
      </Card >
      <br/>
      <Card>

      <Card.Img src={example5} alt="TheGoods"></Card.Img>

      </Card >
      <br/>
      
<br/>
    

    </Container >

  );

}

export default Cakes;
