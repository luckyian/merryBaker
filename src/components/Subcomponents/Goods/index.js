import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";
import frontpage from "./karensPlaceWords.jpeg"
import ending from "./merryLogo2.jpeg"
import storefront from "./KarensOutside.jpeg"
import inside from "./KarensInside.jpeg"


function Goods() {



    return (
        <Card className="aboutBack">
          
        <Card.Body className="text">
          
          <div className="tourWords2">
          
            <Card.Img src={frontpage} alt="TheGoods"></Card.Img>
            
          </div>
          <div>
         <p className="tourWords">
         <h1 className="tourWords">Karen's Place is a space for local small businesses to sell their porducts and has
            a commisary kitchen to produce high quality goods with commercial grade equipment.
            </h1>
           </p>
           <Card.Img src={storefront} alt="TheGoods"></Card.Img>
           <Card.Img src={inside} alt="TheGoods"></Card.Img>
        </div>

        </Card.Body>
      </Card>
  )
}
export default Goods;