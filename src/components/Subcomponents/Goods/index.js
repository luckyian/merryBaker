import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";


function Goods() {



    return (
        <Card className="aboutBack">
        <Card.Body className="text">
          <Card.Title className="tourTitle">Merry Goods</Card.Title>
          <div >
            <Card.Img src=".\assets\merryGnomeGreen.jpg" alt="TheGoods"></Card.Img>
          </div>
          <div>
         <p className="tourWords">

           {/* <h3>TBD</h3> */}
           {/* <h3>Check Back Soon for Upcoming Shows</h3> */}
         <h1>Cupcakes</h1>
         <br></br>
         <h4>
          <Card.Img src=".\assets\merryGnomePig.jpg" alt="Piggy"></Card.Img> 
         </h4>
         
         <br></br>
         
        
              
             

          </p>

        </div>

        </Card.Body>
      </Card>
  )
}
export default Goods;