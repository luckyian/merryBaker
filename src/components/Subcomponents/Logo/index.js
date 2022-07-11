import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";


function Logo() {



    return (
        <Card className="aboutBack">
            <Card.Body>
                
                <div >
                    <Card.Img src=".\assets\merryLogo2.jpg"  alt="MerryLittleBaker"></Card.Img>
                </div>
            </Card.Body>
        </Card>
    )
}
export default Logo;