import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";
import logo from "./merryGnomeLogo.jpg";


function Logo() {



    return (
        <Card className="aboutBack">
            <Card.Body>
                
                <div >
                    <Card.Img src={logo}  alt="MerryLittleBaker"></Card.Img>
                </div>
            </Card.Body>
        </Card>
    )
}
export default Logo;