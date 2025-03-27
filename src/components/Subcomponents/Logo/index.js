import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";
import logo from "./logo3.jpeg";
import ribbon from "./ribbonCutting.jpeg"


function Logo() {



    return (
        <Card className="aboutBack">
            <Card.Body>
                
                <div >
                    <Card.Img src={logo}  alt="MerryLittleBaker"></Card.Img>
                </div>
                <Card>
                <p className="tourWords">
         <h1 className="tourWords">Merry Little Baker works and sells it's goods out of Karen's Place in
            Stanwood, WA.  They opened the store on February 28th, 2025.
            </h1>
           </p>
           </Card>
           <div>
           <Card.Img src={ribbon}  alt="RibbonCutting"></Card.Img>
           </div>
            </Card.Body>
        </Card>
    )
}
export default Logo;