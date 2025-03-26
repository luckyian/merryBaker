import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import example1 from "./cupCake1.jpeg";
import example2 from "./cupCake2.jpeg";
import example3 from "./cupCake3.jpeg";
import example4 from "./cupcake4.jpeg";
import example5 from "./cupCake5.jpeg";
import example6 from "./cupCake6.jpeg";
import example7 from "./cupCake7.jpeg";
import example8 from "./cupCake8.jpeg";
import example9 from "./cupCake9.jpeg";
import example10 from "./carmelCupCake.jpeg";
import example11 from "./chocolateBarCupCake.jpeg";
import example12 from "./cookieCupCake.jpeg";
import example13 from "./penguinCupCake.jpeg";
import example14 from "./truckCupCake.jpeg";
import example15 from "./barbieCupCake.jpeg";

function Cupcakes() {


  return (

    <Container>
      <br/>
      <h1 className="cupcakes">Cupcakes</h1>
      <br/>
      <Card>


      <Card.Img src={example4} alt="TheGoods"></Card.Img>

      </Card>
      <br/>
      <Card>

      <Card.Img src={example1} alt="TheGoods"></Card.Img>

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
      <Card>

      <Card.Img src={example6} alt="TheGoods"></Card.Img>
      </Card >

      <br/>
      <Card>

      <Card.Img src={example7} alt="TheGoods"></Card.Img>
      </Card >

      <br/>
      <Card>

      <Card.Img src={example8} alt="TheGoods"></Card.Img>
      </Card >

      <br/>
      <Card>

      <Card.Img src={example9} alt="TheGoods"></Card.Img>
      </Card >

      <br/>
      <Card>

      <Card.Img src={example10} alt="TheGoods"></Card.Img>
      </Card >

      <br/>
      <Card>

      <Card.Img src={example11} alt="TheGoods"></Card.Img>
      </Card >

      <br/>
      <Card>

      <Card.Img src={example12} alt="TheGoods"></Card.Img>
      </Card >

      <br/>
      <Card>

      <Card.Img src={example13} alt="TheGoods"></Card.Img>
      </Card >

      <br/>
      <Card>

      <Card.Img src={example14} alt="TheGoods"></Card.Img>
      </Card >

      <br/>
      <Card>

      <Card.Img src={example15} alt="TheGoods"></Card.Img>
      </Card >
      

    </Container >

  );

}

export default Cupcakes;
