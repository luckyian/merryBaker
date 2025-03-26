import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";
import frontpage from "./karensPlaceWords.jpeg"
import ending from "./merryLogo2.jpeg"


function Goods() {



    return (
        <Card className="aboutBack">
          
        <Card.Body className="text">
          
          <div className="tourWords2">
          
            <Card.Img src={frontpage} alt="TheGoods"></Card.Img>
            
          </div>
          <div>
         <p className="tourWords">
         <h1 className="tourWords">Karen's Place is the home of Merry Little Baker who sells macarons, cupcakes, 
            custom orders and other treats. It's also a spot for local small businesses to sell their porducts and
            a commisary kitchen.
            </h1>
           {/* <h3>TBD</h3> */}
           {/* <h3>Check Back Soon for Upcoming Shows</h3> */}
        

          </p>

        </div>

        </Card.Body>
      </Card>
  )
}
export default Goods;