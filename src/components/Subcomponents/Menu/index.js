import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";
import menu from "./menu.jpeg";


function Menu() {



    return (
        <Card className="aboutBack">
            <Card.Body>
                
                <div >
                    <Card.Img src={menu}  alt="MerryLittleBaker"></Card.Img>
                </div>
            </Card.Body>
        </Card>
    )
}
export default Menu;